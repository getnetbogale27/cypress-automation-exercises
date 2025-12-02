// Selects multiple checkboxes and confirms their state
describe('Multiple Checkbox Selection', () => {
  it('checks multiple checkbox options', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    const values = ['option2', 'option3'];

    values.forEach((value) => {
      cy.get(`input[type="checkbox"][value="${value}"]`).check().should('be.checked');
    });
  });
});
