import styled from "styled-components";

export const StyledScore = styled.section`
  &.score {
    width: 31%;
    height: 43%;
    position: relative;
    background: ${({ theme }) => theme.current.colors.grey};
    border-radius: 5px;

    .score__legend {
      font-size: 15px;
      color: ${({ theme }) => theme.current.colors.primary};
    }

    p {
      width: 96px;
    }

    .score__label {
      position: absolute;
      top: 53%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      color: ${({ theme }) => theme.current.colors.primary};
    }
    .score__number {
      font-weight: 700;
      font-size: clamp(16px, 1.806vw, 26px);
    }

    .score__text {
      font-size: clamp(14px, 1.111vw, 16px);
      color: ${({ theme }) => theme.current.colors.darkgrey};
      line-height: 26px;
    }
  }
`;
