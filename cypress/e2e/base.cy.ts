/// <reference types="cypress" />

describe("App Loads", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Contains a header", () => {
    cy.get("h1").should('contain.text', 'Boilerplate');
  });

  it("Renders data loaded from the API", () => {
    cy.get(".list-data").should('contain.text', 'Second Item');
  });
});