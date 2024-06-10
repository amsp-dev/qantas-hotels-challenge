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
        <PropertyDetails id={id} property={property} offer={offer} />
        <OfferDetails offer={offer} />
      </Details>
    </Offer>
  );
}

export default OfferItem;

const Details = styled("div")({
  position: "relative",
  display: "flex",
  flexGrow: 1,
  justifyContent: "space-between",
  alignSelf: "stretch",
});

const Offer = styled("div")({
  display: "flex",
  justifyContent: "stretch",
  alignItems: "flex-start",
  gap: "1rem",
  "&, &:hover": {
    color: "#000000",
  },
});
