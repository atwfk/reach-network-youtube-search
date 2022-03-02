import React from "react";
import type { FC, ReactElement } from "react";
import { IVideo } from "../../../types/searchData/IVideo";
import { IPlaylist } from "../../../types/searchData/IPlaylist";
import { IChannel } from "../../../types/searchData/IChannel";
import Video from "../../molecules/Video";
import { ESearchKind } from "../../../types/searchData/ESearchTypes";
import Playlist from "../../molecules/Playlist";
import Channel from "../../molecules/Channel";
import { StyledSearchList } from "./styles";

const SearchList: FC<{ searchList: IVideo[] | IPlaylist[] | IChannel[] }> = ({
  searchList
}): ReactElement => {
  return (
    <StyledSearchList>
      {searchList.map((searchItem) => (
        <>
          {searchItem.id.kind === ESearchKind.VIDEO && (
            <Video key={searchItem.id.videoId} video={searchItem as IVideo} />
          )}
          {searchItem.id.kind === ESearchKind.PLAYLIST && (
            <Playlist key={searchItem.id.playlistId} playlist={searchItem as IPlaylist} />
          )}
          {searchItem.id.kind === ESearchKind.CHANNEL && (
            <Channel key={searchItem.id.channelId} channel={searchItem as IChannel} />
          )}
        </>
      ))}
    </StyledSearchList>
  );
};

export default SearchList;
