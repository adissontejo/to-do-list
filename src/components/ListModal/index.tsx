import { useId } from 'react';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';

import { createList, ListData, updateList } from '~/services';

import { Container } from './styles';
import { Modal, ModalProps } from '../Modal';

type DataProps =
  | {
      type: 'create';
      id?: undefined;
      title?: undefined;
      description?: undefined;
    }
  | {
      type: 'edit';
      id: number;
      title: string;
      description: string | null;
    };

export type ListModalProps = Omit<ModalProps, 'title'> &
  DataProps & {
    onSave?: (list: ListData) => void;
  };

export const ListModal = ({
  type,
  id,
  title = '',
  description = '',
  onSave,
  onClose,
  ...rest
}: ListModalProps) => {
  type Fields = {
    title: string;
    description: string;
  };

  const router = useRouter();

  const { register, handleSubmit } = useForm<Fields>({
    values: {
      title,
      description,
    },
  });

  const nameId = useId();
  const descriptionId = useId();

  const onSubmit: SubmitHandler<Fields> = async data => {
    if (type === 'create') {
      const list = await createList(data);

      if (onSave) {
        onSave(list);
      }

      router.push(`/${list.id}`);
    } else {
      const list = await updateList(id, data);

      if (onSave) {
        onSave(list);
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
        <div className="input-group">
          <label htmlFor={nameId}>Nome</label>
          <input
            id={nameId}
            placeholder="Adicione um nome"
            maxLength={20}
            {...register('title', { required: true })}
          />
        </div>
        <div className="input-group">
          <label htmlFor={descriptionId}>Descrição</label>
          <textarea
            id={descriptionId}
            placeholder="Adicione uma descrição (opcional)"
            maxLength={140}
            {...register('description')}
          />
        </div>
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
