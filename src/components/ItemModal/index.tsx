import { SubmitHandler, useForm } from 'react-hook-form';

import { createItem, ItemData, updateItem } from '~/services';

import { Container } from './styles';
import { Modal, ModalProps } from '../Modal';

type DataProps =
  | {
      type: 'create';
      id?: undefined;
      description?: undefined;
    }
  | {
      type: 'edit';
      id: number;
      description: string | null;
    };

export type ItemModalProps = Omit<ModalProps, 'title'> &
  DataProps & {
    listId: number;
    onSave?: (item: ItemData) => void;
  };

export const ItemModal = ({
  type,
  id,
  listId,
  description = '',
  onSave,
  onClose,
  ...rest
}: ItemModalProps) => {
  type Fields = {
    description: string;
  };

  const { register, handleSubmit } = useForm<Fields>({
    values: {
      description,
    },
  });

  const onSubmit: SubmitHandler<Fields> = async data => {
    if (type === 'create') {
      const item = await createItem(listId, data);

      if (onSave) {
        onSave(item);
      }

      onClose();
    } else {
      const item = await updateItem(listId, id, data);

      if (onSave) {
        onSave(item);
      }

      onClose();
    }
  };

  return (
    <Modal
      {...rest}
      title={type === 'create' ? 'Nova lista' : 'Editar lista'}
      onClose={onClose}
    >
      <Container onSubmit={handleSubmit(onSubmit)}>
        <textarea
          placeholder="Descreva a nova tarefa"
          maxLength={140}
          {...register('description', { required: true })}
        />
        <div className="buttons">
          <button className="cancel">Cancelar</button>
          <button className="submit" type="submit">
            {type === 'create' ? 'Criar' : 'Salvar'}
          </button>
        </div>
      </Container>
    </Modal>
  );
};
