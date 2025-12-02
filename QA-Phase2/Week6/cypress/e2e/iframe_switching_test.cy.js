/// <reference types="cypress" />

const getIframeBody = () =>
  cy
    .get('#courses-iframe')
    .its('0.contentDocument.body')
    .should('not.be.empty')
    .then(cy.wrap);

describe('Switching between main page and iframe contexts', () => {
  const url = 'https://rahulshettyacademy.com/AutomationPractice/';

  it('interacts across main page and iframe', () => {
    cy.visit(url);

    cy.get('#name').type('Main page input');
    cy.get('#name').should('have.value', 'Main page input');

    getIframeBody().contains('a', 'Login').click();
    getIframeBody().contains(/login/i).should('be.visible');

    cy.on('window:alert', (text) => {
      expect(text).to.include('share');
    });
    cy.get('#alertbtn').click();
  });
});
