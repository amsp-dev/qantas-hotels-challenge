import { useState, useEffect, useCallback } from "react";
import styled from "@emotion/styled";

import { HotelOffer } from "../../types";
// import { getFriendlyKey } from "../utils";
import OfferItem from "../Offer/Item";

function OfferList() {
  const [data, setData] = useState<HotelOffer[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [totalResults, setTotalResults] = useState<number>(0);
  const [locationQueryParam, setLocationQueryParam] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("");

  const getData = useCallback(async () => {
    setIsLoading(true);
    const response = await fetch(`/api/data?sort=${sortBy}`, {
      headers: { responseType: "json" },
      method: "GET",
    });
    response.json().then((jsonResponse) => {
      setIsLoading(false);
      setData(jsonResponse.results);
      setTotalResults(jsonResponse.total);
      setLocationQueryParam(jsonResponse.locationQueryParam);
    });
  }, [setData, sortBy]);

  useEffect(() => {
    getData();
    // Cleanup...
    return () => {
      setData([]);
    };
  }, [sortBy]);

  return (
    <OfferListContainer>
      <OfferListHeader data-cy="list-header">
        <ResultSummary>
          {!isLoading ? (
            <>
              {totalResults > 0 ? (
                <>
                  <strong className="count">{totalResults}</strong>&nbsp;
                  <em>hotels in</em>&nbsp;
                  <strong className="location">{locationQueryParam}</strong>
                </>
              ) : (
                <em>No Results</em>
              )}
            </>
          ) : (
            <Loading className="loading">Loading...</Loading>
          )}
        </ResultSummary>

        <SortBy>
          <SortByLabel htmlFor="sort-by">Sort By</SortByLabel>
          <SortBySelect
            id="sort-by"
            value={sortBy}
            onChange={(e) => {
              setSortBy(e.currentTarget.value);
            }}
          >
            <option value="">Default</option>
            <option value="desc">Price (high-low)</option>
            <option value="asc">Price (low-high)</option>
          </SortBySelect>
        </SortBy>
      </OfferListHeader>
      {data && !isLoading && (
        <OfferListResults data-cy="list-results" className="list-data">
          {data.map((item) => (
            <OfferItem key={item.id} hotelOffer={item} />
          ))}
        </OfferListResults>
      )}
    </OfferListContainer>
  );
}

export default OfferList;

const SortBySelect = styled("select")({});

const SortByLabel = styled("label")({
  fontWeight: "bold",
});

const SortBy = styled("div")({
  alignSelf: "flex-end",
  gap: ".5rem",
  display: "flex",
});

const ResultSummary = styled("div")({
  alignSelf: "flex-start",
});

const OfferListHeader = styled("div")({
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: "1rem",
  padding: "0 1rem",
});

const OfferListContainer = styled("div")({});

const OfferListResults = styled("div")({
  fontSize: "1.1rem",
  gap: ".5rem",
  display: "flex",
  flexDirection: "column",
  padding: "0 1rem",
});

const Loading = styled("em")({
  fontWeight: "bold",
  textAlign: "left",
});
