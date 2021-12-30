import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"

import {user} from '../auth/auth.cmd'

Given("I visit my User Details page", () => {
  cy.visit(`/#/${user.username}`);
});

Given("I visit the feed page", () => {
  cy.visit(`/#/`);
});

When("I click the title of the first post", () => {
  cy.get('.post-card-user-details').first().click()
  cy.wait(300)
})

Then("I should have the fields display below in the User Details page", (dataTable) => {
  dataTable.rows().forEach(elem =>{
    cy.get(`[data-testid="user-details-${elem}"]`).should('exist')
  });
});

Then("I click on the Follow button", () => {
  cy.get(`[data-testid="user-details-follow-btn"]`).contains('Follow').click()
})

Then("I should have see Unfollow button", () => {
  cy.get(`[data-testid="user-details-follow-btn"]`).contains('Unfollow')
})

Then("I should not have see Follow button", () => {
  cy.get(`[data-testid="user-details-follow-btn"]`).should('not.exist')
})


