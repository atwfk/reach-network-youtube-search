import React, { useEffect, useState, useMemo } from "react";
import type { FC, ReactElement } from "react";
import { useLocation } from "react-router-dom";
import { IError } from "../shared/types/IError";
import { IData } from "../shared/types/searchData/IData";
import { getAllSearchList } from "./api/getAllSearchList/getAllSearchList";
import SearchList from "../shared/components/organisms/SearchList";
import SearchHeader from "./components/SearchHeader";
import { useMedia } from "../shared/hooks/useMedia";
import { SCREENS } from "../shared/constants";
import Spinner from "../shared/components/atoms/Spinner";

const SearchPage: FC<{ setLoading: (val: boolean) => void; loading: boolean }> = ({
  setLoading,
  loading
}): ReactElement => {
  const [data, setData] = useState<IData.IMainData | null>(null);
  const { search } = useLocation();
  const matched = useMedia(`(max-width: ${SCREENS.SM})`);

  const query = useMemo(() => new URLSearchParams(search), [search]);
  const value = query.get("query") ?? "";

  useEffect(() => {
    const getSearchData = async () => {
      setLoading(true);

      try {
        const searchListDetails = (await getAllSearchList({ query: value })) as IData.IMainData;

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

  if (matched && loading) {
    return <Spinner />;
  }

  if (loading && data) {
    return (
      <>
        <SearchHeader totalResults={data?.pageInfo.totalResults ?? 0} />
        <SearchList searchList={data?.items ?? []} />
      </>
    );
  }

  return (
    <>
      {data && (
        <>
          <SearchHeader totalResults={data?.pageInfo.totalResults ?? 0} />
          <SearchList searchList={data?.items ?? []} />
        </>
      )}
    </>
  );
};

export default SearchPage;
