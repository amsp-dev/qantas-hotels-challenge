import styled from "@emotion/styled";
import "./App.css";

import OfferList from "./components/OfferList/List";

function App() {
  return (
    <PageContainer>
      <Header>
        <Logo href="https://www.qantas.com/hotels" />
      </Header>
      <OfferList />
    </PageContainer>
  );
}

export default App;

const Logo = styled("a")({
  textIndent: "-9999px",
  backgroundImage: "url(/img/qantas-logo.png)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  display: "block",
  width: 155,
  aspectRatio: "412 / 80",
});

const Header = styled("header")({
  width: "100%",
  padding: "1rem",
});

const PageContainer = styled("div")({});
