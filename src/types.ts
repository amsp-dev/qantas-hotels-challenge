export type Property = {
  propertyId: string;
  title: string;
  address: string[];
  previewImage: {
    url: string;
    caption: string;
    imageType: string;
  };
  rating: {
    ratingValue: number;
    ratingType: "star" | "self";
  };
};

type PriceOption = {
  amount: number;
  currency: string;
}

export type Offer = {
  promotion: { 
    title: string;
    type: "MEMBER" | "CAMPAIGN"
  };
  name: string;
  displayPrice: PriceOption;
  savings: PriceOption;
  cancellationOption: {
    cancellationType: string;
  };
};

export type HotelOffer = {
  id: string;
  property: Property;
  offer: Offer;
};