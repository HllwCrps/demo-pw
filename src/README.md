DEMO PW

Description
This project contains Playwright tests for placing an order by filling username and Email fields and clicking on order button
and Playwright test for signing-in.

Setup
Install dependencies:
npm install

Create a .env file in the root directory with the following content:
APP_URL=https://fe-delivery.tallinn-learning.ee/

Running Tests
Run all tests:
npx playwright test

Run tests with a specific file:
npx playwright test tests/lesson16-1.spec.ts
npx playwright test tests/lesson16.spec.ts