export type Rating = {
  ratingValue: number;
  ratingType: "star" | "self";
};

export type PreviewImage = {
  url: string;
  caption: string;
  imageType: string;
};

export type Property = {
  propertyId: string;
  title: string;
  address: string[];
  previewImage: PreviewImage;
  rating: Rating;
};

type PriceOption = {
  amount: number;
  currency: string;
}

export type OfferPromotion { 
  title: string;
  type: "MEMBER" | "CAMPAIGN"
}

export type Offer = {
  promotion?: OfferPromotion;
  name: string;
  displayPrice: PriceOption;
  savings: PriceOption | null;
  cancellationOption: {
    cancellationType: string;
  };
};

export type HotelOffer = {
  id: string;
  property: Property;
  offer: Offer;
};