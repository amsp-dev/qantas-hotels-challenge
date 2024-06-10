import styled from "@emotion/styled";
import { Offer } from "../../types";

type OfferItemProps = {
  offer: Offer;
};

function OfferDetails({ offer }: OfferItemProps) {
  return (
    <OfferDetailsContainer>
      <OfferTermsRow>
        1 night total
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

const Price = styled("div")({});

const SavingsContainer = styled("div")({
  minHeight: 20,
});

const SavingsRow = styled("div")({
  fontWeight: "bold",
});

const OfferTermsRow = styled("div")({});

const PricePrefix = styled("span")({});

const PriceRow = styled("div")({
  display: "flex",
});

const OfferDetailsContainer = styled("div")({
  flexGrow: 0,
  alignSelf: "flex-end",
});
