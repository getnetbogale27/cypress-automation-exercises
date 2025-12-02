/// <reference types="cypress" />

describe('Login using fixture data', () => {
  const url = 'https://rahulshettyacademy.com/loginpagePractise/';

  it('logs in with valid credentials from fixture', () => {
    cy.visit(url);

    cy.fixture('user').then((user) => {
      cy.get('#username').type(user.username);
      cy.get('#password').type(user.password);
    });

    cy.get('#signInBtn').click();

    cy.url().should('include', 'angularpractice');
    cy.contains('Shop Name').should('be.visible');
  });
});
