import { api } from '~/services/api';
import { ItemParams, serializers } from '~/services/serializers';

export const createItem = async (listId: number, data: ItemParams) => {
  const response = await api.post(`/lists/${listId}/items`, data);

  return serializers.item(response.data);
};

export const updateItem = async (
  listId: number,
  id: number,
  data: Partial<ItemParams>
) => {
  const response = await api.put(`/lists/${listId}/items/${id}`, data);

  return serializers.item(response.data);
};

export const checkItem = async (listId: number, id: number) => {
  await api.put(`/lists/${listId}/items/${id}/check`);
};

export const uncheckItem = async (listId: number, id: number) => {
  await api.put(`/lists/${listId}/items/${id}/uncheck`);
};

export const deleteItem = async (listId: number, id: number) => {
  await api.delete(`/lists/${listId}/items/${id}`);
};
