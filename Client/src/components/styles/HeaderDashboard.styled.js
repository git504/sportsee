import styled from "styled-components";

export const StyledHeaderDashboard = styled.div`
  &.dashboardHeader {
    .dashboardHeader__title {
      font-size: 48px;
      font-weight: inherit;
    }

    .dashboardHeader__name {
      color: ${({ theme }) => theme.current.colors.secondary};
    }

    .dashboardHeader__text {
      margin-top: 30px;
      font-size: 18px;
      font-weight: 400;
    }
  }
`;
