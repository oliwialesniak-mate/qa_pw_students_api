// helpers/api/TodosAPI.js
import { BaseAPI } from './BaseAPI';

export class TodosAPI extends BaseAPI {
  constructor(request) {
    super(request, '/todos');
  }

  async getAllTodos() {
    return this.get('');
  }

  async getTodosByUser(userId) {
    return this.get(`?userId=${userId}`);
  }

  async getCompletedTodos(userId) {
    return this.get(`?userId=${userId}&completed=true`);
  }

  async getNotCompletedTodos(userId) {
    return this.get(`?userId=${userId}&completed=false`);
  }
}
