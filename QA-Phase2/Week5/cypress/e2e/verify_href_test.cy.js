// Verifies the Shop navigation link destination
describe('Shop Link Navigation', () => {
  it('has the expected href to the Shop page', () => {
    cy.visit('https://rahulshettyacademy.com/angularpractice/');
    cy.contains('a', 'Shop').should('have.attr', 'href', '/shop');
  });
});
