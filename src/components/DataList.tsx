import { useState, useEffect, useCallback } from "react";
import styled from "@emotion/styled";

import { DataItem } from "../types";
import { getFriendlyKey } from "../utils";
import ListItem from "./ListItem";

function DataList() {
  const [data, setData] = useState<DataItem[] | []>([]);

  const getData = useCallback(async () => {
    const response = await fetch(`/api/data`, {
      headers: { responseType: "json" },
      method: "GET",
    });
    response.json().then((jsonResponse) => {
      setData(jsonResponse.results);
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
    <DataContainer>
      {data ? (
        <Data className="list-data">
          {data.map((item) => (
            <ListItem
              key={getFriendlyKey(item.title)}
              text={item.title}
              to={item.linkHref}
            />
          ))}
        </Data>
      ) : (
        <Loading className="loading">loading...</Loading>
      )}
    </DataContainer>
  );
}

export default DataList;

const DataContainer = styled("div")({});

const Data = styled("div")({
  fontSize: "1.1rem",
});

const Loading = styled("p")({
  fontWeight: "bold",
});
