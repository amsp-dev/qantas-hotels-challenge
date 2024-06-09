import styled from "@emotion/styled";
import { ArrowRight } from "../assets/icons";
import { getFriendlyKey } from "../utils";

type ListItemProps = {
  text: string;
  to: string;
};

function ListItem({ text, to }: ListItemProps) {
  return (
    <LinkElement data-cy={getFriendlyKey(text)} href={to}>
      <LinkText data-cy={`${getFriendlyKey(text)}-title`}>{text}</LinkText>
      <ArrowRight />
    </LinkElement>
  );
}

export default ListItem;

const LinkText = styled("span")({
  textDecoration: "underline",
});

const LinkElement = styled("a")({
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
