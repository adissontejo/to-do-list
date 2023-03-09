export type ListParams = {
  title: string;
  description?: string;
};

export type ListData = {
  id: number;
  title: string;
  description: string | null;
  totalItems: number;
  doneItems: number;
  createdAt: string;
  updatedAt: string;
};

export type ListDataWithItems = ListData & {
  items: ItemData[];
};

export type ItemParams = {
  description: string;
};

export type ItemData = {
  id: number;
  description: string;
  checked: boolean;
  createdAt: string;
  updatedAt: string;
};

export type ItemDataWithList = ItemData & {
  list: ListData;
};

export const serializers = new (class {
  list(data: any) {
    return {
      id: data.id,
      title: data.title,
      description: data.description,
      createdAt: data.created_at,
      updatedAt: data.updated_at,
    } as ListData;
  }

  item(data: any) {
    return {
      id: data.id,
      description: data.description,
      checked: data.checked,
      createdAt: data.created_at,
      updatedAt: data.updated_at,
    } as ItemData;
  }

  listWithItems(data: any) {
    return {
      ...this.list(data),
      items: data.items.map(this.item),
    } as ListDataWithItems;
  }

  itemWithList(data: any) {
    return {
      ...this.item(data),
      list: this.list(data.list),
    };
  }
})();
