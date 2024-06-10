import styled from "@emotion/styled";
import { OfferPromotion, PreviewImage } from "../../types";

type OfferPhotoProps = {
  promotion?: OfferPromotion;
  previewImage: PreviewImage;
};

function OfferPhoto({ promotion, previewImage }: OfferPhotoProps) {
  return (
    <Photo>
      {promotion && promotion.title && (
        <OfferLabel className={promotion.type ? promotion.type : undefined}>
          {promotion.title}
        </OfferLabel>
      )}
      {previewImage && previewImage.url && (
        <PropertyImageContainer>
          <PropertyImage
            src={previewImage.url}
            alt={previewImage.caption ? previewImage.caption : undefined}
          />
        </PropertyImageContainer>
      )}
    </Photo>
  );
}

export default OfferPhoto;

const OfferLabel = styled("span")({
  padding: ".3rem .5rem",
  backgroundColor: "#FFFFFF",
  color: "#E00E00",
  fontSize: ".825rem",
  fontWeight: "bold",
  position: "absolute",
  top: 7,
  left: 0,
});

const PropertyImage = styled("img")({
  display: "block",
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

const PropertyImageContainer = styled("div")({
  backgroundColor: "#EEEEEE",
  minWidth: 145,
  minHeight: 125,
});

const Photo = styled("div")({
  display: "block",
  position: "relative",
  flexGrow: 0,
  flexShrink: 0,
  paddingTop: ".325rem",
  paddingBottom: ".325rem",
});
