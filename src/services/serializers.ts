export type UserParams = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

export type UserData = {
  id: number;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

export type UserDataWithLists = UserData & {
  lists: ListData[];
};

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

export type ItemData = ItemParams & {
  id: number;
  checked: boolean;
  createdAt: string;
  updatedAt: string;
};

export type ItemDataWithList = ItemData & {
  list: ListData;
};

export const serializers = new (class {
  user(data: any) {
    return {
      id: data.id,
      name: data.name,
      email: data.email,
      createdAt: data.created_at,
      updatedAt: data.updated_at,
    } as UserData;
  }

  userWithLists(data: any) {
    return {
      ...this.user(data),
      lists: data.lists.map(item => this.list(item)),
    } as UserDataWithLists;
  }

  list(data: any) {
    return {
      id: data.id,
      title: data.title,
      description: data.description,
      createdAt: data.created_at,
      updatedAt: data.updated_at,
      doneItems: data.done_items,
      totalItems: data.total_items,
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
