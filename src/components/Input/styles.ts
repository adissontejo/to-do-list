import styled from 'styled-components';

export type ContainerProps = {
  error: boolean;
};

export const Container = styled.div<ContainerProps>`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 5px;

  > input {
    padding: 12px;

    width: 100%;
    border: none;
    outline: ${p => (p.error ? '1px solid red' : 'none')};
    background: ${p => p.theme.colors.accent};
    border-radius: 10px;

    color: ${p => p.theme.colors.darkGray};
    font-size: 1rem;

    transition: outline-color 0.2s;

    &::placeholder {
      color: ${p => p.theme.colors.gray};
    }
  }

  > .error {
    margin: 0 0 0 10px;

    display: flex;
    align-items: flex-end;
    overflow: hidden;

    color: red;
    font-size: 0.85rem;
  }
`;
