# automation-framework

## Getting Started

Clone this project in local directory using command

> `git clone https://github.com/VeselinDam/automation-framework.git`

Main branch: [main](https://github.com/VeselinDam/automation-framework)

### Prerequisites

- Visual Studio Code (latest version recommended)
- Node.js (v18) with NPM (included)
  - [Download Node.js](https://nodejs.org)

### How to run tests:

- (UI Mode)
  * In termina type `npx cypress open`, when Cypress open select "E2E testing" tab.
  * Choose browser.
  * In the Spec folder, select the test file you want to run.

- (Headless Mode)
  - Run all tests:
    * In termina type `npx cypress run`.
  - Run a specific test file:
    * In termina type `npx cypress run --spec "cypress/e2e/test/<file-name>.cy.js"`

### How to run tests report:

- First run Headless mode. Run all tests or for specific one.
   * Than in termina type `open cypress/reports/<file-name>.html`.

### Author:

- Veselin Damnjanovic

