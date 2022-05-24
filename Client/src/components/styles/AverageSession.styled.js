import styled from "styled-components";

export const StyledAverageSession = styled.section`
  &.average-session {
    background: ${({ theme }) => theme.current.colors.red};
    border-radius: 5px;
    position: relative;
    font-size: 11px;
    height: 240px;

    .average-session--label {
      position: absolute;
      top: 1rem;
      left: 1rem;
      color: ${({ theme }) => theme.current.colors.white};
      opacity: 0.7;
      width: 66%;
      font-size: 12px;
    }

    .recharts-area-area {
    }
  }
`;
