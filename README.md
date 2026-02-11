# Playwright Agents

A project demonstrating the use of Playwright with GitHub Copilot Agents for automated browser testing.

## Features

- 🎭 Playwright browser automation
- 🤖 GitHub Copilot Agent integration
- 🧪 Automated test generation and execution
- 🔌 Jira integration for test automation workflow

## 🔌 Jira Integration

This project integrates with Jira to automate test generation from user stories.

### Quick Start
1. Set `JIRA_API_TOKEN` environment variable
2. Use `@jira-test-orchestrator` agent to read stories
3. Generate and execute tests
4. Automatically update Jira with results

See [docs/jira-integration.md](docs/jira-integration.md) for detailed instructions.

## Getting Started

### Prerequisites
- Node.js (LTS version)
- npm or yarn

### Installation

```bash
npm install
```

### Install Playwright Browsers

```bash
npx playwright install --with-deps
```

## Running Tests

```bash
# Run all tests
npm test

# Run tests for a specific browser
npm run test:chromium
npm run test:firefox
npm run test:webkit

# View test report
npm run report
```

## Project Structure

```
.
├── .github/
│   ├── agents/              # GitHub Copilot agent configurations
│   │   ├── jira-test-orchestrator.agent.md
│   │   ├── playwright-test-generator.agent.md
│   │   ├── playwright-test-healer.agent.md
│   │   └── playwright-test-planner.agent.md
│   └── workflows/           # GitHub Actions workflows
│       ├── jira-test-automation.yml
│       └── playwright.yml
├── .vscode/
│   └── mcp.json             # MCP server configuration
├── docs/
│   └── jira-integration.md  # Jira integration guide
├── specs/                   # Test specifications and plans
├── tests/                   # Playwright test files
├── playwright.config.js     # Playwright configuration
└── package.json
```

## Agents

### @jira-test-orchestrator
Orchestrates test automation workflow from Jira user stories - reads stories, triggers Playwright agents, and updates Jira with results.

### @playwright-test-planner
Creates comprehensive test plans for web applications.

### @playwright-test-generator
Generates automated browser tests using Playwright.

### @playwright-test-healer
Debugs and fixes failing Playwright tests.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

ISC
