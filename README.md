# QA Automation Project - apptesting.pl

Playwright + TypeScript test automation project for [Test Automation Playground](https://apptesting.pl/).

## Project Structure

```
├── playwright.config.ts       # Playwright configuration
├── tsconfig.json              # TypeScript configuration
├── pages/                     # Page Object Model classes
│   ├── base.page.ts           # Base page with shared navigation
│   ├── home.page.ts           # Home page
│   ├── forms.page.ts          # Forms page
│   ├── interactions.page.ts   # Interactions page
│   ├── widgets.page.ts        # Widgets page
│   ├── tables.page.ts         # Tables page
│   ├── alerts.page.ts         # Alerts page
│   └── dynamic.page.ts        # Dynamic content page
├── tests/                     # Test specs
│   ├── home.spec.ts           # Home page tests
│   ├── forms.spec.ts          # Forms tests
│   ├── interactions.spec.ts   # Interactions tests
│   ├── widgets.spec.ts        # Widgets tests
│   ├── tables.spec.ts         # Tables tests
│   ├── alerts.spec.ts         # Alerts tests
│   ├── dynamic.spec.ts        # Dynamic content tests
│   └── navigation.spec.ts     # Navigation tests
```

## Setup

```bash
npm install
npx playwright install --with-deps
```

## Running Tests

```bash
# Run all tests
npm test

# Run tests for specific browser
npm run test:chromium
npm run test:firefox
npm run test:webkit

# Run tests in headed mode (visible browser)
npm run test:headed

# Run tests in UI mode (interactive)
npm run test:ui

# View HTML report
npm run report
```

## Type Checking

```bash
npm run typecheck
```

## Test Coverage

| Page          | Tests                                                       |
|---------------|-------------------------------------------------------------|
| Home          | Heading, cards, navigation links, card click navigation     |
| Forms         | Text inputs, checkboxes, radios, dropdowns, form submission |
| Interactions  | Click events, keyboard, hover, drag and drop                |
| Widgets       | Accordion, tabs, modal, tooltip, progress bar               |
| Tables        | Static, sortable, searchable, paginated tables              |
| Alerts        | JS alerts, confirm, prompt, toast notifications             |
| Dynamic       | Loading spinner, delayed elements, AJAX content             |
| Navigation    | Navbar links, page titles                                   |

## Configuration

Tests run on three browsers by default:
- Chromium
- Firefox
- WebKit (Safari)

Settings in `playwright.config.ts`:
- **Base URL**: `https://apptesting.pl`
- **Retries**: 2 in CI, 0 locally
- **Screenshots**: On failure
- **Video**: Retained on failure
- **Trace**: On first retry
