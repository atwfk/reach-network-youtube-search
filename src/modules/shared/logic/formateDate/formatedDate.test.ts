import { formatVideoDuration } from "./formateDate";

describe("formatVideoDuration", () => {
  it("should return hours with minutes and seconds if video duration is more than 1 hour", () => {
    const duration = formatVideoDuration("PT3H36M55S");

    expect(duration).toEqual("03:36:55");
  });

  it("should return only minutes and seconds if video duration is less than 1 hour", () => {
    const duration = formatVideoDuration("PT7M26S");

    expect(duration).toEqual("07:26");
  });
});
