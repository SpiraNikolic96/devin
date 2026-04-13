import { type Page, type Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class HomePage extends BasePage {
  readonly heading: Locator;
  readonly subtitle: Locator;
  readonly formsCard: Locator;
  readonly interactionsCard: Locator;
  readonly widgetsCard: Locator;
  readonly tablesCard: Locator;
  readonly alertsCard: Locator;
  readonly windowsCard: Locator;
  readonly filesCard: Locator;
  readonly dynamicCard: Locator;
  readonly brokenCard: Locator;

  constructor(page: Page) {
    super(page);
    this.heading = page.getByRole('heading', { name: 'Test Automation Playground' });
    this.subtitle = page.getByText('Practice your automation testing skills');
    this.formsCard = page.locator('#card-forms');
    this.interactionsCard = page.locator('#card-interactions');
    this.widgetsCard = page.locator('#card-widgets');
    this.tablesCard = page.locator('#card-tables');
    this.alertsCard = page.locator('#card-alerts');
    this.windowsCard = page.locator('#card-windows');
    this.filesCard = page.locator('#card-files');
    this.dynamicCard = page.locator('#card-dynamic');
    this.brokenCard = page.locator('#card-broken');
  }

  async goto(): Promise<void> {
    await this.page.goto('/');
  }

  async clickFormsCard(): Promise<void> {
    await this.formsCard.click();
  }

  async clickInteractionsCard(): Promise<void> {
    await this.interactionsCard.click();
  }

  async clickWidgetsCard(): Promise<void> {
    await this.widgetsCard.click();
  }

  async clickTablesCard(): Promise<void> {
    await this.tablesCard.click();
  }

  async clickAlertsCard(): Promise<void> {
    await this.alertsCard.click();
  }

  async clickWindowsCard(): Promise<void> {
    await this.windowsCard.click();
  }

  async clickFilesCard(): Promise<void> {
    await this.filesCard.click();
  }

  async clickDynamicCard(): Promise<void> {
    await this.dynamicCard.click();
  }

  async clickBrokenCard(): Promise<void> {
    await this.brokenCard.click();
  }
}
