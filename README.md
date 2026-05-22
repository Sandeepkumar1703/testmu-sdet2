# SDET — Test Automation Framework

## Framework: Playwright + TypeScript

---

# Project Overview

A professional end-to-end test automation framework built using Playwright and TypeScript.

This framework demonstrates:
- UI Automation
- API Automation
- Integration Testing
- CI/CD Integration
- Reporting & Failure Analysis
- Scalable Framework Architecture

The framework is designed using industry-standard practices focused on:
- Maintainability
- Reusability
- Scalability
- Reliability

---

# Key Features

- UI automation using Playwright
- API automation using Playwright Request Context
- Integration testing combining UI + API
- Cross-browser execution support
- Data-driven testing approach
- Page Object Model (POM) architecture
- Reusable utilities and helpers
- Centralized configuration management
- HTML reporting with screenshots on failure
- GitHub Actions CI/CD integration
- Parallel execution support

---

# Tech Stack

| Tool | Purpose |
|---|---|
| Playwright | UI & API Automation |
| TypeScript | Type-safe automation code |
| JSONPlaceholder API | REST API testing |
| Sauce Demo | UI automation practice application |
| GitHub Actions | CI/CD pipeline |
| Playwright HTML Reporter | Reporting |
| Node.js | Runtime environment |

---

# Why Playwright?

Playwright was selected because it provides:

- Built-in API testing support
- Fast and reliable browser automation
- Automatic waiting mechanisms
- Easy cross-browser execution
- Parallel test execution
- Modern TypeScript ecosystem
- Powerful debugging and reporting features

This makes it highly suitable for scalable enterprise automation frameworks.

---

# Supported Browsers

The framework supports execution on:

- Chromium
- Firefox
- WebKit

---

# Project Structure

```text
testmu-sdet2/
│
├── pages/
│   ├── LoginPage.ts
│   └── DashboardPage.ts
│
├── tests/
│   ├── ui/
│   │   └── login.spec.ts
│   │
│   ├── api/
│   │   └── users.spec.ts
│   │
│   └── integration/
│       └── userFlow.spec.ts
│
├── utils/
│   ├── apiHelper.ts
│   ├── customAssertions.ts
│   └── logger.ts
│
├── test-data/
│   └── users.json
│
├── config/
│   └── env.ts
│
├── reports/
│
├── .github/workflows/
│   └── playwright.yml
│
├── playwright.config.ts
├── package.json
├── README.md
└── test-strategy.md