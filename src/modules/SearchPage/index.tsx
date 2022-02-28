import React, { useEffect, useState, useMemo } from "react";
import type { FC, ReactElement } from "react";
import { useLocation } from "react-router-dom";
import { IError } from "../shared/types/IError";
import { IData } from "../shared/types/searchData/IData";
import { getAllSearchList } from "./api/getAllSearchList/getAllSearchList";

const SearchPage: FC = (): ReactElement => {
  const [data, setData] = useState<null | IData.IMainData>(null);
  const [loading, setLoading] = useState(false);
  const { search } = useLocation();

  console.log(data);
  console.log(loading);

  const query = useMemo(() => new URLSearchParams(search), [search]);

  useEffect(() => {
    const getSearchData = async () => {
      setLoading(true);
      try {
        const searchListDetails = (await getAllSearchList({
          query: query.get("query") ?? ""
        })) as IData.IMainData;

        setData(searchListDetails);
      } catch (err: unknown) {
        const { errorCode, errors, isError, message } = err as IError.IErrorData;

        console.log({ errorCode, errors, isError, message });
      } finally {
        setLoading(false);
      }
    };

    getSearchData();
  }, []);

  return <h1>Search Page</h1>;
};

export default SearchPage;
