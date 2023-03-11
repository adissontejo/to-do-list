import { useId, useState } from 'react';
import { Checkbox } from '@mui/material';
import { MdDelete, MdEdit } from 'react-icons/md';

import { deleteItem, ItemData } from '~/services';

import { Container } from './styles';
import { ItemModal } from '../ItemModal';

export type ItemProps = {
  id: number;
  listId: number;
  description: string;
  checked: boolean;
  onCheck: (checked: boolean) => void;
  onSave: (item: ItemData) => void;
  onDelete: (id: number) => void;
};

export const Item = ({
  id,
  listId,
  description,
  checked,
  onCheck,
  onSave,
  onDelete,
}: ItemProps) => {
  const checkboxId = useId();

  const [edit, setEdit] = useState(false);

  const onDeleteClick = async () => {
    onDelete(id);

    await deleteItem(listId, id);
  };

  return (
    <Container checked={checked}>
      <Checkbox
        id={checkboxId}
        className="checkbox"
        checked={checked}
        onChange={(e, checked) => onCheck(checked)}
      />
      <div className="description-wrapper">
        <label className="description" htmlFor={checkboxId}>
          {description}
        </label>
      </div>
      <button className="action" onClick={() => setEdit(true)}>
        <MdEdit />
      </button>
      <button className="action" onClick={onDeleteClick}>
        <MdDelete />
      </button>
      <ItemModal
        type="edit"
        id={id}
        listId={listId}
        description={description}
        visible={edit}
        onClose={() => setEdit(false)}
        onSave={onSave}
      />
    </Container>
  );
};
