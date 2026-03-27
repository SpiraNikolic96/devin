import { test, expect } from '@playwright/test';
import { AlertsPage } from '../pages/alerts.page';

test.describe('Alerts Page', () => {
  let alertsPage: AlertsPage;

  test.beforeEach(async ({ page }) => {
    alertsPage = new AlertsPage(page);
    await alertsPage.goto();
  });

  test('should display the page heading', async () => {
    await expect(alertsPage.pageHeading).toBeVisible();
  });

  test.describe('JavaScript Alert', () => {
    test('should handle JS alert', async ({ page }) => {
      page.on('dialog', async (dialog) => {
        expect(dialog.type()).toBe('alert');
        await dialog.accept();
      });

      await alertsPage.triggerAlert();
      await expect(alertsPage.alertOutput).not.toBeEmpty();
    });
  });

  test.describe('Confirm Dialog', () => {
    test('should handle confirm dialog - accept', async ({ page }) => {
      page.on('dialog', async (dialog) => {
        expect(dialog.type()).toBe('confirm');
        await dialog.accept();
      });

      await alertsPage.triggerConfirm();
      await expect(alertsPage.confirmOutput).toContainText(/OK|true|accepted/i);
    });

    test('should handle confirm dialog - dismiss', async ({ page }) => {
      page.on('dialog', async (dialog) => {
        await dialog.dismiss();
      });

      await alertsPage.triggerConfirm();
      await expect(alertsPage.confirmOutput).toContainText(/Cancel|false|dismissed/i);
    });
  });

  test.describe('Prompt Dialog', () => {
    test('should handle prompt dialog with input', async ({ page }) => {
      page.on('dialog', async (dialog) => {
        expect(dialog.type()).toBe('prompt');
        await dialog.accept('Test Input');
      });

      await alertsPage.triggerPrompt();
      await expect(alertsPage.promptOutput).toContainText('Test Input');
    });

    test('should handle prompt dialog - cancel', async ({ page }) => {
      page.on('dialog', async (dialog) => {
        await dialog.dismiss();
      });

      await alertsPage.triggerPrompt();
      await expect(alertsPage.promptOutput).not.toBeEmpty();
    });
  });

  test.describe('Toast Notifications', () => {
    test('should display success toast', async ({ page }) => {
      await alertsPage.triggerSuccessToast();
      const toast = page.locator('.toast.success, .toast-success, [class*="success"]').first();
      await expect(toast).toBeVisible({ timeout: 5000 });
    });

    test('should display error toast', async ({ page }) => {
      await alertsPage.triggerErrorToast();
      const toast = page.locator('.toast.error, .toast-error, [class*="error"]').first();
      await expect(toast).toBeVisible({ timeout: 5000 });
    });

    test('should display info toast', async ({ page }) => {
      await alertsPage.triggerInfoToast();
      const toast = page.locator('.toast.info, .toast-info, [class*="info"]').first();
      await expect(toast).toBeVisible({ timeout: 5000 });
    });

    test('should display warning toast', async ({ page }) => {
      await alertsPage.triggerWarningToast();
      const toast = page.locator('.toast.warning, .toast-warning, [class*="warning"]').first();
      await expect(toast).toBeVisible({ timeout: 5000 });
    });
  });
});
