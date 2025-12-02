// Validates enabling and selecting a disabled checkbox
describe('Disabled Checkbox Example', () => {
  it('enables a disabled checkbox and checks it', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    cy.get('input[type="checkbox"][disabled]').first().as('disabledCheckbox');

    cy.get('@disabledCheckbox').should('be.disabled');

    cy.contains('button', 'Enable').click();

    cy.get('@disabledCheckbox').should('be.enabled').check().should('be.checked');
  });
});
