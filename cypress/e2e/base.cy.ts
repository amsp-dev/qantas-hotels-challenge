/// <reference types="cypress" />

describe("App Loads", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Should display a list of items", () => {
    cy.get("[data-cy=list-results]").find('[data-cy=offer-item]').should("have.length", 5);
  });

  it("Renders a hotel loaded from the API", () => {
    cy.get("[data-cy=list-results]").should('contain.text', 'PARKROYAL');
  });
  
  it("Changes the order of the list when using the sort select", () => {
    cy.get("[data-cy=list-results] > div:eq(3)").should('contain.text', 'PARKROYAL');
    
    cy.get("[data-cy=list-header] select").select('desc');
    
    // to allow for the manufactured delay in the API handler
    cy.wait(600);

    // TODO: INvestigate why this is failing in electron...
    cy.get("[data-cy=list-results] > div:eq(0)").should('contain.text', 'PARKROYAL');
  });
});