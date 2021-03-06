/// <reference types="Cypress" />

context('Menu', () => {
  beforeEach(() => {
    cy.visit('http://dennisvdberg.nl');
  });

  it('.click() - click on a DOM element', () => {
    // https://on.cypress.io/click
    cy.get('.nav-item.nav-link.projects').click();
  });
});
