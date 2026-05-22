// pages/DashboardPage.ts
import { Page, Locator } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly pageTitle: Locator;
  readonly menuButton: Locator;
  readonly logoutLink: Locator;
  readonly productList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.locator('.title');
    this.menuButton = page.locator('#react-burger-menu-btn');
    this.logoutLink = page.locator('#logout_sidebar_link');
    this.productList = page.locator('.inventory_item');
  }

  async isOnDashboard(): Promise<boolean> {
    return this.page.url().includes('inventory');
  }

  async getTitle(): Promise<string> {
    return await this.pageTitle.innerText();
  }

  async logout() {
    await this.menuButton.click();
    await this.logoutLink.click();
  }

  async getProductCount(): Promise<number> {
    return await this.productList.count();
  }
}