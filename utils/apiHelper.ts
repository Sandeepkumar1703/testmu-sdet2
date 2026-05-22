import { APIRequestContext } from '@playwright/test';

const API_BASE = 'https://jsonplaceholder.typicode.com';

export class ApiHelper {
  private request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async getUsers() {
    return await this.request.get(`${API_BASE}/users`);
  }

  async createUser(name: string, job: string) {
    return await this.request.post(`${API_BASE}/posts`, {
      data: { title: name, body: job, userId: 1 },
    });
  }

  async updateUser(id: number, name: string, job: string) {
    return await this.request.put(`${API_BASE}/posts/${id}`, {
      data: { id, title: name, body: job, userId: 1 },
    });
  }

  async deleteUser(id: number) {
    return await this.request.delete(`${API_BASE}/posts/${id}`);
  }
}