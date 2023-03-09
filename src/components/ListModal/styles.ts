import styled from 'styled-components';

export const Form = styled.form`
  margin: 20px 0 0;

  display: flex;
  flex-direction: column;
  gap: 20px;

  > .input-group {
    display: flex;
    flex-direction: column;
    gap: 10px;

    > label {
      color: black;
      font-size: 1.1rem;
    }

    > input,
    textarea {
      padding: 8px 12px;

      background: #e7e7e7;
      border: none;
      outline: none;
      border-radius: 10px;

      color: #222222;
      font-size: 1rem;

      &::placeholder {
        color: ${p => p.theme.colors.gray};
      }
    }

    > textarea {
      resize: none;
      height: 100px;
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

      color: #222222;
    }

    > .submit {
      background: ${p => p.theme.colors.primary};

      color: ${p => p.theme.colors.light};
    }
  }
`;
