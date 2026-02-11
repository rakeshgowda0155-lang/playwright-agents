# Jira Integration Workflow

This document describes how to integrate Jira stories with Playwright test automation using the MCP workflow.

## Overview

The Jira integration workflow automates the process of:
1. Fetching user stories and acceptance criteria from Jira
2. Creating test plans based on the story requirements
3. Generating automated tests using Playwright agents
4. Executing tests
5. Posting results back to Jira

## Prerequisites

### Required Tools
- Node.js (v18 or higher)
- Playwright Test framework (`@playwright/test`)
- Access to Jira instance

### Environment Variables
Set the following environment variables for Jira API access:
```bash
export JIRA_HOST="https://your-domain.atlassian.net"
export JIRA_EMAIL="your-email@example.com"
export JIRA_API_TOKEN="your-api-token"
```

#### Getting a Jira API Token
1. Log in to https://id.atlassian.com/manage-profile/security/api-tokens
2. Click "Create API token"
3. Give it a name (e.g., "Playwright Test Automation")
4. Copy the token and store it securely

## Workflow Steps

### 1. Fetch Jira Story

Use the `fetch-jira-story.js` script to retrieve story details:

```bash
node scripts/fetch-jira-story.js ST-17
```

This will:
- Fetch the story from Jira (or use mock data if credentials are not set)
- Extract acceptance criteria and description
- Create/update `specs/ST-17-feature.md` with test scenarios
- Save story data to `specs/ST-17-data.json`

### 2. Generate Test Plan

The test plan is automatically created in the `specs/` directory in markdown format. You can also use the Playwright test planner agent:

```
@playwright-test-planner analyze specs/ST-17-feature.md
```

### 3. Generate Test Code

Use the Playwright test generator agent to create test files:

```
@playwright-test-generator create tests from specs/ST-17-feature.md
```

This will create test files in the `tests/` directory based on the test scenarios.

### 4. Execute Tests

Run the Playwright tests:

```bash
npm test
# or for specific browser
npm run test:chromium
```

### 5. Post Results to Jira

After test execution, post results back to the Jira story:

```bash
node scripts/post-results-to-jira.js ST-17 test-results.json
```

This will add a comment to the Jira story with:
- Test execution summary
- Pass/fail status for each test
- Browser coverage information
- Detailed error messages for failed tests

## Directory Structure

```
playwright-agents/
├── specs/                      # Test plans and specifications
│   ├── ST-17-feature.md       # Test plan for ST-17
│   └── ST-17-data.json        # Story data from Jira
├── tests/                     # Generated Playwright tests
│   └── ST-17/                 # Tests for ST-17
├── scripts/                   # Automation scripts
│   ├── fetch-jira-story.js   # Fetch story from Jira
│   └── post-results-to-jira.js # Post results to Jira
└── docs/                      # Documentation
    └── jira-integration.md    # This file
```

## Using with GitHub Actions

You can automate this workflow in GitHub Actions:

```yaml
name: Jira Test Automation

on:
  workflow_dispatch:
    inputs:
      story_id:
        description: 'Jira Story ID (e.g., ST-17)'
        required: true

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - uses: actions/setup-node@v4
        with:
          node-version: 'lts/*'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Fetch Jira Story
        env:
          JIRA_HOST: ${{ secrets.JIRA_HOST }}
          JIRA_EMAIL: ${{ secrets.JIRA_EMAIL }}
          JIRA_API_TOKEN: ${{ secrets.JIRA_API_TOKEN }}
        run: node scripts/fetch-jira-story.js ${{ github.event.inputs.story_id }}
      
      - name: Install Playwright browsers
        run: npx playwright install --with-deps
      
      - name: Run tests
        run: npm test
      
      - name: Post results to Jira
        if: always()
        env:
          JIRA_HOST: ${{ secrets.JIRA_HOST }}
          JIRA_EMAIL: ${{ secrets.JIRA_EMAIL }}
          JIRA_API_TOKEN: ${{ secrets.JIRA_API_TOKEN }}
        run: node scripts/post-results-to-jira.js ${{ github.event.inputs.story_id }}
```

## Agents

### @playwright-test-planner
The test planner agent analyzes requirements and creates comprehensive test plans.

**Usage:**
```
@playwright-test-planner create test plan for login functionality
```

### @playwright-test-generator
The test generator agent creates Playwright test code from test plans.

**Usage:**
```
@playwright-test-generator generate tests from specs/ST-17-feature.md
```

### @playwright-test-healer
The test healer agent fixes failing tests automatically.

**Usage:**
```
@playwright-test-healer fix failing test in tests/ST-17/login.spec.ts
```

## Troubleshooting

### Mock Data Mode
If Jira credentials are not configured, the scripts will use mock data for demonstration purposes. This is useful for:
- Development and testing
- CI/CD environments without Jira access
- Demos and tutorials

### Common Issues

**Issue:** "Error fetching story: HTTP 401"
**Solution:** Check that your JIRA_EMAIL and JIRA_API_TOKEN are correct and the token hasn't expired.

**Issue:** "Error fetching story: HTTP 404"
**Solution:** Verify the story ID exists and you have permission to access it.

**Issue:** Tests not found
**Solution:** Ensure test files are generated in the `tests/` directory and have the `.spec.ts` extension.

## Best Practices

1. **Keep test plans up to date**: When acceptance criteria change in Jira, re-fetch the story to update the test plan.

2. **Review generated tests**: Always review auto-generated tests before committing them to ensure they match requirements.

3. **Use descriptive story IDs**: Follow a consistent naming convention for story IDs (e.g., ST-xxx, FEAT-xxx).

4. **Organize tests by story**: Keep tests for each story in separate directories or files for better organization.

5. **Post results regularly**: Set up automated posting of test results so the team has visibility into test status.

## Example Workflow

Complete example for story ST-17:

```bash
# 1. Fetch the story
node scripts/fetch-jira-story.js ST-17

# 2. Review the generated test plan
cat specs/ST-17-feature.md

# 3. Generate tests (using agent or manually)
# In this case, we'll use the agent approach

# 4. Run the tests
npm test

# 5. Post results
node scripts/post-results-to-jira.js ST-17
```

## See Also

- [Playwright Documentation](https://playwright.dev)
- [Jira REST API Documentation](https://developer.atlassian.com/cloud/jira/platform/rest/v3/)
- [Playwright Agents](../.github/agents/)
