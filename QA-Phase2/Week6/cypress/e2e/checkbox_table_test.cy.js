/// <reference types="cypress" />

describe('Checkbox interactions inside table rows', () => {
  const url = 'https://vinothqaacademy.com/webtable/';

  it('selects and deselects table checkboxes', () => {
    cy.visit(url);

    cy.get('table').within(() => {
      cy.get('tbody tr').as('rows');
    });

    cy.get('@rows').eq(0).find('input[type="checkbox"]').as('firstCheckbox');
    cy.get('@rows').eq(1).find('input[type="checkbox"]').as('secondCheckbox');

    cy.get('@firstCheckbox').check().should('be.checked');
    cy.get('@secondCheckbox').check().should('be.checked');

    cy.get('@firstCheckbox').parents('tr').should('be.visible');
    cy.get('@secondCheckbox').parents('tr').should('be.visible');

    cy.get('@secondCheckbox').uncheck().should('not.be.checked');
    cy.get('@firstCheckbox').should('be.checked');
  });
});
