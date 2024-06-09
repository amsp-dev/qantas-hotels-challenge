import styled from "@emotion/styled";
import { ArrowRight } from "../assets/icons";
import { getFriendlyKey } from "../utils";
import { HotelOffer } from "../types";

type ListItemProps = {
  hotelOffer: HotelOffer;
};

function ListItem({ hotelOffer }: ListItemProps) {
  return (
    <ListElement data-cy={getFriendlyKey(hotelOffer.id)}>
      <LinkText data-cy={`${getFriendlyKey(hotelOffer.id)}-title`}>
        {hotelOffer.property.title}
      </LinkText>
      <ArrowRight />
    </ListElement>
  );
}

export default ListItem;

const LinkText = styled("span")({
  textDecoration: "underline",
});

const ListElement = styled("div")({
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
