/// <reference types="cypress" />

describe('JavaScript alert handling', () => {
  const url = 'https://vinothqaacademy.com/alert-and-popup/';

  beforeEach(() => {
    cy.visit(url);
  });

  it('handles simple alert', () => {
    cy.on('window:alert', (text) => {
      expect(text).to.include('alert');
    });

    cy.contains('button', 'Alert').click();
  });

  it('handles confirm alert acceptance and dismissal', () => {
    cy.contains('button', 'Confirm').click();
    cy.on('window:confirm', (text) => {
      expect(text).to.include('confirm');
      return true;
    });

    cy.contains('button', 'Confirm').click();
    cy.on('window:confirm', (text) => {
      expect(text).to.include('confirm');
      return false;
    });
  });

  it('handles prompt alert with stubbed value', () => {
    const promptText = 'Cypress Agent';

    cy.window().then((win) => {
      cy.stub(win, 'prompt').returns(promptText);
    });

    cy.contains('button', 'Prompt').click();

    cy.contains(promptText).should('be.visible');
  });
});
