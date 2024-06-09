import styled from "@emotion/styled";
import "./App.css";

import DataList from "./components/DataList";

function App() {
  return (
    <PageContainer>
      <Header>
        <Logo href="https://www.qantas.com/hotels" />
      </Header>
      <DataList />
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
  padding: "1rem 0",
});

const PageContainer = styled("div")({
  padding: "0 1rem",
});
