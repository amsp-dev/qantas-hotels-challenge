/// <reference types="cypress" />
import DataList from "./DataList";

describe("<DataList />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<DataList />);
  });
});
