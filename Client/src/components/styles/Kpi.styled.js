import styled from "styled-components";

export const StyledKpi = styled.div`
  &.kpi {
    display: flex;
    width: 100%;
    height: 25%;
    background: ${({ theme }) => theme.current.colors.grey};
    border-radius: 5px;

    .kpi__icon {
      width: 40%;
      display: flex;
      justify-content: end;
      align-items: center;
    }

    .kpi__img {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 60px;
      height: 60px;
      border-radius: 6px;

      &.kpi__img--red {
        background: rgba(255, 0, 0, 0.07);
      }
      &.kpi__img--blue {
        background: rgba(74, 184, 255, 0.1);
      }
      &.kpi__img--yellow {
        background: rgba(249, 206, 35, 0.1);
      }
      &.kpi__img--pink {
        background: rgba(253, 81, 129, 0.1);
      }
    }

    .kpi__text {
      width: 60%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      padding-left: 10%;
    }

    .kpi__value {
      font-size: clamp(12px, 1rem, 20px);
      font-weight: 700;
      color: ${({ theme }) => theme.current.colors.primary};
    }

    .kpi__title {
      font-size: 14px;
      color: ${({ theme }) => theme.current.colors.darkgrey};
    }
  }
`;
