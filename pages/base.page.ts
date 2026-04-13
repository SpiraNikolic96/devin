import { type Page, type Locator } from '@playwright/test';

export class BasePage {
  readonly page: Page;
  readonly navForms: Locator;
  readonly navInteractions: Locator;
  readonly navWidgets: Locator;
  readonly navTables: Locator;
  readonly navAlerts: Locator;
  readonly navWindows: Locator;
  readonly navFiles: Locator;
  readonly navDynamic: Locator;
  readonly navBroken: Locator;
  readonly logo: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logo = page.locator('a.nav-logo');
    this.navForms = page.locator('nav').getByRole('link', { name: 'Forms' });
    this.navInteractions = page.locator('nav').getByRole('link', { name: 'Interactions' });
    this.navWidgets = page.locator('nav').getByRole('link', { name: 'Widgets' });
    this.navTables = page.locator('nav').getByRole('link', { name: 'Tables' });
    this.navAlerts = page.locator('nav').getByRole('link', { name: 'Alerts' });
    this.navWindows = page.locator('nav').getByRole('link', { name: 'Windows' });
    this.navFiles = page.locator('nav').getByRole('link', { name: 'Files' });
    this.navDynamic = page.locator('nav').getByRole('link', { name: 'Dynamic' });
    this.navBroken = page.locator('nav').getByRole('link', { name: 'Broken' });
  }

  async navigateToForms(): Promise<void> {
    await this.navForms.click();
  }

  async navigateToInteractions(): Promise<void> {
    await this.navInteractions.click();
  }

  async navigateToWidgets(): Promise<void> {
    await this.navWidgets.click();
  }

  async navigateToTables(): Promise<void> {
    await this.navTables.click();
  }

  async navigateToAlerts(): Promise<void> {
    await this.navAlerts.click();
  }

  async navigateToWindows(): Promise<void> {
    await this.navWindows.click();
  }

  async navigateToFiles(): Promise<void> {
    await this.navFiles.click();
  }

  async navigateToDynamic(): Promise<void> {
    await this.navDynamic.click();
  }

  async navigateToBroken(): Promise<void> {
    await this.navBroken.click();
  }

  async navigateToHome(): Promise<void> {
    await this.logo.click();
  }
}
