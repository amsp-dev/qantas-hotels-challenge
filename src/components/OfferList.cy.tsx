/// <reference types="cypress" />
import OfferList from "./OfferList";

describe("Render OfferList", () => {
  it("renders with a summary header and select to change the list sort", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<OfferList />);

    // Test the select is there and contains a descending sort option
    cy.get(`[data-cy="list-header"]`)
      .should("exist")
      .and("contain", "Loading...");
    cy.get(`[data-cy="list-header"] select`)
      .should("exist")
      .find('option[value="desc"]');
  });

  it("Does not render a list of items without data", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<OfferList />);

    // Test the text is correct
    cy.get(`[data-cy="list-results"]`).should("not.exist");
  });
});
