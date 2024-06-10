import styled from "@emotion/styled";
import { Property, Offer } from "../../types";
import Rating from "./Rating";

type PropertyDetailsProps = {
  property: Property;
  offer: Offer;
};

function PropertyDetails({ property, offer }: PropertyDetailsProps) {
  return (
    <PropertyDetailsContainer>
      <TitleRatingRow>
        <Title>{property.title}</Title>
        <RatingContainer>
          <Rating
            value={property.rating.ratingValue}
            type={property.rating.ratingType}
          />
        </RatingContainer>
      </TitleRatingRow>
      <Address>{property.address.join(", ")}</Address>
      <RoomName>{offer.name}</RoomName>
      {offer.cancellationOption?.cancellationType &&
        offer.cancellationOption.cancellationType === "FREE_CANCELLATION" && (
          <Cancellation>Free Cancellation</Cancellation>
        )}
    </PropertyDetailsContainer>
  );
}

export default PropertyDetails;

const Cancellation = styled("div")({
  color: "#00AA6C",
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
});

const Title = styled("h3")({
  fontWeight: 500,
  fontSize: "1.2rem",
  lineHeight: "1rem",
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
