import styled from 'styled-components';

export const Container = styled.div`
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
    padding: 75px 0 0;

    width: 80vw;
    max-width: 1440px;

    display: grid;
    grid-template-columns: repeat(auto-fill, 240px);
    justify-content: center;
    gap: 20px;

    > h2 {
      margin: 0 0 25px;
      grid-column-start: 1;
      grid-column-end: -1;

      color: #297373;
      font-size: 23px;
      font-weight: 500;
    }
  }
`;

export const Lists = styled.div``;
