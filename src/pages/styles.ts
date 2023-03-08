import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  z-index: 0;

  width: 100%;
  height: 100vh;
  background: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;

  > header {
    padding: 12px 0;

    width: 100%;
    background: #297373;

    display: flex;
    justify-content: center;

    > h1 {
      color: #f1e4f3;
      font: 400 30px 'Pacifico', cursive;
    }
  }

  > main {
    padding: 75px 0;

    width: calc(100% - 90px);
    max-width: 1200px;

    display: grid;
    grid-template-columns: repeat(auto-fill, 240px);
    justify-content: center;
    gap: 20px;

    @media screen and (max-width: 600px) {
      width: calc(100% - 60px);

      grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 400px) {
      width: calc(100% - 30px);

      grid-template-columns: min(240px, 100%);
    }

    > .header {
      margin: 0 0 25px;
      grid-column-start: 1;
      grid-column-end: -1;

      display: flex;
      align-items: center;
      justify-content: space-between;

      gap: 30px;

      > h2 {
        color: #297373;
        font-size: 1.45rem;
        font-weight: 500;
      }
    }
  }
`;

export const CreateBtn = styled.button`
  padding: 5px;

  flex: 1;
  max-width: 120px;
  background: ${p => p.theme.colors.primary};
  border-radius: 10px;

  color: ${p => p.theme.colors.light};
  font-size: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;
