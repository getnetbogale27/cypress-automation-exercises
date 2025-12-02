/// <reference types="cypress" />

describe('Dynamic table pagination and search', () => {
  const url = 'https://rahulshettyacademy.com/seleniumPractise/#/offers';

  const verifyRiceRow = () => {
    cy.contains('td', 'Rice')
      .parent('tr')
      .within(() => {
        cy.get('td').eq(0).should('have.text', 'Rice');
        cy.get('td').eq(1).should('contain', '37');
      });
  };

  it('finds Rice through search and validates its row', () => {
    cy.visit(url);

    cy.get('input[type="search"]').clear().type('Rice');

    cy.get('tbody tr').should('have.length.at.least', 1);
    verifyRiceRow();
  });
});
