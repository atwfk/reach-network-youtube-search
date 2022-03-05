import styled from "styled-components";
import { COLORS } from "../../../constants";

export const StyledSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .spinner {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    animation: loader-circles 1s linear infinite;
    margin-top: 20px;
    color: ${COLORS.GREY_SHD1};
  }

  @keyframes loader-circles {
    0% {
      box-shadow: 0 -27px 0 0 rgb(0 0 0 / 5%), 19px -19px 0 0 rgb(0 0 0 / 10%),
        27px 0 0 0 rgb(0 0 0 / 20%), 19px 19px 0 0 rgb(0 0 0 / 30%), 0 27px 0 0 rgb(0 0 0 / 40%),
        -19px 19px 0 0 rgb(0 0 0 / 60%), -27px 0 0 0 rgb(0 0 0 / 80%),
        -19px -19px 0 0 ${COLORS.GREY_SHD1};
    }
    12.5% {
      box-shadow: 0 -27px 0 0 ${COLORS.GREY_SHD1}, 19px -19px 0 0 rgb(0 0 0 / 5%),
        27px 0 0 0 rgb(0 0 0 / 10%), 19px 19px 0 0 rgb(0 0 0 / 20%), 0 27px 0 0 rgb(0 0 0 / 30%),
        -19px 19px 0 0 rgb(0 0 0 / 40%), -27px 0 0 0 rgb(0 0 0 / 60%),
        -19px -19px 0 0 rgb(0 0 0 / 80%);
    }
    25% {
      box-shadow: 0 -27px 0 0 rgb(0 0 0 / 80%), 19px -19px 0 0 ${COLORS.GREY_SHD1},
        27px 0 0 0 rgb(0 0 0 / 5%), 19px 19px 0 0 rgb(0 0 0 / 10%), 0 27px 0 0 rgb(0 0 0 / 20%),
        -19px 19px 0 0 rgb(0 0 0 / 30%), -27px 0 0 0 rgb(0 0 0 / 40%),
        -19px -19px 0 0 rgb(0 0 0 / 60%);
    }
    37.5% {
      box-shadow: 0 -27px 0 0 rgb(0 0 0 / 60%), 19px -19px 0 0 rgb(0 0 0 / 80%),
        27px 0 0 0 ${COLORS.GREY_SHD1}, 19px 19px 0 0 rgb(0 0 0 / 5%), 0 27px 0 0 rgb(0 0 0 / 10%),
        -19px 19px 0 0 rgb(0 0 0 / 20%), -27px 0 0 0 rgb(0 0 0 / 30%),
        -19px -19px 0 0 rgb(0 0 0 / 40%);
    }
    50% {
      box-shadow: 0 -27px 0 0 rgb(0 0 0 / 40%), 19px -19px 0 0 rgb(0 0 0 / 60%),
        27px 0 0 0 rgb(0 0 0 / 80%), 19px 19px 0 0 ${COLORS.GREY_SHD1}, 0 27px 0 0 rgb(0 0 0 / 5%),
        -19px 19px 0 0 rgb(0 0 0 / 10%), -27px 0 0 0 rgb(0 0 0 / 20%),
        -19px -19px 0 0 rgb(0 0 0 / 30%);
    }
    62.5% {
      box-shadow: 0 -27px 0 0 rgb(0 0 0 / 30%), 19px -19px 0 0 rgb(0 0 0 / 40%),
        27px 0 0 0 rgb(0 0 0 / 60%), 19px 19px 0 0 rgb(0 0 0 / 80%), 0 27px 0 0 ${COLORS.GREY_SHD1},
        -19px 19px 0 0 rgb(0 0 0 / 5%), -27px 0 0 0 rgb(0 0 0 / 10%),
        -19px -19px 0 0 rgb(0 0 0 / 20%);
    }
    75% {
      box-shadow: 0 -27px 0 0 rgb(0 0 0 / 20%), 19px -19px 0 0 rgb(0 0 0 / 30%),
        27px 0 0 0 rgb(0 0 0 / 40%), 19px 19px 0 0 rgb(0 0 0 / 60%), 0 27px 0 0 rgb(0 0 0 / 80%),
        -19px 19px 0 0 ${COLORS.GREY_SHD1}, -27px 0 0 0 rgb(0 0 0 / 5%),
        -19px -19px 0 0 rgb(0 0 0 / 10%);
    }
    87.5% {
      box-shadow: 0 -27px 0 0 rgb(0 0 0 / 10%), 19px -19px 0 0 rgb(0 0 0 / 20%),
        27px 0 0 0 rgb(0 0 0 / 30%), 19px 19px 0 0 rgb(0 0 0 / 40%), 0 27px 0 0 rgb(0 0 0 / 60%),
        -19px 19px 0 0 rgb(0 0 0 / 80%), -27px 0 0 0 ${COLORS.GREY_SHD1},
        -19px -19px 0 0 rgb(0 0 0 / 5%);
    }
    100% {
      box-shadow: 0 -27px 0 0 rgb(0 0 0 / 5%), 19px -19px 0 0 rgb(0 0 0 / 10%),
        27px 0 0 0 rgb(0 0 0 / 20%), 19px 19px 0 0 rgb(0 0 0 / 30%), 0 27px 0 0 rgb(0 0 0 / 40%),
        -19px 19px 0 0 rgb(0 0 0 / 60%), -27px 0 0 0 rgb(0 0 0 / 80%),
        -19px -19px 0 0 ${COLORS.GREY_SHD1};
    }
  }
`;
