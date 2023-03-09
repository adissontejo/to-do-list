import styled from 'styled-components';

export const Container = styled.form`
  margin: 20px 0 0;

  display: flex;
  flex-direction: column;
  gap: 20px;

  > textarea {
    padding: 8px 12px;

    height: 100px;
    resize: none;
    background: ${p => p.theme.colors.accent};
    border: none;
    outline: none;
    border-radius: 10px;

    color: ${p => p.theme.colors.darkGray};
    font-size: 1rem;

    &::placeholder {
      color: ${p => p.theme.colors.gray};
    }
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

    > .cancel {
      background: ${p => p.theme.colors.background};

      color: ${p => p.theme.colors.darkGray};
    }

    > .submit {
      background: ${p => p.theme.colors.primary};

      color: ${p => p.theme.colors.background};
    }
  }
`;
