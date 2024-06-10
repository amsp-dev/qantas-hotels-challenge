import styled from "@emotion/styled";
import { Property } from "../../types";

type OfferItemProps = {
  property: Property;
};

function PropertyDetails({ property }: OfferItemProps) {
  return (
    <PropertyDetailsContainer>
      <Title>{property.title}</Title>
    </PropertyDetailsContainer>
  );
}

export default PropertyDetails;

const Title = styled("h3")({
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  textAlign: "left",
});

const PropertyDetailsContainer = styled("div")({
  flexGrow: 1,
  justifySelf: "flex-start",
});
