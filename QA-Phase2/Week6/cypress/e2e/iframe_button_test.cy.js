/// <reference types="cypress" />

const getIframeBody = () =>
  cy
    .get('#courses-iframe')
    .its('0.contentDocument.body')
    .should('not.be.empty')
    .then(cy.wrap);

describe('Interacting with a button inside an iframe', () => {
  const url = 'https://rahulshettyacademy.com/AutomationPractice/';

  it('clicks a button in the iframe and validates success text', () => {
    cy.visit(url);

    getIframeBody()
      .contains('a', 'Login')
      .should('be.visible')
      .click();

    getIframeBody().contains(/login/i).should('be.visible');
  });
});
