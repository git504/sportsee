import styled from "styled-components";

export const StyledActivity = styled.div`
  &.activity {
    width: 100%;
    height: 52%;
    max-height: 320px;
    padding: 24px 26px 20px 32px;
    background: ${({ theme }) => theme.current.colors.grey};
    border-radius: 5px;

    .activity__title {
      font-size: 15px;
      padding-bottom: 30px;
    }

    .recharts-legend-item {
      margin-left: 30px;
    }
    .recharts-legend-item-text,
    .recharts-layer {
      font-size: 15px;
      margin-left: 5px;
      color: ${({ theme }) => theme.current.colors.darkgrey} !important;
    }
    .recharts-surface {
      margin-right: 10px !important;
    }

    .tooltip {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 63px;
      width: 39px;
      background: ${({ theme }) => theme.current.colors.secondary};
      color: ${({ theme }) => theme.current.colors.white};
      font-size: 7px;
    }

    p {
      text-align: center;
    }
  }
`;
