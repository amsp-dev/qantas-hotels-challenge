/// <reference types="cypress" />

import Rating from "./Rating";

describe("Rating renders vectors to represent a numerical value", () => {
  // see: https://on.cypress.io/mounting-react - known issue with cy.mount type error

  it("renders star ratings by converting 0-5 value into percentage for a specific star", () => {
    cy.mount(<Rating value={2.32} type="star" titleKey="test-title-key" />);

    // Test that 5 svg's are rendering
    cy.get(`[data-cy="test-title-key"]`).find("svg").should("have.length", 5);

    // test that the 2nd star has a linear gradient percentage of 100
    cy.get(`[data-cy="test-title-key"] svg:eq(1)`)
      .find("linearGradient stop")
      .should("exist")
      .invoke("attr", "offset")
      .should("contain", "100%");

    // test that the 3rd star has a linear gradient percentage of 32
    cy.get(`[data-cy="test-title-key"] svg:eq(2)`)
      .find("linearGradient stop")
      .should("exist")
      .invoke("attr", "offset")
      .should("contain", "32%");

    // test that the 4th star has a linear gradient percentage of 0
    cy.get(`[data-cy="test-title-key"] svg:eq(3)`)
      .find("linearGradient stop")
      .should("exist")
      .invoke("attr", "offset")
      .should("contain", "0%");
  });

  it("renders circle ratings by converting 0-5 value into percentage for a specific star", () => {
    cy.mount(<Rating value={4.68} type="self" titleKey="test-title-key-2" />);

    // test that the 4th circle has a linear gradient percentage of 100
    cy.get(`[data-cy="test-title-key-2"] svg:eq(3)`)
      .find("linearGradient stop")
      .should("exist")
      .invoke("attr", "offset")
      .should("contain", "100%");

    // test that the 5th circle has a linear gradient percentage of 68
    cy.get(`[data-cy="test-title-key-2"] svg:eq(4)`)
      .find("linearGradient stop")
      .should("exist")
      .invoke("attr", "offset")
      .should("contain", "68%");
  });
});
