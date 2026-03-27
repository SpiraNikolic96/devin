import { type Page, type Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class TablesPage extends BasePage {
  readonly pageHeading: Locator;

  // Static Table
  readonly staticTable: Locator;
  readonly staticTableRows: Locator;
  readonly staticTableHeaders: Locator;

  // Sortable Table
  readonly sortableTable: Locator;
  readonly sortableTableHeaders: Locator;
  readonly sortableTableRows: Locator;

  // Searchable Table
  readonly searchInput: Locator;
  readonly searchableTable: Locator;
  readonly searchableTableRows: Locator;

  // Pagination Table
  readonly paginatedTable: Locator;
  readonly paginationButtons: Locator;

  constructor(page: Page) {
    super(page);
    this.pageHeading = page.getByRole('heading', { name: 'Tables Testing' });

    // Static Table
    this.staticTable = page.locator('#static-table');
    this.staticTableRows = page.locator('#static-table tbody tr');
    this.staticTableHeaders = page.locator('#static-table th');

    // Sortable Table
    this.sortableTable = page.locator('#sortable-table');
    this.sortableTableHeaders = page.locator('#sortable-table th');
    this.sortableTableRows = page.locator('#sortable-table tbody tr');

    // Searchable Table
    this.searchInput = page.locator('#table-search');
    this.searchableTable = page.locator('#searchable-table');
    this.searchableTableRows = page.locator('#searchable-table tbody tr');

    // Pagination Table
    this.paginatedTable = page.locator('#paginated-table');
    this.paginationButtons = page.locator('.pagination button');
  }

  async goto(): Promise<void> {
    await this.page.goto('/pages/tables.html');
  }

  async searchTable(query: string): Promise<void> {
    await this.searchInput.fill(query);
  }

  async clickSortableHeader(index: number): Promise<void> {
    await this.sortableTableHeaders.nth(index).click();
  }

  async clickPaginationButton(index: number): Promise<void> {
    await this.paginationButtons.nth(index).click();
  }

  async getStaticTableRowCount(): Promise<number> {
    return this.staticTableRows.count();
  }
}
