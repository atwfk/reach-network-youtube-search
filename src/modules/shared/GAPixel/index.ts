import ReactGA from "react-ga4";

interface PixelEvent {
  category: PixelCategory;
  action: string;
  label?: string;
  gaOptions?: Record<string, string | number>;
}

type PixelCategory = "clicks" | "page-view";

const logEvent = (data: PixelEvent): void => {
  for (const field in data.gaOptions) ReactGA.set({ [field]: data.gaOptions[field] });
  ReactGA.event({
    category: data.category.toLowerCase(),
    action: data.action.toLowerCase(),
    label: data.label
  });
};

export const GAClicks = (action: string): void =>
  logEvent({
    category: "clicks",
    action
  });

export const GAPageViews = (action: string, pageName: string): void =>
  logEvent({
    category: "page-view",
    action,
    label: pageName
  });
