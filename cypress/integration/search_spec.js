/// <reference types="Cypress" />

context('Search', () => {
  beforeEach(() => {
    cy.visit('http://dennisvdberg.nl');
  });

  it('.click() - click on a DOM element', () => {
    // https://on.cypress.io/click
    cy.get('.nav-item.nav-link.projects').click();
  });

  it('.type() - type into a DOM element', () => {
    // https://on.cypress.io/type
    cy.get('.form-control')
      .type('Angular').should('have.value', 'Angular')
      .clear()
      .should('have.value', '')
  })
});
