export interface ITodoItem {
  id: number | string;
  text: string;
  complete: boolean;
}

export interface ITodoStore {
  todos: ITodoItem[];
}
