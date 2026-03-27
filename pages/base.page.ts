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
    this.logo = page.locator('a.logo');
    this.navForms = page.getByRole('link', { name: 'Forms' });
    this.navInteractions = page.getByRole('link', { name: 'Interactions' });
    this.navWidgets = page.getByRole('link', { name: 'Widgets' });
    this.navTables = page.getByRole('link', { name: 'Tables' });
    this.navAlerts = page.getByRole('link', { name: 'Alerts' });
    this.navWindows = page.getByRole('link', { name: 'Windows' });
    this.navFiles = page.getByRole('link', { name: 'Files' });
    this.navDynamic = page.getByRole('link', { name: 'Dynamic' });
    this.navBroken = page.getByRole('link', { name: 'Broken' });
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
