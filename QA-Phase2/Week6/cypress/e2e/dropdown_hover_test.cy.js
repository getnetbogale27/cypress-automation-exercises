/// <reference types="cypress" />

describe('Hover based dropdowns', () => {
  const url = 'https://rahulshettyacademy.com/AutomationPractice/';

  it('reveals submenu on hover and validates text', () => {
    cy.visit(url);

    cy.get('#mousehover').trigger('mouseover');

    cy.get('.mouse-hover-content').should('be.visible').within(() => {
      cy.contains('Top').should('be.visible');
      cy.contains('Reload').should('be.visible');
    });
  });
});
