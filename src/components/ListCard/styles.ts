import styled from 'styled-components';

export const Container = styled.button`
  padding: 0 20px 20px;

  width: 100%;
  height: 220px;
  border-radius: 15px;
  background: ${p => p.theme.colors.primary};

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;

  color: ${p => p.theme.colors.light};

  cursor: pointer;

  > h3 {
    margin: 0 0 15px;

    width: fit-content;

    font-weight: 500;
    font-size: 27px;
  }
`;

export const Footer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > .done {
    opacity: 0.85;
    font-size: 18px;
  }

  > svg {
    transform: rotateZ(-90deg);

    > .total {
      stroke: ${p => p.theme.colors.gray};
    }

    > .progress {
      stroke: ${p => p.theme.colors.light};
    }
  }
`;
