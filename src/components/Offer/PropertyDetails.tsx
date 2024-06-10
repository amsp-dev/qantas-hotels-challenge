import styled from "@emotion/styled";
import { Property, Offer } from "../../types";
import Rating from "./Rating";

type PropertyDetailsProps = {
  property: Property;
  offer: Offer;
  id: string;
};

function PropertyDetails({ id, property, offer }: PropertyDetailsProps) {
  return (
    <PropertyDetailsContainer>
      <TitleRatingRow>
        <Title>{property.title}</Title>
        <RatingContainer>
          <Rating
            value={property.rating.ratingValue}
            type={property.rating.ratingType}
            titleKey={id}
          />
        </RatingContainer>
      </TitleRatingRow>
      <Address>{property.address.join(", ")}</Address>
      <RoomName>{offer.name}</RoomName>
      {offer.cancellationOption?.cancellationType &&
        offer.cancellationOption.cancellationType === "FREE_CANCELLATION" && (
          <Cancellation>Free cancellation</Cancellation>
        )}
    </PropertyDetailsContainer>
  );
}

export default PropertyDetails;

const Cancellation = styled("div")({
  color: "#66887B",
  justifySelf: "flex-end",
  fontSize: ".825rem",
  marginTop: "auto",
});

const RoomName = styled("div")({
  fontSize: ".825rem",
  color: "#E40000",
  textDecoration: "underline",
});

const Address = styled("div")({
  color: "#999999",
  fontSize: ".825rem",
});

const RatingContainer = styled("div")({
  flexShrink: 0,
});

const TitleRatingRow = styled("div")({
  display: "flex",
  justifyContent: "stretch",
  gap: "1rem",
  marginTop: ".5rem",
  width: "100%",
  alignItems: "center",
});

const Title = styled("h3")({
  fontWeight: 500,
  fontSize: "1.3rem",
  lineHeight: "1.5rem",
  margin: 0,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  textAlign: "left",
});

const PropertyDetailsContainer = styled("div")({
  flexGrow: 1,
  justifySelf: "flex-start",
  alignItems: "flex-start",
  display: "flex",
  flexDirection: "column",
  gap: ".25rem",
});
