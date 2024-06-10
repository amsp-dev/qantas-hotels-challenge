import styled from "@emotion/styled";
// import { ArrowRight } from "../assets/icons";
import { getFriendlyKey } from "../../utils";
import { HotelOffer } from "../../types";

import PropertyPhoto from "./PropertyPhoto";
import PropertyDetails from "./PropertyDetails";
import OfferDetails from "./OfferDetails";

type OfferItemProps = {
  hotelOffer: HotelOffer;
};

function OfferItem({ hotelOffer }: OfferItemProps) {
  const { id, property, offer } = hotelOffer;
  return (
    <Offer data-cy={getFriendlyKey(id)}>
      <PropertyPhoto
        previewImage={property.previewImage}
        promotion={offer.promotion || undefined}
      />
      <Details>
        <PropertyInfo>
          <PropertyDetails property={property} />
        </PropertyInfo>
        <PricingInfo>
          <OfferDetails offer={offer} />
        </PricingInfo>
      </Details>
    </Offer>
  );
}

export default OfferItem;

const PricingInfo = styled("div")({
  flexGrow: 0,
  justifySelf: "flex-end",
});

const PropertyInfo = styled("div")({
  flexGrow: 1,
  justifySelf: "flex-start",
});

const Details = styled("div")({
  display: "flex",
  flexGrow: 1,
  justifyContent: "stretch",
});

const Offer = styled("div")({
  display: "flex",
  justifyContent: "stretch",
  alignItems: "center",
  gap: ".5rem",
  "&, &:hover": {
    color: "#000000",
  },
});
