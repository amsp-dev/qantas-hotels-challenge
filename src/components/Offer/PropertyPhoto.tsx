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
        <PropertyImage
          src={previewImage.url}
          alt={previewImage.caption ? previewImage.caption : undefined}
        />
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

const Photo = styled("span")({
  display: "block",
  position: "relative",
  flexGrow: 0,
});
