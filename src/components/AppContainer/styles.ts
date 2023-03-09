import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${p => p.theme.colors.background};

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
`;
