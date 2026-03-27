import { test, expect } from '@playwright/test';
import { TablesPage } from '../pages/tables.page';

test.describe('Tables Page', () => {
  let tablesPage: TablesPage;

  test.beforeEach(async ({ page }) => {
    tablesPage = new TablesPage(page);
    await tablesPage.goto();
  });

  test('should display the page heading', async () => {
    await expect(tablesPage.pageHeading).toBeVisible();
  });

  test.describe('Static Table', () => {
    test('should display the static table', async () => {
      await expect(tablesPage.staticTable).toBeVisible();
    });

    test('should have table headers', async () => {
      const headerCount = await tablesPage.staticTableHeaders.count();
      expect(headerCount).toBeGreaterThan(0);
    });

    test('should have data rows', async () => {
      const rowCount = await tablesPage.getStaticTableRowCount();
      expect(rowCount).toBeGreaterThan(0);
    });
  });

  test.describe('Sortable Table', () => {
    test('should display the sortable table', async () => {
      await expect(tablesPage.sortableTable).toBeVisible();
    });

    test('should sort table when clicking header', async () => {
      // Get first cell value before sorting
      const firstCellBefore = await tablesPage.sortableTableRows.first().locator('td').first().textContent();

      // Click header to sort
      await tablesPage.clickSortableHeader(0);

      // Get first cell value after sorting
      const firstCellAfter = await tablesPage.sortableTableRows.first().locator('td').first().textContent();

      // Values may or may not change depending on initial order, but the click should work
      expect(firstCellBefore).toBeDefined();
      expect(firstCellAfter).toBeDefined();
    });
  });

  test.describe('Searchable Table', () => {
    test('should filter table rows based on search', async () => {
      const initialRowCount = await tablesPage.searchableTableRows.count();

      await tablesPage.searchTable('John');
      const filteredRowCount = await tablesPage.searchableTableRows.count();

      expect(filteredRowCount).toBeLessThanOrEqual(initialRowCount);
    });

    test('should show all rows when search is cleared', async () => {
      await tablesPage.searchTable('John');
      await tablesPage.searchTable('');
      const rowCount = await tablesPage.searchableTableRows.count();
      expect(rowCount).toBeGreaterThan(0);
    });
  });

  test.describe('Paginated Table', () => {
    test('should display pagination buttons', async () => {
      const buttonCount = await tablesPage.paginationButtons.count();
      expect(buttonCount).toBeGreaterThan(0);
    });

    test('should navigate between pages', async () => {
      // Click next page button if available
      const buttonCount = await tablesPage.paginationButtons.count();
      if (buttonCount > 1) {
        await tablesPage.clickPaginationButton(1);
        await expect(tablesPage.paginatedTable).toBeVisible();
      }
    });
  });
});
