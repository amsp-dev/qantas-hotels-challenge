import styled from "@emotion/styled";
import "./App.css";

import DataList from "./components/DataList";

function App() {
  return (
    <>
      <Heading>Vite / React Boilerplate</Heading>
      <p>
        This is a vite boilerplate with MSW and Cypress for React / Typescript
        with @emotion/styled
      </p>
      <DataList />
    </>
  );
}

export default App;

const Heading = styled("h1")({
  letterSpacing: ".1rem",
});
