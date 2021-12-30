import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"

Given("I visit the Feed page", (route) => {
  cy.visit(`/#/`);
});

Then("The action {string} should not be visible", (action) => {
  cy.get(`[data-testid=${action}]`).should('not.be.visible')
});

Then("The action {string} should be visible", (action) => {
  cy.get(`[data-testid=${action}]`).should('be.visible')
});
