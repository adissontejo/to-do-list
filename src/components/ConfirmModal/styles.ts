import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > .content {
    margin: 30px 0 25px;

    font-size: 1rem;
  }

  > .buttons {
    margin: 20px 0 0;

    width: 100%;

    display: flex;
    justify-content: flex-end;
    gap: 14px;

    > button {
      padding: 12px 0;

      width: min(calc(50% - 7px), 100px);
      border-radius: 10px;

      font-size: 1rem;

      cursor: pointer;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }

    > .deny {
      background: ${p => p.theme.colors.background};

      color: #222222;
    }

    > .confirm {
      background: ${p => p.theme.colors.primary};

      color: ${p => p.theme.colors.background};
    }
  }
`;
