// Validates modal visibility behavior
describe('DemoQA Modal Visibility', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/modal-dialogs');
  });

  it('shows the modal only after clicking the trigger', () => {
    cy.get('.modal-dialog').should('not.exist');

    cy.get('#showSmallModal').click();

    cy.get('.modal-dialog').should('be.visible');
    cy.get('#closeSmallModal').click();
    cy.get('.modal-dialog').should('not.exist');
  });
});
