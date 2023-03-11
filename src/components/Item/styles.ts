import styled from 'styled-components';

export type ContainerProps = {
  checked: boolean;
};

export const Container = styled.div<ContainerProps>`
  padding: 5px 10px 0 0;

  width: 100%;

  display: flex;

  > .checkbox {
    margin: 5px;
    width: 40px;
    height: 40px;

    @media screen and (max-width: 600px) {
      margin: 10px;
      width: 30px;
      height: 30px;
    }
  }

  > .description-wrapper {
    padding: 12px 10px;

    flex: 1;

    @media screen and (max-width: 600px) {
      padding: 17px 10px;
    }

    > .description {
      font-size: 1rem;
      text-decoration: ${p => (p.checked ? 'line-through' : 'none')};
    }
  }

  > .action {
    align-self: center;

    width: 40px;
    height: 40px;
    background: ${p => p.theme.colors.background};
    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 18px;

    cursor: pointer;

    transition: filter 0.2s;

    @media screen and (max-width: 600px) {
      width: 30px;
      height: 30px;

      font-size: 16px;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
