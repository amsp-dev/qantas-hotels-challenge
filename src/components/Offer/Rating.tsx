import styled from "@emotion/styled";

function RatingItem({
  offset = true,
  offsetPercentage = "100%",
  activeColor = "#F7E708",
  offColor = "#DCDDDF",
  type = "star",
  titleKey = "",
  index = 0,
}) {
  return (
    <RatingItemContainer>
      <svg viewBox="0 0 24 24">
        {offset && (
          <defs>
            <linearGradient id={`${titleKey}-${index}`}>
              <stop offset={offsetPercentage} stopColor={activeColor} />
              <stop offset={offsetPercentage} stopColor={offColor} />
            </linearGradient>
          </defs>
        )}
        {type === "star" ? (
          <path
            stroke={activeColor}
            strokeWidth={0}
            fill={offset ? `url(#${titleKey}-${index})` : activeColor}
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          ></path>
        ) : (
          <path
            stroke={activeColor}
            strokeWidth={0}
            fill={offset ? `url(#${titleKey}-${index})` : activeColor}
            d="M12,3a9,9,0,1,0,9,9A9,9,0,0,0,12,3Z"
          ></path>
        )}
      </svg>
    </RatingItemContainer>
  );
}

type RatingProps = {
  value: number;
  type: string;
  // Need to use this to generate a unique map for the gradient
  titleKey: string;
};

function Rating({ value, type, titleKey }: RatingProps) {
  // Get the greatest whole number
  const greatestWholeNumber = Math.floor(value);
  // Extract the offset percentage component of the value
  const offsetPercentageValue = value - greatestWholeNumber;

  return (
    <RatingContainer>
      {[...Array(5)].map((_, i) => {
        let offsetPercentage = 100;
        if (i === greatestWholeNumber) {
          offsetPercentage = 100 * offsetPercentageValue;
        } else if (i > greatestWholeNumber) {
          offsetPercentage = 0;
        }
        console.log(
          i,
          offsetPercentage,
          greatestWholeNumber,
          offsetPercentageValue
        );
        return (
          <RatingItem
            key={`rating-item-${i}`}
            titleKey={titleKey}
            offset={true}
            offsetPercentage={`${offsetPercentage}%`}
            type={type}
            index={i}
          />
        );
      })}
    </RatingContainer>
  );
}

export default Rating;

const RatingItemContainer = styled("div")({
  display: "inline-block",
  svg: {
    width: 14,
  },
});

const RatingContainer = styled("div")({});
