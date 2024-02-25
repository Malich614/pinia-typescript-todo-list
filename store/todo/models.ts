import type { Ref } from "vue"

export interface IActions {
  delete: boolean;
  edit: boolean;
}

export interface ITodoItem {
  id: number | string;
  text: string;
  complete: boolean;
  actions: IActions;
}

export interface ITodoStore {
  todos: Ref<ITodoItem[]>;
}
