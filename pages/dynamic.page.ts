import { type Page, type Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class DynamicContentPage extends BasePage {
  readonly pageHeading: Locator;

  // Loading Spinner
  readonly loadDataButton: Locator;
  readonly spinner: Locator;
  readonly loadedContent: Locator;

  // Delayed Elements
  readonly showDelayedButton: Locator;
  readonly delayedElement: Locator;

  // AJAX Content
  readonly loadAjaxButton: Locator;
  readonly ajaxContent: Locator;

  // Infinite Scroll
  readonly scrollContainer: Locator;

  constructor(page: Page) {
    super(page);
    this.pageHeading = page.getByRole('heading', { name: 'Dynamic Content Testing' });

    // Loading Spinner
    this.loadDataButton = page.locator('#load-data-btn');
    this.spinner = page.locator('.spinner');
    this.loadedContent = page.locator('#loaded-content');

    // Delayed Elements
    this.showDelayedButton = page.locator('#show-delayed-btn');
    this.delayedElement = page.locator('#delayed-element');

    // AJAX Content
    this.loadAjaxButton = page.locator('#load-ajax-btn');
    this.ajaxContent = page.locator('#ajax-content');

    // Infinite Scroll
    this.scrollContainer = page.locator('#scroll-container');
  }

  async goto(): Promise<void> {
    await this.page.goto('/pages/dynamic.html');
  }

  async clickLoadData(): Promise<void> {
    await this.loadDataButton.click();
  }

  async clickShowDelayed(): Promise<void> {
    await this.showDelayedButton.click();
  }

  async clickLoadAjax(): Promise<void> {
    await this.loadAjaxButton.click();
  }

  async waitForSpinnerToDisappear(): Promise<void> {
    await this.spinner.waitFor({ state: 'hidden', timeout: 10000 });
  }

  async waitForDelayedElement(): Promise<void> {
    await this.delayedElement.waitFor({ state: 'visible', timeout: 10000 });
  }
}
