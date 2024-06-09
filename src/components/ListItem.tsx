import styled from "@emotion/styled";
// import { ArrowRight } from "../assets/icons";
import { getFriendlyKey } from "../utils";
import { HotelOffer } from "../types";

type ListItemProps = {
  hotelOffer: HotelOffer;
};

function ListItem({ hotelOffer }: ListItemProps) {
  return (
    <Offer data-cy={getFriendlyKey(hotelOffer.id)}>
      <PropertyTitle data-cy={`${getFriendlyKey(hotelOffer.id)}-title`}>
        {hotelOffer.property.title}
      </PropertyTitle>
      <PropertyPrice data-cy={`${getFriendlyKey(hotelOffer.id)}-price`}>
        {hotelOffer.offer.displayPrice.amount.toFixed(0)}
        {hotelOffer.offer.displayPrice.currency}
      </PropertyPrice>
    </Offer>
  );
}

export default ListItem;

const PropertyPrice = styled("span")({});

const PropertyTitle = styled("span")({
  textDecoration: "underline",
});

const Offer = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: ".5rem",
  fontWeight: 800,
  fontSize: ".875rem",
  lineHeight: "1.05rem",
  "&, &:hover": {
    color: "#000000",
  },
});
