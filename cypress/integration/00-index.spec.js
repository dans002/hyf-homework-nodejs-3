describe('Root endpoint', () => {
  // Test2
  it('Should answer with "Hello World!"', () => {

    cy.request('/').its('body').should('eq', "Hello World!");

  });

});
