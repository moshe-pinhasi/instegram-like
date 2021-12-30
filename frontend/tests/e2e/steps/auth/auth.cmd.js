import { Before } from "cypress-cucumber-preprocessor/steps"

Cypress.Commands.add('signup', (email, fullname, username, password) => {
  cy.visit('/#/auth/signup')
  cy.get(`[name="Email"]`).type(email)
  cy.get(`[name="Full Name"]`).type(fullname)
  cy.get('[name="Username"]').type(username)
  cy.get('[name="Password"]').type(password)
  cy.get('[data-testid=btn-submit]').click()
})

Before({tags: "@signup"}, () => {
  cy.signup('tester@mail.com', 'Mr. Tester', 'tester-choice', '12345')
  cy.visit(`/#/auth/logout`);
  cy.wait(500)
})

Before({tags: "@login"}, () => {
  cy.signup('tester@mail.com', 'Mr. Tester', 'tester-choice', '12345')
})