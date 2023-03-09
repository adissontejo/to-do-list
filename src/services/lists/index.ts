import axios from 'axios';

import { api } from '../api';
import { ItemShortData } from './items';

export const lists = axios.create({
  ...api.defaults,
  baseURL: `${api.defaults.baseURL}/lists`,
});

export type ListParams = {
  title: string;
  description?: string;
};

export type ListShortData = {
  id: number;
  title: string | null;
  description: string | null;
  doneItems: number;
  totalItems: number;
  createdAt: string;
  updatedAt: string;
};

export type ListDetailedData = ListShortData & {
  items: ItemShortData[];
};

const short = (list: any) => {
  return {
    id: list.id,
    title: list.title,
    description: list.description,
    doneItems: list.done_items,
    totalItems: list.total_items,
    createdAt: list.created_at,
    updatedAt: list.updated_at,
  } as ListShortData;
};

const detailed = (list: any) => {
  return {
    ...short(list),
  } as ListDetailedData;
};

export const createList = async (data: ListParams) => {
  const response = await lists.post('/', data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return short(response.data);
};

export const getAllLists = async () => {
  const response = await lists.get('/');

  return response.data.map(short) as ListShortData[];
};

export const getList = async (id: number) => {
  const response = await lists.get(`/${id}`);

  return detailed(response.data);
};

export const updateList = async (id: number, data: ListParams) => {
  const response = await lists.put(`/${id}`, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return detailed(response.data);
};

export const deleteList = async (id: number) => {
  await lists.delete(`/${id}`);
};
