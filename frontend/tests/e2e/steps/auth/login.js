import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"

Given("I visit {string}", (route) => {
  cy.visit(`/#${route}`);
});

When("I enter {string} in the {string} field", (value, field) => {
  cy.get(`[name="${field}"]`).should('exist')
  cy.get(`[name="${field}"]`).type(value)
});

When("I press the {string} button", (button) => {
  cy.get(`[data-testid=btn-${button}]`).click()
});

Then("I should move to feed page as a loggedin", () => {
  cy.location().should((loc) => {
    expect(loc.hash).to.eq('#/')
  })
});

Then("The field {string} should have an error", (field) => {
  cy.get(`[name="${field}"]`).should('have.class', 'input-has-error')
});

Then("I should stay at the login page", () => {
  cy.location().should((loc) => {
    expect(loc.hash).to.eq('#/auth/login')
  })
});

Then("I have a general error message {string}", (msg) => {
  cy.get(`[data-testid=login-general-error]`).contains(msg)
});






    