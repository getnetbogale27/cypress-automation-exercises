// Selects an option from the dropdown and verifies it
describe('Dropdown Selection Example', () => {
  it('selects an option by visible text', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    cy.get('#dropdown-class-example').select('Option2');
    cy.get('#dropdown-class-example').should('have.value', 'option2');
  });
});
