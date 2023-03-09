import { useState } from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { MdAdd, MdDelete, MdEdit } from 'react-icons/md';

import { ConfirmModal, Item, ItemModal, ListModal } from '~/components';
import {
  checkItem,
  deleteList,
  getList,
  ItemData,
  ListDataWithItems,
  uncheckItem,
} from '~/services';

import { AddBtn, Container } from './styles';

type ListProps = {
  list: ListDataWithItems;
};

const List = ({ list }: ListProps) => {
  const router = useRouter();

  const [data, setData] = useState(list);
  const [edit, setEdit] = useState(false);
  const [erase, setErase] = useState(false);
  const [create, setCreate] = useState(false);

  const onDelete = async () => {
    await deleteList(data.id);

    router.replace('/');
  };

  const onItemCheck = async (id: number, checked: boolean) => {
    setData({
      ...data,
      items: data.items.map(item => {
        if (item.id === id) {
          return { ...item, checked };
        }

        return item;
      }),
    });

    if (checked) {
      await checkItem(data.id, id);
    } else {
      await uncheckItem(data.id, id);
    }
  };

  const onItemCreate = (item: ItemData) => {
    setData({
      ...data,
      items: [...data.items, item],
    });
  };

  const onItemUpdate = (newItem: ItemData) => {
    setData({
      ...data,
      items: data.items.map(item => {
        if (item.id === newItem.id) {
          return newItem;
        }

        return item;
      }),
    });
  };

  const onItemDelete = (id: number) => {
    setData({
      ...data,
      items: data.items.filter(item => item.id !== id),
    });
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
      <AddBtn onClick={() => setCreate(true)}>
        <div className="more">
          <MdAdd />
        </div>{' '}
        Adicionar tarefa
      </AddBtn>
      {data.items.map(item => (
        <Item
          key={item.id}
          id={item.id}
          listId={data.id}
          description={item.description}
          checked={item.checked}
          onCheck={checked => onItemCheck(item.id, checked)}
          onSave={onItemUpdate}
          onDelete={() => onItemDelete(item.id)}
        />
      ))}
      <ListModal
        visible={edit}
        onClose={() => setEdit(false)}
        type="edit"
        id={list.id}
        title={data.title}
        description={data.description}
        onSave={newList => setData({ ...data, ...newList })}
      />
      <ConfirmModal
        title="Excluir lista"
        content={`Você deseja mesmo excluir a lista ${data.title}?`}
        visible={erase}
        onClose={() => setErase(false)}
        onConfirm={onDelete}
      />
      <ItemModal
        visible={create}
        onClose={() => setCreate(false)}
        listId={data.id}
        type="create"
        onSave={onItemCreate}
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
