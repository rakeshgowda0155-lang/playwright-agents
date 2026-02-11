#!/usr/bin/env node

/**
 * Post Playwright Test Results to Jira
 * 
 * This script posts test execution results as a comment to a Jira story.
 * 
 * Usage: node scripts/post-results-to-jira.js <STORY_ID> <RESULTS_FILE>
 * Example: node scripts/post-results-to-jira.js ST-17 test-results.json
 * 
 * Environment variables required:
 * - JIRA_HOST: Jira instance URL (e.g., https://your-domain.atlassian.net)
 * - JIRA_EMAIL: Your Jira account email
 * - JIRA_API_TOKEN: API token for authentication
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// Parse command line arguments
const storyId = process.argv[2];
const resultsFile = process.argv[3];

if (!storyId) {
  console.error('Error: Story ID is required');
  console.error('Usage: node scripts/post-results-to-jira.js <STORY_ID> <RESULTS_FILE>');
  process.exit(1);
}

// Get configuration from environment variables
const JIRA_HOST = process.env.JIRA_HOST || 'https://rakegowda015-1759229291995.atlassian.net';
const JIRA_EMAIL = process.env.JIRA_EMAIL;
const JIRA_API_TOKEN = process.env.JIRA_API_TOKEN;

// Read test results
let testResults;
if (resultsFile && fs.existsSync(resultsFile)) {
  try {
    testResults = JSON.parse(fs.readFileSync(resultsFile, 'utf8'));
  } catch (error) {
    console.error('Error reading results file:', error.message);
    process.exit(1);
  }
} else {
  // Use mock results for demo
  testResults = generateMockResults();
}

// Format the comment
const comment = formatTestResults(testResults, storyId);

// Check if credentials are available
if (!JIRA_EMAIL || !JIRA_API_TOKEN) {
  console.warn('Warning: JIRA_EMAIL and JIRA_API_TOKEN environment variables not set.');
  console.warn('Cannot post to Jira. Here is what would be posted:\n');
  console.log('=== Test Results Comment ===');
  console.log(comment);
  console.log('\n✓ Results formatted (not posted due to missing credentials)');
} else {
  postCommentToJira(storyId, comment);
}

function generateMockResults() {
  const timestamp = new Date().toISOString();
  return {
    timestamp,
    summary: {
      total: 5,
      passed: 4,
      failed: 1,
      skipped: 0
    },
    tests: [
      {
        name: 'Login page should have username and password fields',
        status: 'passed',
        duration: 1234
      },
      {
        name: 'Valid credentials should redirect to dashboard',
        status: 'passed',
        duration: 2345
      },
      {
        name: 'Invalid credentials should show error message',
        status: 'failed',
        duration: 1567,
        error: 'Expected error message to be visible'
      },
      {
        name: 'Password field should mask input',
        status: 'passed',
        duration: 890
      },
      {
        name: 'Remember me checkbox should persist session',
        status: 'passed',
        duration: 3456
      }
    ],
    browsers: ['chromium', 'firefox', 'webkit']
  };
}

function formatTestResults(results, storyId) {
  const { summary, tests, timestamp, browsers } = results;
  
  const passRate = ((summary.passed / summary.total) * 100).toFixed(1);
  const status = summary.failed === 0 ? '✅ PASSED' : '❌ FAILED';
  
  let comment = `h3. 🎭 Playwright Test Results for ${storyId}\n\n`;
  comment += `*Status:* ${status}\n`;
  comment += `*Executed:* ${new Date(timestamp || Date.now()).toLocaleString()}\n`;
  comment += `*Pass Rate:* ${passRate}% (${summary.passed}/${summary.total})\n`;
  
  if (browsers && browsers.length > 0) {
    comment += `*Browsers:* ${browsers.join(', ')}\n`;
  }
  
  comment += '\n----\n\n';
  comment += 'h4. Test Details\n\n';
  
  // Passed tests
  const passedTests = tests.filter(t => t.status === 'passed');
  if (passedTests.length > 0) {
    comment += '{panel:bgColor=#E3FCEF}\n';
    comment += 'h5. ✅ Passed Tests\n';
    passedTests.forEach(test => {
      comment += `* ${test.name} _(${test.duration}ms)_\n`;
    });
    comment += '{panel}\n\n';
  }
  
  // Failed tests
  const failedTests = tests.filter(t => t.status === 'failed');
  if (failedTests.length > 0) {
    comment += '{panel:bgColor=#FFEBE6}\n';
    comment += 'h5. ❌ Failed Tests\n';
    failedTests.forEach(test => {
      comment += `* ${test.name} _(${test.duration}ms)_\n`;
      if (test.error) {
        comment += `** Error: {{${test.error}}}\n`;
      }
    });
    comment += '{panel}\n\n';
  }
  
  // Skipped tests
  const skippedTests = tests.filter(t => t.status === 'skipped');
  if (skippedTests.length > 0) {
    comment += '{panel:bgColor=#F4F5F7}\n';
    comment += 'h5. ⊘ Skipped Tests\n';
    skippedTests.forEach(test => {
      comment += `* ${test.name}\n`;
    });
    comment += '{panel}\n\n';
  }
  
  return comment;
}

function postCommentToJira(storyId, comment) {
  const url = new URL(`/rest/api/3/issue/${storyId}/comment`, JIRA_HOST);
  
  const auth = Buffer.from(`${JIRA_EMAIL}:${JIRA_API_TOKEN}`).toString('base64');
  
  const payload = JSON.stringify({
    body: {
      type: 'doc',
      version: 1,
      content: [
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: comment
            }
          ]
        }
      ]
    }
  });
  
  const options = {
    hostname: url.hostname,
    path: url.pathname,
    method: 'POST',
    headers: {
      'Authorization': `Basic ${auth}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(payload)
    }
  };

  console.log(`Posting test results to ${storyId}...`);

  const req = https.request(options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {
      if (res.statusCode === 201 || res.statusCode === 200) {
        console.log('✓ Test results posted to Jira successfully!');
        try {
          const response = JSON.parse(data);
          console.log(`Comment ID: ${response.id}`);
        } catch (e) {
          // Ignore parse error
        }
      } else {
        console.error(`Error posting to Jira: HTTP ${res.statusCode}`);
        console.error(data);
      }
    });
  });

  req.on('error', (error) => {
    console.error('Error connecting to Jira:', error.message);
  });

  req.write(payload);
  req.end();
}
