import styled from "@emotion/styled";

type RatingProps = {
  value: number;
  type: string;
};

function Rating({ value, type }: RatingProps) {
  return (
    <RatingContainer>
      {value} - {type}
    </RatingContainer>
  );
}

export default Rating;

const RatingContainer = styled("div")({});
