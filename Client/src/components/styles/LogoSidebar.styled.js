import styled from "styled-components";

export const StyledLogoSidebar = styled.li`
  &.logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    aspect-ratio: 1/1;
    background: ${({ theme }) => theme.current.colors.white};
    border-radius: 6px;
    cursor: pointer;
  }
`;
