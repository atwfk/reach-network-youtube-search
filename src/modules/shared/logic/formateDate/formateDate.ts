import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import duration from "dayjs/plugin/duration";

dayjs.extend(relativeTime);
dayjs.extend(duration);

export const humanReadableDate = (date: string): string => {
  return dayjs(date).from(dayjs());
};

export const formatVideoDuration = (vidDuration: string): string => {
  const durationData = dayjs.duration(vidDuration);
  if (+durationData.asHours().toFixed(0) > 0) {
    return durationData.format("HH:mm:ss");
  }

  return durationData.format("mm:ss");
};
