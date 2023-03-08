import axios from 'axios';

import { api } from '../api';

const lists = axios.create({
  ...api.defaults,
  baseURL: `${api.defaults.baseURL}/lists`,
});

export type ListParams = {
  title: string;
  description?: string;
};

export type ListShortData = {
  id: number;
  title: string;
  description: string | null;
  doneItems: number;
  totalItems: number;
  createdAt: string;
  updatedAt: string;
};

export type ListDetailedData = ListShortData & {};

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
  const response = await lists.post('/', data);

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
  const response = await lists.put(`/${id}`, data);

  return detailed(response.data);
};

export const deleteList = async (id: number) => {
  await lists.delete(`/${id}`);
};
