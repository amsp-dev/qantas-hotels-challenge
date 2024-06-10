/// <reference types="cypress" />

import OfferItem from "./Item";
import { getFriendlyKey } from "../../utils";
import { HotelOffer } from "../../types";

const hotelOffer: HotelOffer = {
  id: "mesq6mggyn",
  property: {
    propertyId: "P107802",
    title: "Primus Hotel Sydney",
    address: ["339 Pitt St", "Sydney"],
    previewImage: {
      url: "https://unsplash.it/145/125/?random",
      caption: "Image of Primus Hotel Sydney",
      imageType: "PRIMARY",
    },
    rating: {
      ratingValue: 5,
      ratingType: "self",
    },
  },
  offer: {
    promotion: {
      title: "Exclusive Deal",
      type: "MEMBER",
    },
    name: "Deluxe King",
    displayPrice: {
      amount: 375.0,
      currency: "AUD",
    },
    savings: {
      amount: 28.0,
      currency: "AUD",
    },
    cancellationOption: {
      cancellationType: "FREE_CANCELLATION",
    },
  },
};

describe("OfferItem", () => {
  it("renders with a title, price, and image,", () => {
    // see: https://on.cypress.io/mounting-react - known issue with cy.mount type error
    cy.mount(<OfferItem hotelOffer={hotelOffer} />);

    // Test the text is correct
    cy.get(`[data-cy=offer-item]`)
      .should("exist")
      .and("contain", "Primus Hotel Sydney")
      .and("contain", "$375");

    // // Test the image path is correct
    cy.get(`[data-cy=offer-item] img`).should(
      "have.attr",
      "src",
      "https://unsplash.it/145/125/?random"
    );
  });
});
