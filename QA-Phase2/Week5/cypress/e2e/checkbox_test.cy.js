// Toggles a single checkbox and validates state
describe('Single Checkbox Interaction', () => {
  it('checks and unchecks the first option', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    cy.get('input[type="checkbox"][value="option1"]').as('optionOne');

    cy.get('@optionOne').check().should('be.checked');
    cy.get('@optionOne').uncheck().should('not.be.checked');
  });
});
