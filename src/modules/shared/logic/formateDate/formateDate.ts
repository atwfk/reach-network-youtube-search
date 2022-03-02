import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import duration from "dayjs/plugin/duration";

dayjs.extend(relativeTime);
dayjs.extend(duration);

export const humanReadableDate = (date: string): string => {
  return dayjs(date).from(dayjs());
};

export const convertVideoDuration = (vidDuration: string): string =>
  dayjs.duration(vidDuration).format("mm:ss");
