import { type Page, type Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class WidgetsPage extends BasePage {
  readonly pageHeading: Locator;

  // Accordion
  readonly accordionSection1: Locator;
  readonly accordionSection2: Locator;
  readonly accordionSection3: Locator;

  // Tabs
  readonly tab1: Locator;
  readonly tab2: Locator;
  readonly tab3: Locator;
  readonly tabContent: Locator;

  // Modal
  readonly openModalButton: Locator;
  readonly modal: Locator;
  readonly modalCloseButton: Locator;
  readonly modalTitle: Locator;

  // Tooltip
  readonly tooltipButton: Locator;

  // Progress Bar
  readonly startProgressButton: Locator;
  readonly progressBar: Locator;

  // Autocomplete
  readonly autocompleteInput: Locator;

  constructor(page: Page) {
    super(page);
    this.pageHeading = page.getByRole('heading', { name: 'Widgets Testing' });

    // Accordion
    this.accordionSection1 = page.locator('#accordion-header-1');
    this.accordionSection2 = page.locator('#accordion-header-2');
    this.accordionSection3 = page.locator('#accordion-header-3');

    // Tabs
    this.tab1 = page.locator('#tab-btn-1');
    this.tab2 = page.locator('#tab-btn-2');
    this.tab3 = page.locator('#tab-btn-3');
    this.tabContent = page.locator('.tab-content');

    // Modal
    this.openModalButton = page.locator('#modal-trigger');
    this.modal = page.locator('#modal-1');
    this.modalCloseButton = page.locator('.modal-close');
    this.modalTitle = page.locator('.modal-header h3');

    // Tooltip
    this.tooltipButton = page.locator('#tooltip-btn');

    // Progress Bar
    this.startProgressButton = page.locator('#progress-section button');
    this.progressBar = page.locator('#progress-bar');

    // Autocomplete
    this.autocompleteInput = page.locator('#autocomplete');
  }

  async goto(): Promise<void> {
    await this.page.goto('/pages/widgets.html');
  }

  async clickAccordionSection(section: number): Promise<void> {
    const sectionLocator = this.page.locator(`#accordion-header-${section}`);
    await sectionLocator.click();
  }

  async clickTab(tabNumber: number): Promise<void> {
    const tab = this.page.locator(`#tab-btn-${tabNumber}`);
    await tab.click();
  }

  async openModal(): Promise<void> {
    await this.openModalButton.click();
  }

  async closeModal(): Promise<void> {
    await this.modalCloseButton.click();
  }

  async startProgress(): Promise<void> {
    await this.startProgressButton.click();
  }

  async fillAutocomplete(text: string): Promise<void> {
    await this.autocompleteInput.fill(text);
  }
}
