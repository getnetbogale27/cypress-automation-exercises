// Exercises invalid and valid login flows
describe('Practice Test Automation Login', () => {
  const baseUrl = 'https://practicetestautomation.com/practice-test-login/';

  it('shows an error for invalid credentials', () => {
    cy.visit(baseUrl);
    cy.get('#username').clear().type('baduser');
    cy.get('#password').clear().type('badpassword');
    cy.get('#submit').click();

    cy.get('#error').should('be.visible').and('have.text', 'Invalid username or password');
  });

  it('logs in successfully with valid credentials', () => {
    cy.visit(baseUrl);
    cy.get('#username').clear().type('student');
    cy.get('#password').clear().type('Password123');
    cy.get('#submit').click();

    cy.url().should('include', 'logged-in-successfully');
    cy.contains('h1', 'Logged In Successfully').should('be.visible');
    cy.contains('Welcome').should('be.visible');
  });
});
