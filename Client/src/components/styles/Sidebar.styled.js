import styled from "styled-components";

export const StyledSidebar = styled.div`
&.sidebar {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    z-index: 1;
    width: 117px;
    min-height: inherit;
    height: 100%;
    background: ${({ theme }) => theme.current.colors.primary};

    .sidebar__icons {
        display: grid;
        row-gap: 20px;
    }

    .sidebar__text {
        position: absolute;
        bottom: 10%;
        width: 100%;
        color: ${({ theme }) => theme.current.colors.white};
        font-size: 12px;
        white-space: nowrap;
        transform: rotate(-90deg);
    }
`;
