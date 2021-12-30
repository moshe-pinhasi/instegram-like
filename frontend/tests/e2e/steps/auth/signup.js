import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"

Given("I visit {string}", (route) => {
  cy.visit(`/#${route}`);
});

When("I enter the singup credentials", (dataTable) => {
  dataTable.hashes().forEach(elem =>{
    for(var propName in elem) {
      const propValue = elem[propName]
      cy.get(`[name="${propName}"]`).should('exist')
      cy.get(`[name="${propName}"]`).type(propValue)
    }
  });
});

When("I press the {string} button", (button) => {
  cy.get(`[data-testid=btn-${button}]`).click()
});

Then("I should move to feed page as a loggedin", () => {
  cy.location().should((loc) => {
    expect(loc.hash).to.eq('#/')
  })
});