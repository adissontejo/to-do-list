import { MdClose } from 'react-icons/md';
import { AnimatePresence, motion } from 'framer-motion';

import { Container, Header } from './styles';

export type ModalProps = {
  title: string;
  visible: boolean;
  onClose: () => void;
  children?: JSX.Element;
};

export const Modal = ({ title, visible, onClose, children }: ModalProps) => {
  return (
    <AnimatePresence>
      {visible && (
        <Container
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="body"
            initial={{ top: '50%', translateY: '50%' }}
            animate={{ top: 0, translateY: 0 }}
            exit={{ top: '50%', translateY: '50%' }}
            transition={{ duration: 0.3 }}
          >
            <Header>
              <h3>{title}</h3>
              <button className="close" onClick={onClose}>
                <MdClose />
              </button>
            </Header>
            {children}
          </motion.div>
        </Container>
      )}
    </AnimatePresence>
  );
};
