import styled from 'styled-components';

export const Container = styled.button`
  padding: 40px 20px 20px;

  width: 100%;
  border-radius: 15px;
  background: ${p => p.theme.colors.primary};

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;

  color: ${p => p.theme.colors.background};

  cursor: pointer;

  transition: filter 0.2s;

  > h3 {
    margin: 0 0 15px;

    width: fit-content;

    font-weight: 500;
    font-size: 1.37rem;
  }

  &:hover {
    filter: brightness(0.9);
  }
`;

export const Footer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > .done {
    opacity: 0.85;
    font-size: 1rem;
  }

  > svg {
    width: 30px;
    height: 30px;

    transform: rotateZ(-90deg);

    @media screen and (max-width: 600px) {
      width: 20px;
      height: 20px;
    }

    > .total {
      stroke: ${p => p.theme.colors.gray};
    }

    > .progress {
      stroke: ${p => p.theme.colors.background};
    }
  }
`;
