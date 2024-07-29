# Google Calculator Automated Testing Project

This project demonstrates automated testing of the Google Calculator using Puppeteer and Jest with TypeScript.

## Project Structure

project-root/
│
├── src/
│   ├── pages/
│   │   ├── BasePage.ts
│   │   └── GoogleCalculatorPage.ts
│   │
│   ├── locators/
│   │   └── GoogleCalculatorLocators.ts
│   │
│   ├── types/
│   │   └── index.ts
│   │
│   └── constants/
│       └── index.ts
│
├── tests/
│   └── google-calculator.test.ts
│
├── config/
│   └── test-config.ts
│
├── tsconfig.json
├── jest.config.js
├── package.json
└── README.md

## Prerequisites

- Node.js (v14 or later recommended)
- npm (comes with Node.js)

## Setup

1. Clone the repository:

git clone https://github.com/AsherMentzer/google-calculator-test.git
cd google-calculator-test

2. Install dependencies:

npm install

## Building the Project

To compile the TypeScript files to JavaScript, run:

npm run build

This will create a `dist` directory with the compiled JavaScript files.

## Running the Tests

To run all tests:

npm test

## Test Cases

The main test file `google-calculator.test.ts` includes the following test cases:

1. Addition: Verifies that 5 + 10 equals 15
2. Number of Buttons: Checks that there are 10 number buttons (0-9)
3. Total Button Count: Ensures there are 34 total buttons on the calculator

## Project Components

- `BasePage.ts`: A base class for page objects with common methods.
- `GoogleCalculatorPage.ts`: Represents the Google Calculator page and contains methods for interacting with the calculator.
- `GoogleCalculatorLocators.ts`: Contains selectors for elements on the Google Calculator page.
- `test-config.ts`: Configuration file for test settings.

## Customizing Tests

To add new tests, you can extend the `google-calculator.test.ts` file or create new test files in the `tests` directory.

