# Test Strategy Document

## Project: SDET Assignment 2 Automation Framework
## Author: Sandeep

---

## 1. Objective

Design and implement a scalable test automation framework that covers:
- UI functional testing
- REST API validation
- Integration testing across layers
- CI/CD pipeline automation

---

## 2. Scope

### In Scope
- Login and authentication flows (UI)
- CRUD operations on REST API
- Cross-layer integration validation
- Automated reporting
- GitHub Actions pipeline

### Out of Scope
- Performance testing
- Mobile testing
- Security testing
- Database testing

---

## 3. Test Approach

### UI Testing
- Tool: Playwright with TypeScript
- Pattern: Page Object Model
- Application: Sauce Demo
- Browser: Chromium

### API Testing
- Tool: Playwright APIRequestContext
- API: JSONPlaceholder REST API
- Methods covered: GET, POST, PUT, DELETE
- Validations: status codes, response body, response time

### Integration Testing
- Combines API and UI in single test flow
- Validates system integrity across layers

---

## 4. Framework Architecture

### Why Page Object Model?
- Separates test logic from UI selectors
- Reduces duplication
- Easy to maintain when UI changes

### Why Centralized Config?
- Single place to change URLs
- Easy environment switching

### Why External Test Data?
- Tests don't hardcode data
- Easy to update without touching test logic

---

## 5. Test Environment

| Component | Value |
|---|---|
| Browser | Chromium |
| UI App | https://www.saucedemo.com |
| API | https://jsonplaceholder.typicode.com |
| OS | Windows |
| Node | v18+ |

---

## 6. Entry & Exit Criteria

### Entry Criteria
- Code is committed to main branch
- Dependencies installed
- Browsers installed

### Exit Criteria
- All test cases executed
- HTML report generated
- No P1/P2 failures in critical flows

---

## 7. Defect Classification

| Severity | Example |
|---|---|
| P1 - Critical | Login broken |
| P2 - High | API returns wrong data |
| P3 - Medium | UI misalignment |
| P4 - Low | Typo in error message |

---

## 8. Risks & Mitigations

| Risk | Mitigation |
|---|---|
| Third-party API downtime | Use stable public APIs |
| Flaky UI tests | Added retries in CI, screenshots on failure |
| Slow page loads | Configured timeout in playwright.config.ts |