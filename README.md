# Playwright Agents - Jira Test Automation

This repository demonstrates automated test creation and execution workflow integrating Jira stories with Playwright testing framework.

## Features

- 🎯 **Jira Integration**: Fetch user stories and acceptance criteria directly from Jira
- 📝 **Automatic Test Planning**: Convert Jira stories into structured test plans
- 🤖 **AI-Powered Test Generation**: Use Playwright agents to generate test code
- ✅ **Automated Testing**: Execute tests across multiple browsers (Chromium, Firefox, WebKit)
- 📊 **Result Reporting**: Post test results back to Jira as comments

## Quick Start

### Prerequisites

```bash
# Install dependencies
npm install

# Set up Jira credentials (optional - uses mock data if not set)
export JIRA_HOST="https://your-domain.atlassian.net"
export JIRA_EMAIL="your-email@example.com"
export JIRA_API_TOKEN="your-api-token"
```

### Workflow Example

```bash
# 1. Fetch Jira story and create test plan
node scripts/fetch-jira-story.js ST-17

# 2. Review the generated test plan
cat specs/ST-17-feature.md

# 3. Generate tests using Playwright agents
# (Use @playwright-test-planner and @playwright-test-generator)

# 4. Run tests
npm test

# 5. Post results back to Jira
node scripts/post-results-to-jira.js ST-17
```

## Project Structure

```
playwright-agents/
├── specs/                      # Test plans and specifications
│   ├── README.md
│   ├── ST-17-feature.md       # Test plan for ST-17
│   └── ST-17-data.json        # Story data from Jira
├── tests/                     # Playwright test files
│   └── seed.spec.ts           # Seed test template
├── scripts/                   # Automation scripts
│   ├── fetch-jira-story.js   # Fetch story from Jira
│   └── post-results-to-jira.js # Post results to Jira
├── docs/                      # Documentation
│   └── jira-integration.md    # Detailed integration guide
├── .github/
│   ├── agents/                # Custom Playwright agents
│   └── workflows/             # GitHub Actions workflows
├── package.json
└── playwright.config.js       # Playwright configuration
```

## Available Scripts

```bash
# Run all tests
npm test

# Run tests for specific browser
npm run test:chromium
npm run test:firefox
npm run test:webkit

# View test report
npm run report
```

## Playwright Agents

This project uses custom Playwright agents for test automation:

- **@playwright-test-planner**: Creates comprehensive test plans from requirements
- **@playwright-test-generator**: Generates Playwright test code from test plans
- **@playwright-test-healer**: Automatically fixes failing tests

See [docs/jira-integration.md](docs/jira-integration.md) for detailed usage.

## Jira Integration

The workflow integrates with Jira to automate the entire testing lifecycle:

1. **Fetch**: Retrieve story details and acceptance criteria
2. **Plan**: Generate test scenarios from acceptance criteria
3. **Generate**: Create automated test code
4. **Execute**: Run tests across multiple browsers
5. **Report**: Post results back to Jira

### Mock Data Mode

If Jira credentials are not configured, the scripts automatically use mock data for demonstration purposes. This allows you to:
- Test the workflow without Jira access
- Run in CI/CD environments
- Demonstrate the automation capabilities

## Example: Story ST-17

Story ST-17 demonstrates the complete workflow:

- **Story**: User Login and Authentication
- **Test Plan**: [specs/ST-17-feature.md](specs/ST-17-feature.md)
- **Jira URL**: https://rakegowda015-1759229291995.atlassian.net/browse/ST-17

The test plan includes scenarios for:
1. Login page elements verification
2. Valid credentials authentication
3. Invalid credentials error handling
4. Password field masking
5. Remember me functionality

## GitHub Actions

The repository includes GitHub Actions workflows for:
- Running Playwright tests on push/PR
- Automated test execution
- Test result artifact uploads

See [.github/workflows/playwright.yml](.github/workflows/playwright.yml) for configuration.

## Documentation

- [Jira Integration Guide](docs/jira-integration.md) - Complete workflow documentation
- [Playwright Documentation](https://playwright.dev) - Official Playwright docs

## Configuration

### Playwright Configuration

The `playwright.config.js` file configures:
- Test directory: `./tests`
- Browser projects: Chromium, Firefox, WebKit
- Parallel execution
- Trace collection on failures

### Jira Configuration

Set environment variables for Jira API access:
```bash
JIRA_HOST=https://your-domain.atlassian.net
JIRA_EMAIL=your-email@example.com
JIRA_API_TOKEN=your-api-token
```

See [Jira API Token Guide](https://id.atlassian.com/manage-profile/security/api-tokens)

## Contributing

1. Create a new branch for your changes
2. Follow the existing code style
3. Add tests for new features
4. Update documentation as needed
5. Submit a pull request

## License

ISC

## Support

For questions or issues:
- Create an issue in this repository
- Refer to the [Jira Integration Guide](docs/jira-integration.md)
- Check [Playwright Documentation](https://playwright.dev)
