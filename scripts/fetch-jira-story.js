#!/usr/bin/env node

/**
 * Jira Story Fetcher
 * 
 * This script fetches a Jira story and extracts its acceptance criteria and description.
 * It can be used as part of the test automation workflow.
 * 
 * Usage: node scripts/fetch-jira-story.js <STORY_ID>
 * Example: node scripts/fetch-jira-story.js ST-17
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

if (!storyId) {
  console.error('Error: Story ID is required');
  console.error('Usage: node scripts/fetch-jira-story.js <STORY_ID>');
  process.exit(1);
}

// Get configuration from environment variables
const JIRA_HOST = process.env.JIRA_HOST || 'https://rakegowda015-1759229291995.atlassian.net';
const JIRA_EMAIL = process.env.JIRA_EMAIL;
const JIRA_API_TOKEN = process.env.JIRA_API_TOKEN;

// Check if credentials are available
if (!JIRA_EMAIL || !JIRA_API_TOKEN) {
  console.warn('Warning: JIRA_EMAIL and JIRA_API_TOKEN environment variables not set.');
  console.warn('Using mock data for demonstration purposes.');
  useMockData(storyId);
} else {
  fetchFromJira(storyId);
}

function fetchFromJira(storyId) {
  const url = new URL(`/rest/api/3/issue/${storyId}`, JIRA_HOST);
  
  const auth = Buffer.from(`${JIRA_EMAIL}:${JIRA_API_TOKEN}`).toString('base64');
  
  const options = {
    hostname: url.hostname,
    path: url.pathname + url.search,
    method: 'GET',
    headers: {
      'Authorization': `Basic ${auth}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  };

  console.log(`Fetching story ${storyId} from ${JIRA_HOST}...`);

  const req = https.request(options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {
      if (res.statusCode === 200) {
        try {
          const issue = JSON.parse(data);
          processIssueData(issue, storyId);
        } catch (error) {
          console.error('Error parsing Jira response:', error.message);
          process.exit(1);
        }
      } else {
        console.error(`Error fetching story: HTTP ${res.statusCode}`);
        console.error(data);
        console.warn('\nFalling back to mock data...');
        useMockData(storyId);
      }
    });
  });

  req.on('error', (error) => {
    console.error('Error connecting to Jira:', error.message);
    console.warn('\nFalling back to mock data...');
    useMockData(storyId);
  });

  req.end();
}

function useMockData(storyId) {
  console.log('\n=== Using Mock Data for Demo ===\n');
  
  const mockIssue = {
    key: storyId,
    fields: {
      summary: 'User Login and Authentication',
      description: {
        content: [
          {
            content: [
              {
                text: 'As a user, I want to be able to log in to the application using my credentials so that I can access my personalized dashboard.'
              }
            ]
          },
          {
            content: [
              {
                text: '\nAcceptance Criteria:\n1. Login page should have username and password fields\n2. Valid credentials should redirect to dashboard\n3. Invalid credentials should show error message\n4. Password field should mask input\n5. Remember me checkbox should persist session'
              }
            ]
          }
        ]
      },
      issuetype: {
        name: 'Story'
      },
      status: {
        name: 'To Do'
      }
    }
  };

  processIssueData(mockIssue, storyId);
}

function processIssueData(issue, storyId) {
  const summary = issue.fields.summary || 'N/A';
  const issueType = issue.fields.issuetype?.name || 'N/A';
  const status = issue.fields.status?.name || 'N/A';
  
  // Extract description
  let description = '';
  if (issue.fields.description) {
    if (typeof issue.fields.description === 'string') {
      description = issue.fields.description;
    } else if (issue.fields.description.content) {
      // Atlassian Document Format (ADF)
      description = extractTextFromADF(issue.fields.description.content);
    }
  }

  // Try to extract acceptance criteria from description
  const acceptanceCriteria = extractAcceptanceCriteria(description);

  // Output the extracted data
  const result = {
    storyId: issue.key,
    summary,
    issueType,
    status,
    description,
    acceptanceCriteria,
    jiraUrl: `${JIRA_HOST}/browse/${issue.key}`
  };

  console.log('\n=== Story Details ===');
  console.log(`Story ID: ${result.storyId}`);
  console.log(`Summary: ${result.summary}`);
  console.log(`Type: ${result.issueType}`);
  console.log(`Status: ${result.status}`);
  console.log(`\nDescription:\n${result.description}`);
  
  if (result.acceptanceCriteria.length > 0) {
    console.log(`\nAcceptance Criteria:`);
    result.acceptanceCriteria.forEach((criterion, index) => {
      console.log(`${index + 1}. ${criterion}`);
    });
  }

  // Save to JSON file for further processing
  const outputPath = path.join(__dirname, '..', 'specs', `${storyId}-data.json`);
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2));
  console.log(`\n✓ Story data saved to: ${outputPath}`);

  // Update the test plan markdown file
  updateTestPlan(result);
}

function extractTextFromADF(content) {
  let text = '';
  
  function traverse(nodes) {
    if (!Array.isArray(nodes)) return;
    
    for (const node of nodes) {
      if (node.text) {
        text += node.text;
      }
      if (node.content) {
        traverse(node.content);
      }
      if (node.type === 'paragraph' || node.type === 'heading') {
        text += '\n';
      }
    }
  }
  
  traverse(content);
  return text.trim();
}

function extractAcceptanceCriteria(description) {
  const criteria = [];
  
  // Common patterns for acceptance criteria
  const patterns = [
    /acceptance criteria:?\s*([\s\S]*?)(?=\n\n|\n[A-Z][a-z]+:|$)/i,
    /criteria:?\s*([\s\S]*?)(?=\n\n|\n[A-Z][a-z]+:|$)/i,
    /given.*when.*then/gi
  ];

  for (const pattern of patterns) {
    const match = description.match(pattern);
    if (match) {
      const criteriaText = match[1] || match[0];
      
      // Split by numbered lists or bullet points
      const lines = criteriaText.split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0)
        .filter(line => /^(\d+[\.\)]|-|\*)\s/.test(line))
        .map(line => line.replace(/^(\d+[\.\)]|-|\*)\s*/, ''));
      
      if (lines.length > 0) {
        criteria.push(...lines);
        break;
      }
    }
  }

  return criteria;
}

function updateTestPlan(storyData) {
  const testPlanPath = path.join(__dirname, '..', 'specs', `${storyData.storyId}-feature.md`);
  
  let testPlan = `# Test Plan: ${storyData.storyId} - ${storyData.summary}

## Jira Story Reference
- **Story ID**: ${storyData.storyId}
- **Jira URL**: ${storyData.jiraUrl}
- **Status**: ${storyData.status}
- **Type**: ${storyData.issueType}

## Story Description
${storyData.description}

## Acceptance Criteria
${storyData.acceptanceCriteria.map((criterion, i) => `${i + 1}. ${criterion}`).join('\n')}

## Test Scenarios

`;

  // Generate test scenarios from acceptance criteria
  storyData.acceptanceCriteria.forEach((criterion, index) => {
    testPlan += `### Test Scenario ${index + 1}: ${criterion}
**Given** the system is in a valid state
**When** ${criterion.toLowerCase()}
**Then** the expected behavior should be observed

`;
  });

  testPlan += `
## Test Execution
- **Browser Coverage**: Chromium, Firefox, WebKit
- **Test Framework**: Playwright
- **Execution**: npm test

## Notes
This test plan is generated as part of the Jira MCP workflow automation.
Results will be posted back to Jira story ${storyData.storyId} upon test completion.
`;

  fs.writeFileSync(testPlanPath, testPlan);
  console.log(`✓ Test plan updated: ${testPlanPath}`);
}
