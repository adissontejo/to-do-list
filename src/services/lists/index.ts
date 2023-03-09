import { api } from '../api';
import { ListData, ListParams, serializers } from '../serializers';

export const createList = async (data: ListParams) => {
  const response = await api.post('/lists', data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return serializers.list(response.data);
};

export const getAllLists = async () => {
  const response = await api.get('/lists');

  return response.data.map(serializers.list) as ListData[];
};

export const getList = async (id: number) => {
  const response = await api.get(`/lists/${id}`);

  return serializers.listWithItems(response.data);
};

export const updateList = async (id: number, data: Partial<ListParams>) => {
  const response = await api.put(`/lists/${id}`, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return serializers.list(response.data);
};

export const deleteList = async (id: number) => {
  await api.delete(`/lists/${id}`);
};

export * from './items';
