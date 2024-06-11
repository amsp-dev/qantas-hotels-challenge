/// <reference types="cypress" />

describe("App Functionality", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Should display a list of 5 items", () => {
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
  it("Can be sorted by ascending price", () => {
    cy.get("[data-cy=list-header] select").select('asc');
    
    // to allow for the manufactured delay in the API handler
    cy.wait(600);

    // Get the prices in an array
    cy.get('[data-cy=offer-price]')
    .then(($prices) =>
      Cypress._.map($prices, (el) => el.innerText),
    )
    .should('be.an', 'array')
    // Ensure the array is numbers only
    .then((list) => list.map((text) => text.split(' ')[0]))
    .then((list) => list.map((str) => str.replace(/[^0-9.]/g, '')))
    .should('be.an', 'array')
    .then((list) => list.map(parseFloat))
    .should('be.an', 'array')
    .then((list) => {
      // confirm the list is sorted by sorting it using Lodash
      // and comparing the original and sorted lists
      const sorted = Cypress._.sortBy(list)
      expect(sorted).to.deep.equal(list)
      // we can also confirm each number is between min and max
    })
  });
  it("Can be sorted by descending price", () => {
    cy.get("[data-cy=list-header] select").select('desc');
    
    // to allow for the manufactured delay in the API handler
    cy.wait(600);

    // Get the prices in an array
    cy.get('[data-cy=offer-price]')
    .then(($prices) =>
      Cypress._.map($prices, (el) => el.innerText),
    )
    .should('be.an', 'array')
    // Ensure the array is numbers only
    .then((list) => list.map((text) => text.split(' ')[0]))
    .then((list) => list.map((str) => str.replace(/[^0-9.]/g, '')))
    .should('be.an', 'array')
    .then((list) => list.map(parseFloat))
    .should('be.an', 'array')
    .then((list) => {
      // confirm the list is sorted by sorting it using Lodash
      // and comparing the original and sorted lists
      const sorted = Cypress._.sortBy(list).reverse();
      expect(sorted).to.deep.equal(list)
    })
  });
});