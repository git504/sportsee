import styled from "styled-components";

export const StyledAverageSession = styled.div`
  &.average-session {
    background: ${({ theme }) => theme.current.colors.red};
    border-radius: 5px;
    position: relative;
    font-size: 10px;
    height : 240;

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
