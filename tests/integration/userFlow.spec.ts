import { test, expect } from '@playwright/test';
import { ApiHelper } from '../../utils/ApiHelper';

test.describe('Integration - API + UI Flow', () => {

  test('TC01 - Create user via API and validate UI login works together', async ({ request, page }) => {
    const api = new ApiHelper(request);

    // Step 1: Create user via API
    const createResponse = await api.createUser('Sandeep', 'SDET Engineer');
    expect(createResponse.status()).toBe(201);
    const createdUser = await createResponse.json();
    expect(createdUser).toHaveProperty('id');
    expect(createdUser.title).toBe('Sandeep');

    // Step 2: Fetch users list via API - verify structure
    const listResponse = await api.getUsers();
    expect(listResponse.status()).toBe(200);
    const users = await listResponse.json();
    expect(users.length).toBeGreaterThan(0);

    // Step 3: UI is still functional (system integrity check)
    await page.goto('https://www.saucedemo.com');
    await page.fill('[data-test="username"]', 'standard_user');
    await page.fill('[data-test="password"]', 'secret_sauce');
    await page.click('[data-test="login-button"]');
    expect(page.url()).toContain('inventory');
  });

});