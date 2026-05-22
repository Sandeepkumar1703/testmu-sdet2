import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { DashboardPage } from '../../pages/DashboardPage';
import users from '../../test-data/users.json';

test.describe('UI - Login Tests', () => {

  test('TC01 - Valid login should reach dashboard', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.goto();
    await loginPage.login(users.validUser.username, users.validUser.password);

    expect(await dashboardPage.isOnDashboard()).toBeTruthy();
    expect(await dashboardPage.getTitle()).toBe('Products');
  });

  test('TC02 - Invalid login should show error', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(users.invalidUser.username, users.invalidUser.password);

    const error = await loginPage.getErrorMessage();
    expect(error).toContain('Username and password do not match');
  });

  test('TC03 - Locked user should see locked error', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('locked_out_user', 'secret_sauce');

    const error = await loginPage.getErrorMessage();
    expect(error).toContain('locked out');
  });

  test('TC04 - Dashboard should show products after login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.goto();
    await loginPage.login(users.validUser.username, users.validUser.password);

    const count = await dashboardPage.getProductCount();
    expect(count).toBeGreaterThan(0);
  });

  test('TC05 - Logout should return to login page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.goto();
    await loginPage.login(users.validUser.username, users.validUser.password);
    await dashboardPage.logout();

    expect(page.url()).not.toContain('inventory');
  });

});