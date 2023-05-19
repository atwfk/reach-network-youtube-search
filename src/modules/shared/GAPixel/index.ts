import ReactGA from "react-ga4";

interface PixelEvent {
  category: string;
  action: PixelEventNames;
  label?: string;
  gaOptions?: Record<string, string | number>;
}

type PixelEventNames = "clicks" | "page_view" | "search";

const logEvent = (data: PixelEvent): void => {
  for (const field in data.gaOptions) ReactGA.set({ [field]: data.gaOptions[field] });
  ReactGA.event({
    category: data.category.toLowerCase(),
    action: data.action.toLowerCase(),
    label: data.label
  });
};

export const GAClicks = (category: string): void =>
  logEvent({
    category: category,
    action: "clicks"
  });

export const GAPageViews = (category: string, pageName: string): void =>
  logEvent({
    category: category,
    action: "page_view",
    label: pageName
  });

export const GASearch = (searchValue: string, pageName: string): void =>
  logEvent({
    category: `user-searched-${searchValue}`,
    action: "search",
    label: pageName
  });
