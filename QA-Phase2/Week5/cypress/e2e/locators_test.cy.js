// Demonstrates locating elements with different selector strategies
describe('Locator Strategies on Angular Practice Form', () => {
  beforeEach(() => {
    cy.visit('https://rahulshettyacademy.com/angularpractice/');
  });

  it('uses an id selector to type into the email field', () => {
    cy.get('#exampleInputEmail1').clear().type('cypress@example.com');
    cy.get('#exampleInputEmail1').should('have.value', 'cypress@example.com');
  });

  it('uses a class selector to interact with the name input', () => {
    // The name input has the shared form-control class
    cy.get('.form-control[name="name"]').clear().type('Cypress Tester');
    cy.get('.form-control[name="name"]').should('have.value', 'Cypress Tester');
  });

  it('uses an attribute selector to fill the password field', () => {
    cy.get('input[placeholder="Password"]').clear().type('Secret123!');
    cy.get('input[placeholder="Password"]').should('have.value', 'Secret123!');
  });
});
