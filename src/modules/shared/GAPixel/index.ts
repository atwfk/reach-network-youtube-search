import ReactGA from "react-ga4";

interface PixelEvent {
  name: PixelCategory;
  action: string;
  label?: string;
  gaOptions?: Record<string, string | number>;
}

type PixelCategory = "clicks" | "page_view" | "search";

const logEvent = (data: PixelEvent): void => {
  for (const field in data.gaOptions) ReactGA.set({ [field]: data.gaOptions[field] });
  ReactGA.event(data.name.toLowerCase(), {
    action: data.action.toLowerCase(),
    label: data.label
  });
};

export const GAClicks = (action: string): void =>
  logEvent({
    name: "clicks",
    action
  });

export const GAPageViews = (action: string, pageName: string): void =>
  logEvent({
    name: "page_view",
    action,
    label: pageName
  });

export const GASearch = (action: string, pageName: string): void =>
  logEvent({
    name: "search",
    action: `user-searched-${action}`,
    label: pageName
  });
