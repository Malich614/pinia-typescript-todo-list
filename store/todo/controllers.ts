
import type { ITodoItem, IActions } from './models'

export interface ITodo extends ITodoItem {
  create(text: string): ITodoItem
}

export class Todo implements ITodoItem {
  public id: number;
  public text: string;
  public complete: boolean;
  public actions: IActions;

  constructor () {
    this.id = Date.now()
    this.text = ''
    this.complete = false
    this.actions = {
      delete: false,
      edit: false,
    }
  }

  create (text: string): ITodoItem {
    this.text = text;
    return this;
  }
}
