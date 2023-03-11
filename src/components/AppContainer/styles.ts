import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${p => p.theme.colors.background};

  display: flex;
  flex-direction: column;
  align-items: center;

  > header {
    height: 60px;
    width: 100%;
    background: #297373;

    display: flex;
    align-items: center;

    > h1 {
      margin: 0 0 0 90px;

      flex: 1;

      color: #f1e4f3;
      text-align: center;
      font: 400 30px 'Pacifico', cursive;

      @media screen and (max-width: 600px) {
        margin: 0 0 0 65px;
      }
    }
  }
`;

export const Dropdown = styled.div`
  position: relative;
  margin: 0 20px 0 0;

  @media screen and (max-width: 600px) {
    margin: 0 10px 0 0;
  }

  > .user {
    width: 70px;
    height: 40px;
    background: ${p => p.theme.colors.primary};
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${p => p.theme.colors.background};
    font-size: 26px;

    cursor: pointer;

    transition: filter 0.2s;

    @media screen and (max-width: 600px) {
      width: 55px;
      height: 32px;
    }

    > .arrow-wrapper {
      display: flex;
      align-items: center;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }

  > menu {
    position: absolute;
    right: 0;
    top: 50px;

    width: 200px;
    background: ${p => p.theme.colors.primary};
    border-radius: 0 0 10px 10px;

    overflow: hidden;

    @media screen and (max-width: 600px) {
      top: 46px;

      width: 100px;
    }
  }
`;

export const MenuItem = styled.button`
  padding: 12px;

  width: 100%;
  background: ${p => p.theme.colors.primary};

  display: flex;
  align-items: center;
  gap: 10px;

  color: ${p => p.theme.colors.background};
  font-size: 1rem;

  cursor: pointer;

  transition: filter 0.2s;

  > .icon {
    font-size: 1.5rem;
  }

  &:hover {
    filter: brightness(0.9);
  }
`;
