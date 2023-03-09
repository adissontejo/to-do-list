import { Modal, ModalProps } from '../Modal';
import { Container } from './styles';

export type ConfirmModalProps = ModalProps & {
  content: string;
  confirmText?: string;
  denyText?: string;
  onConfirm?: () => void;
  onDeny?: () => void;
};

export const ConfirmModal = ({
  content,
  confirmText = 'Confirmar',
  denyText = 'Cancelar',
  onConfirm,
  onDeny,
  onClose,
  ...rest
}: ConfirmModalProps) => {
  const onDenyClick = () => {
    if (onDeny) {
      onDeny();
    }

    onClose();
  };

  const onConfirmClick = () => {
    if (onConfirm) {
      onConfirm();
    }

    onClose();
  };

  return (
    <Modal onClose={onClose} {...rest}>
      <Container>
        <p className="content">{content}</p>
        <div className="buttons">
          <button className="deny" onClick={onDenyClick}>
            {denyText}
          </button>
          <button className="confirm" onClick={onConfirmClick}>
            {confirmText}
          </button>
        </div>
      </Container>
    </Modal>
  );
};
