import { test, expect } from '@playwright/test';
import { WidgetsPage } from '../pages/widgets.page';

test.describe('Widgets Page', () => {
  let widgetsPage: WidgetsPage;

  test.beforeEach(async ({ page }) => {
    widgetsPage = new WidgetsPage(page);
    await widgetsPage.goto();
  });

  test('should display the page heading', async () => {
    await expect(widgetsPage.pageHeading).toBeVisible();
  });

  test.describe('Accordion', () => {
    test('should expand and collapse accordion sections', async ({ page }) => {
      // Section 2 should be open by default
      const section2Content = page.locator('.accordion-content').nth(1);
      await expect(section2Content).toBeVisible();

      // Click Section 1 to expand it
      await widgetsPage.clickAccordionSection(1);
      const section1Content = page.locator('.accordion-content').nth(0);
      await expect(section1Content).toBeVisible();
    });

    test('should show content when section is expanded', async ({ page }) => {
      await widgetsPage.clickAccordionSection(1);
      const section1Content = page.locator('.accordion-content').nth(0);
      await expect(section1Content).toContainText('Content for section 1');
    });
  });

  test.describe('Tabs', () => {
    test('should switch between tabs', async ({ page }) => {
      // Tab 1 should be active by default
      await expect(page.locator('.tab-panel').nth(0)).toBeVisible();

      // Click Tab 2
      await widgetsPage.clickTab(2);
      await expect(page.locator('.tab-panel').nth(1)).toBeVisible();

      // Click Tab 3
      await widgetsPage.clickTab(3);
      await expect(page.locator('.tab-panel').nth(2)).toBeVisible();
    });

    test('should display correct content for each tab', async ({ page }) => {
      await expect(page.getByText('Content for tab 1')).toBeVisible();

      await widgetsPage.clickTab(2);
      await expect(page.getByText('Content for tab 2')).toBeVisible();
    });
  });

  test.describe('Modal', () => {
    test('should open and close modal', async () => {
      await widgetsPage.openModal();
      await expect(widgetsPage.modal).toBeVisible();

      await widgetsPage.closeModal();
      await expect(widgetsPage.modal).not.toBeVisible();
    });

    test('should display modal title', async () => {
      await widgetsPage.openModal();
      await expect(widgetsPage.modalTitle).toBeVisible();
    });
  });

  test.describe('Tooltip', () => {
    test('should show tooltip on hover', async ({ page }) => {
      await widgetsPage.tooltipButton.hover();
      const tooltip = page.locator('.tooltip-text');
      await expect(tooltip).toBeVisible();
    });
  });

  test.describe('Progress Bar', () => {
    test('should start progress when button is clicked', async () => {
      await widgetsPage.startProgress();
      await expect(widgetsPage.progressBar).toBeVisible();
    });
  });
});
