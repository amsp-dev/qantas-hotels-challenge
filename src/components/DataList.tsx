import { useState, useEffect, useCallback } from "react";
import styled from "@emotion/styled";

import { HotelOffer } from "../types";
// import { getFriendlyKey } from "../utils";
import ListItem from "./ListItem";

function DataList() {
  const [data, setData] = useState<HotelOffer[] | []>([]);
  const [totalResults, setTotalResults] = useState<number>(0);
  const [locationQueryParam, setLocationQueryParam] = useState<string>("");

  const getData = useCallback(async () => {
    const response = await fetch(`/api/data`, {
      headers: { responseType: "json" },
      method: "GET",
    });
    response.json().then((jsonResponse) => {
      console.log(jsonResponse);
      setData(jsonResponse.results);
      setTotalResults(jsonResponse.total);
      setLocationQueryParam(jsonResponse.locationQueryParam);
    });
  }, [setData]);

  useEffect(() => {
    getData();
    // Cleanup...
    return () => {
      setData([]);
    };
  }, []);

  return (
    <OfferListContainer>
      <OfferListHeader>
        <ResultSummary>
          {totalResults && (
            <>
              <strong className="count">{totalResults}</strong>&nbsp;
              <em>hotels in</em>&nbsp;
              <strong className="location">{locationQueryParam}</strong>
            </>
          )}
        </ResultSummary>

        <SortBy>
          <SortByLabel htmlFor="sort-by">Sort By</SortByLabel>
          <SortBySelect id="sort-by">
            <option value="desc">Price (high-low)</option>
            <option value="asc">Price (low-high)</option>
          </SortBySelect>
        </SortBy>
      </OfferListHeader>
      {data ? (
        <OfferListResults className="list-data">
          {data.map((item) => (
            <ListItem key={item.id} hotelOffer={item} />
          ))}
        </OfferListResults>
      ) : (
        <Loading className="loading">loading...</Loading>
      )}
    </OfferListContainer>
  );
}

export default DataList;

const SortBySelect = styled("select")({});
const SortByLabel = styled("label")({});

const SortBy = styled("div")({
  alignSelf: "flex-end",
});

const ResultSummary = styled("div")({
  alignSelf: "flex-start",
});

const OfferListHeader = styled("div")({
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-between",
});

const OfferListContainer = styled("div")({});

const OfferListResults = styled("div")({
  fontSize: "1.1rem",
});

const Loading = styled("p")({
  fontWeight: "bold",
});
