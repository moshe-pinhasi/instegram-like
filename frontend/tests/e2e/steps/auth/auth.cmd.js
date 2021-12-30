import { Before } from "cypress-cucumber-preprocessor/steps"

export const user = {
  email: 'tester@mail.com', 
  fullname: 'Mr. Tester', 
  username: 'tester-choice', 
  password: '12345'
}

Cypress.Commands.add('signup', (email, fullname, username, password) => {
  cy.visit('/#/auth/signup')
  cy.get(`[name="Email"]`).type(email)
  cy.get(`[name="Full Name"]`).type(fullname)
  cy.get('[name="Username"]').type(username)
  cy.get('[name="Password"]').type(password)
  cy.get('[data-testid=btn-submit]').click()
})

Before({tags: "@signup"}, () => {
  cy.signup(user.email, user.fullname, user.username, user.password)
  cy.visit(`/#/auth/logout`);
  cy.wait(500)
})

Before({tags: "@login"}, () => {
  cy.signup(user.email, user.fullname, user.username, user.password)
})