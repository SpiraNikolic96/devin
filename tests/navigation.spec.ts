import { test, expect } from '@playwright/test';
import { BasePage } from '../pages/base.page';

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should navigate to all pages via navbar', async ({ page }) => {
    const basePage = new BasePage(page);

    // Navigate to Forms
    await basePage.navigateToForms();
    await expect(page).toHaveURL(/forms/);
    await expect(page.getByRole('heading', { name: 'Forms Testing' })).toBeVisible();

    // Navigate to Interactions
    await basePage.navigateToInteractions();
    await expect(page).toHaveURL(/interactions/);
    await expect(page.getByRole('heading', { name: 'Interactions Testing' })).toBeVisible();

    // Navigate to Widgets
    await basePage.navigateToWidgets();
    await expect(page).toHaveURL(/widgets/);
    await expect(page.getByRole('heading', { name: 'Widgets Testing' })).toBeVisible();

    // Navigate to Tables
    await basePage.navigateToTables();
    await expect(page).toHaveURL(/tables/);
    await expect(page.getByRole('heading', { name: 'Tables Testing' })).toBeVisible();

    // Navigate to Alerts
    await basePage.navigateToAlerts();
    await expect(page).toHaveURL(/alerts/);
    await expect(page.getByRole('heading', { name: 'Alerts Testing' })).toBeVisible();

    // Navigate back to home via logo
    await basePage.navigateToHome();
    await expect(page).toHaveURL(/apptesting\.pl\/?$/);
  });

  test('should have correct page titles', async ({ page }) => {
    await expect(page).toHaveTitle(/Test Automation Playground/);
  });
});
