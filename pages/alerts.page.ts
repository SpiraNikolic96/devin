import { type Page, type Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class AlertsPage extends BasePage {
  readonly pageHeading: Locator;

  // JavaScript Alert
  readonly jsAlertButton: Locator;
  readonly alertOutput: Locator;

  // Confirm Dialog
  readonly confirmButton: Locator;
  readonly confirmOutput: Locator;

  // Prompt Dialog
  readonly promptButton: Locator;
  readonly promptOutput: Locator;

  // Toast Notifications
  readonly successToastButton: Locator;
  readonly errorToastButton: Locator;
  readonly infoToastButton: Locator;
  readonly warningToastButton: Locator;

  constructor(page: Page) {
    super(page);
    this.pageHeading = page.getByRole('heading', { name: 'Alerts Testing' });

    // JavaScript Alert
    this.jsAlertButton = page.locator('#js-alert');
    this.alertOutput = page.locator('#alert-output');

    // Confirm Dialog
    this.confirmButton = page.locator('#js-confirm');
    this.confirmOutput = page.locator('#confirm-output');

    // Prompt Dialog
    this.promptButton = page.locator('#js-prompt');
    this.promptOutput = page.locator('#prompt-output');

    // Toast Notifications
    this.successToastButton = page.locator('#toast-success');
    this.errorToastButton = page.locator('#toast-error');
    this.infoToastButton = page.locator('#toast-info');
    this.warningToastButton = page.locator('#toast-warning');
  }

  async goto(): Promise<void> {
    await this.page.goto('/pages/alerts.html');
  }

  async triggerAlert(): Promise<void> {
    await this.jsAlertButton.click();
  }

  async triggerConfirm(): Promise<void> {
    await this.confirmButton.click();
  }

  async triggerPrompt(): Promise<void> {
    await this.promptButton.click();
  }

  async triggerSuccessToast(): Promise<void> {
    await this.successToastButton.click();
  }

  async triggerErrorToast(): Promise<void> {
    await this.errorToastButton.click();
  }

  async triggerInfoToast(): Promise<void> {
    await this.infoToastButton.click();
  }

  async triggerWarningToast(): Promise<void> {
    await this.warningToastButton.click();
  }
}
