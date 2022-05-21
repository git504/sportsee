import styled from "styled-components";

export const StyledHome = styled.div`
  &.home {
    padding-left: 117px;

    .home__links {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 33%;
      margin: auto;
      padding-top: 50px;
    }

    .home__links--link {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 87px;
      border-radius: 5px;
      font-size: 24px;
      color: ${({ theme }) => theme.current.colors.primary};
      text-decoration: none;
      box-shadow: 0px 5px 15px #00000049;
      text-align: center;
      padding: 5px;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }
`;
