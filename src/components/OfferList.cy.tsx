/// <reference types="cypress" />
import OfferList from "./OfferList";

describe("Render OfferList", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<OfferList />);
  });
});
