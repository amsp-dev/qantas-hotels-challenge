import styled from "@emotion/styled";
import { Offer } from "../../types";

type OfferItemProps = {
  offer: Offer;
};

function OfferDetails({ offer }: OfferItemProps) {
  return (
    <OfferDetailsContainer data-cy="offer-details">
      <OfferTermsRow>
        <strong>1</strong> night total
        {offer.displayPrice.currency
          ? ` (${offer.displayPrice.currency})`
          : undefined}
      </OfferTermsRow>
      <PriceRow>
        <PricePrefix>$</PricePrefix>
        <Price data-cy="offer-price">
          {offer.displayPrice.amount.toFixed(0)}
        </Price>
      </PriceRow>
      <SavingsContainer>
        {offer.savings && (
          <SavingsRow>Save ${offer.savings.amount}~</SavingsRow>
        )}
      </SavingsContainer>
    </OfferDetailsContainer>
  );
}

export default OfferDetails;

const SavingsContainer = styled("div")({
  minHeight: "1.6rem",
});

const SavingsRow = styled("div")({
  fontWeight: 400,
  color: "#E40000",
});

const OfferTermsRow = styled("div")({
  color: "#676767",
  fontSize: ".65rem",
  lineHeight: ".65rem",
});

const Price = styled("div")({
  fontSize: "1.8rem",
  lineHeight: "1.4rem",
});

const PricePrefix = styled("span")({
  marginRight: ".2rem",
  lineHeight: "1.1rem",
});

const PriceRow = styled("div")({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-end",
});

const OfferDetailsContainer = styled("div")({
  flexGrow: 0,
  flexShrink: 0,
  alignSelf: "flex-end",
  display: "flex",
  flexDirection: "column",
  gap: ".5rem",
});
