import { useId } from 'react';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';
import { MdClose } from 'react-icons/md';

import { createList } from '~/services';

import { Container, Form, Header } from './styles';

export type CreateListProps = {
  visible: boolean;
  onClose: () => void;
};

export const CreateList = ({ visible, onClose }: CreateListProps) => {
  type Fields = {
    title: string;
    description: string;
  };

  const router = useRouter();

  const { register, handleSubmit } = useForm<Fields>();

  const nameId = useId();
  const descriptionId = useId();

  const onSubmit: SubmitHandler<Fields> = async data => {
    const list = await createList(data);

    router.push(`/${list.id}`);
  };

  return (
    <Container visible={visible}>
      <div className="body">
        <Header>
          <h3>Nova lista</h3>
          <button className="close" onClick={onClose}>
            <MdClose />
          </button>
        </Header>
        <Form onSubmit={handleSubmit(onSubmit)}>
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
              Criar
            </button>
          </div>
        </Form>
      </div>
    </Container>
  );
};
