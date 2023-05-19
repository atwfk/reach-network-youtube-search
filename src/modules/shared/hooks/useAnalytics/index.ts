// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck comment
import { GAClicks, GAPageViews } from "../../GAPixel";
const EVENTS = { GAClicks, GAPageViews, GASearch };

type EventKeys = keyof typeof EVENTS;

interface UseAnalytics {
  logEvent: (event: EventKeys, ...args: string[]) => void;
}

const useAnalytics = (): UseAnalytics => {
  const me = "guest";

  const logEvent = function (event: EventKeys, ...args: string[]): void {
    return EVENTS[event].apply(this, [...args, me]);
  };

  return { logEvent };
};

export default useAnalytics;
