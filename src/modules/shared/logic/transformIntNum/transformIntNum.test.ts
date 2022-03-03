import { formatNumberWithCommas, formateIntNum } from "./transformIntNum";

describe("formatNumberWithCommas", () => {
  it("should return comma separated number", () => {
    const million = 1_000_000;
    const commaSeparatedNum = formatNumberWithCommas(million);

    expect(commaSeparatedNum).toEqual("1,000,000");
  });
});

describe("formateIntNum", () => {
  it("should return formatted number with symbol if we pass number more than thousand", () => {
    const moreThanThousand = "1548";
    const formattedNumber = formateIntNum(moreThanThousand);

    expect(formattedNumber).toEqual("1.5K");
  });

  it("should return formatted number without symbol if we pass number less than thousand", () => {
    const lessThanThousand = "548";
    const formattedNumber = formateIntNum(lessThanThousand);

    expect(formattedNumber).toEqual("548");
  });
});
