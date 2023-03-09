import styled from 'styled-components';

export const Container = styled.main`
  padding: 75px 0 40px;

  flex: 1;
  width: calc(100% - 90px);
  max-width: 900px;

  > .header {
    display: flex;
    align-items: center;
    gap: 10px;

    > h2 {
      flex: 1;

      font-size: 1.45rem;
      font-weight: 500;
    }

    > .action {
      padding: 10px;
      background: ${p => p.theme.colors.background};
      border-radius: 10px;

      display: flex;
      align-items: center;
      justify-content: center;

      color: ${p => p.theme.colors.primary};
      font-size: 25px;

      cursor: pointer;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }

  > .description {
    margin: 25px 0;

    font-size: 1rem;
  }
`;

export const AddBtn = styled.button`
  padding: 10px;

  width: 100%;
  background: ${p => p.theme.colors.gray};
  border-radius: 10px;

  display: flex;
  align-items: center;
  gap: 15px;

  color: ${p => p.theme.colors.light};
  font-size: 1rem;

  cursor: pointer;

  transition: filter 0.2s;

  > .more {
    width: 30px;
    height: 30px;
    background: ${p => p.theme.colors.primary};
    border-radius: 12px;

    font-size: 25px;
  }

  &:hover {
    filter: brightness(0.9);
  }
`;
