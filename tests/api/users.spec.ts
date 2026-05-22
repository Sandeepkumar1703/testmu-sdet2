import { test, expect } from '@playwright/test';
import { ApiHelper } from '../../utils/ApiHelper';

test.describe('API - User Endpoint Tests', () => {

  test('TC01 - GET users should return 200', async ({ request }) => {
    const api = new ApiHelper(request);
    const start = Date.now();
    const response = await api.getUsers();

    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(Array.isArray(body)).toBeTruthy();
    expect(body.length).toBeGreaterThan(0);
    expect(Date.now() - start).toBeLessThan(5000);
  });

  test('TC02 - POST create user should return 201', async ({ request }) => {
    const api = new ApiHelper(request);
    const response = await api.createUser('Sandeep', 'SDET Engineer');

    expect(response.status()).toBe(201);
    const body = await response.json();
    expect(body).toHaveProperty('id');
    expect(body.title).toBe('Sandeep');
  });

  test('TC03 - PUT update user should return 200', async ({ request }) => {
    const api = new ApiHelper(request);
    const response = await api.updateUser(1, 'Updated Name', 'Senior SDET');

    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.title).toBe('Updated Name');
  });

  test('TC04 - DELETE user should return 200', async ({ request }) => {
    const api = new ApiHelper(request);
    const response = await api.deleteUser(1);

    expect(response.status()).toBe(200);
  });

  test('TC05 - GET single user should return 200 with correct fields', async ({ request }) => {
    const api = new ApiHelper(request);
    const response = await api.getUsers();

    expect(response.status()).toBe(200);
    const body = await response.json();
    const firstUser = body[0];
    expect(firstUser).toHaveProperty('id');
    expect(firstUser).toHaveProperty('name');
    expect(firstUser).toHaveProperty('email');
  });

});