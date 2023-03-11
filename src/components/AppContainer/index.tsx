import { useState } from 'react';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import { deleteCookie } from 'cookies-next';
import { MdArrowDropDown, MdLogout, MdPerson } from 'react-icons/md';

import { Container, Dropdown, MenuItem } from './styles';

export type AppContainerProps = {
  header?: boolean;
  children?: JSX.Element;
};

export const AppContainer = ({
  children,
  header = true,
}: AppContainerProps) => {
  const router = useRouter();

  const [menu, setMenu] = useState(false);

  const onExit = () => {
    deleteCookie('auth-token');

    router.reload();
  };

  return (
    <Container>
      {header && (
        <header>
          <h1>Planner</h1>
          <Dropdown>
            <button className="user" onClick={() => setMenu(prev => !prev)}>
              <MdPerson />
              <motion.div
                className="arrow-wrapper"
                animate={{ rotateZ: menu ? 180 : 0 }}
              >
                <MdArrowDropDown />
              </motion.div>
            </button>
            <AnimatePresence>
              {menu && (
                <motion.menu
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  exit={{ height: 0 }}
                >
                  {/*
                    <MenuItem>
                      <MdEdit className="icon" /> Editar
                    </MenuItem>
                  */}
                  <MenuItem onClick={onExit}>
                    <MdLogout className="icon" /> Sair
                  </MenuItem>
                </motion.menu>
              )}
            </AnimatePresence>
          </Dropdown>
        </header>
      )}
      {children}
    </Container>
  );
};
