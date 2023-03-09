import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.25);

  display: flex;
  align-items: center;
  justify-content: center;

  > .body {
    position: relative;
    padding: 15px 20px;

    width: calc(100% - 60px);
    max-width: 600px;
    background: ${p => p.theme.colors.background};
    border-radius: 10px;
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
