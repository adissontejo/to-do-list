import styled from 'styled-components';

export type ContainerProps = {
  visible: boolean;
};

export const Container = styled.div<ContainerProps>`
  position: fixed;
  z-index: ${p => (p.visible ? 1 : 0)};

  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, ${p => (p.visible ? 0.25 : 0)});

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background 0.3s, z-index 0.3s;

  > .body {
    position: relative;
    top: ${p => (p.visible ? 0 : '50%')};
    padding: 15px 20px;

    width: calc(100% - 60px);
    max-width: 600px;
    background: ${p => p.theme.colors.background};
    border-radius: 10px;

    transform: translateY(${p => (p.visible ? 0 : '50%')});

    transition: top 0.3s, transform 0.3s;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > h3 {
    color: ${p => p.theme.colors.primary};
    font-weight: 500;
    font-size: 1.25rem;
  }

  > .close {
    padding: 2px;

    background: ${p => p.theme.colors.background};
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${p => p.theme.colors.primary};
    font-size: 22px;

    cursor: pointer;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

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
