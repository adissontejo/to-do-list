import { useState } from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { MdAdd, MdDelete, MdEdit } from 'react-icons/md';

import { ConfirmModal, ListModal } from '~/components';
import { deleteList, getList, ListDetailedData } from '~/services';

import { AddBtn, Container } from './styles';

type ListProps = {
  list: ListDetailedData;
};

const List = ({ list }: ListProps) => {
  const router = useRouter();

  const [data, setData] = useState(list);
  const [edit, setEdit] = useState(false);
  const [erase, setErase] = useState(false);

  const onDelete = async () => {
    await deleteList(data.id);

    router.replace('/');
  };

  return (
    <Container>
      <div className="header">
        <h2>{data.title}</h2>
        <button className="action" onClick={() => setEdit(true)}>
          <MdEdit />
        </button>
        <button className="action" onClick={() => setErase(true)}>
          <MdDelete />
        </button>
      </div>
      <p className="description">{data.description}</p>
      <AddBtn>
        <div className="more">
          <MdAdd />
        </div>{' '}
        Adicionar tarefa
      </AddBtn>
      <ListModal
        visible={edit}
        onClose={() => setEdit(false)}
        type="edit"
        id={list.id}
        title={data.title}
        description={data.description}
        onSave={setData}
      />
      <ConfirmModal
        title="Excluir lista"
        content={`Você deseja mesmo excluir a lista ${data.title}?`}
        visible={erase}
        onClose={() => setErase(false)}
        onConfirm={onDelete}
      />
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps<ListProps> = async ({
  params,
}) => {
  const list = await getList(Number(params.listId));

  return {
    props: {
      list,
    },
  };
};

export default List;
