/// <reference types="cypress" />

describe('Login journey for multiple users', () => {
  const url = 'https://rahulshettyacademy.com/loginpagePractise/';

  const loginAndAssert = (user) => {
    cy.visit(url);

    cy.get('#username').clear().type(user.username);
    cy.get('#password').clear().type(user.password);
    cy.get('#signInBtn').click();

    cy.url().should('include', 'angularpractice');
    cy.contains('Shop').should('be.visible');

    cy.go('back');
  };

  it('logs in with every user from the fixture list', () => {
    cy.fixture('users').then((users) => {
      users.forEach((user) => {
        loginAndAssert(user);
      });
    });
  });
});
