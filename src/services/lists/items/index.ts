import axios from 'axios';
import { lists } from '..';

export const items = axios.create({
  ...lists.defaults,
  baseURL: `${lists.defaults.baseURL}/items`,
});

export type ItemShortData = {
  description: string;
};
