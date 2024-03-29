import React, { useEffect, useState } from "react";
import type { FC, ReactElement } from "react";
import { IError } from "../shared/types/IError";
import { IData } from "../shared/types/searchData/IData";
import { getAllSearchList } from "./api/getAllSearchList/getAllSearchList";
import SearchList from "../shared/components/organisms/SearchList";
import SearchHeader from "./components/SearchHeader";
import { useMedia } from "../shared/hooks/useMedia";
import { SCREENS } from "../shared/constants";
import Spinner from "../shared/components/atoms/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { IVideo } from "../shared/types/searchData/IVideo";
import { IChannel } from "../shared/types/searchData/IChannel";
import { IPlaylist } from "../shared/types/searchData/IPlaylist";
import { useQuery } from "../shared/hooks/useQuery";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import useAnalytics from "../shared/hooks/useAnalytics";

const SearchPage: FC<{ setLoading: (val: boolean) => void; loading: boolean }> = ({
  setLoading,
  loading
}): ReactElement => {
  const [data, setData] = useState<IData.IMainData | null>(null);
  const [hasMoreSearchList, setHasMoreSearchList] = useState<boolean>(true);

  const matched = useMedia(`(max-width: ${SCREENS.SM})`);
  const value = useQuery().get("query") ?? "";
  const { pathname } = useLocation();
  const { logEvent } = useAnalytics();

  useEffect(() => {
    logEvent("GAPageViews", "guest-pageview-searchPage", pathname);
  }, []);

  useEffect(() => {
    const getSearchData = async () => {
      setLoading(true);

      try {
        const searchListDetails = (await getAllSearchList({ query: value })) as IData.IMainData;

        const totalResults = searchListDetails?.pageInfo?.totalResults ?? 0;
        const length = searchListDetails?.items?.length ?? 0 + 1;

        setHasMoreSearchList(totalResults > length);
        setData(searchListDetails);
      } catch (err: unknown) {
        const { message } = err as IError.IErrorData;

        toast.error(message);
      } finally {
        setLoading(false);
      }
    };

    getSearchData();
  }, [value]);

  const getMoreSearchList = async () => {
    setLoading(true);

    try {
      const searchListDetails = (await getAllSearchList({
        query: value,
        nextPageToken: data?.nextPageToken
      })) as IData.IMainData;

      const totalResults = data?.pageInfo?.totalResults ?? 0;
      const length = data?.items?.length ?? 0 + 1;

      setHasMoreSearchList(totalResults > length);
      setData({
        ...(data as IData.IMainData),
        nextPageToken: searchListDetails.nextPageToken,
        items: [
          ...(data?.items as IVideo[] | IChannel[] | IPlaylist[]),
          ...searchListDetails.items
        ] as IVideo[] | IChannel[] | IPlaylist[]
      });
    } catch (err: unknown) {
      const { message } = err as IError.IErrorData;

      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  if (matched && loading && !data) {
    return <Spinner />;
  }

  return (
    <>
      {data && (
        <>
          <SearchHeader totalResults={data?.pageInfo.totalResults ?? 0} />
          <InfiniteScroll
            dataLength={data?.items.length}
            next={getMoreSearchList}
            hasMore={hasMoreSearchList}
            loader={<Spinner />}
            style={{ overflow: "hidden" }}
          >
            <SearchList searchList={data?.items ?? []} />
          </InfiniteScroll>
        </>
      )}
    </>
  );
};

export default SearchPage;
