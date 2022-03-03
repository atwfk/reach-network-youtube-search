import React, { useEffect, useState, useMemo } from "react";
import type { FC, ReactElement } from "react";
import { useLocation } from "react-router-dom";
import { IError } from "../shared/types/IError";
import { IData } from "../shared/types/searchData/IData";
import { getAllSearchList } from "./api/getAllSearchList/getAllSearchList";
import SearchList from "../shared/components/organisms/SearchList";
import SearchHeader from "./components/SearchHeader";

const SearchPage: FC = (): ReactElement => {
  const [data, setData] = useState<IData.IMainData | null>(null);
  const [loading, setLoading] = useState(true);
  const { search } = useLocation();

  const query = useMemo(() => new URLSearchParams(search), [search]);

  useEffect(() => {
    const getSearchData = async () => {
      try {
        const searchListDetails = (await getAllSearchList({
          query: query.get("query") ?? ""
        })) as IData.IMainData;

        setData(searchListDetails);
      } catch (err: unknown) {
        const { errorCode, errors, isError, message } = err as IError.IErrorData;

        alert({ errorCode, errors, isError, message });
      } finally {
        setLoading(false);
      }
    };

    getSearchData();
  }, [query]);

  return (
    <>
      {!loading && (
        <>
          <SearchHeader totalResults={data?.pageInfo.totalResults ?? 0} />
          <SearchList searchList={data?.items ?? []} />
        </>
      )}
    </>
  );
};

export default SearchPage;
