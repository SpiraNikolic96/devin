import { test, expect } from '@playwright/test';
import { DynamicContentPage } from '../pages/dynamic.page';

test.describe('Dynamic Content Page', () => {
  let dynamicPage: DynamicContentPage;

  test.beforeEach(async ({ page }) => {
    dynamicPage = new DynamicContentPage(page);
    await dynamicPage.goto();
  });

  test('should display the page heading', async () => {
    await expect(dynamicPage.pageHeading).toBeVisible();
  });

  test.describe('Loading Spinner', () => {
    test('should show spinner when loading data', async () => {
      await dynamicPage.clickLoadData();
      // The spinner should appear briefly
      await expect(dynamicPage.spinner).toBeVisible({ timeout: 5000 });
    });

    test('should show content after loading', async () => {
      await dynamicPage.clickLoadData();
      await dynamicPage.waitForSpinnerToDisappear();
      await expect(dynamicPage.loadedContent).toBeVisible();
    });
  });

  test.describe('Delayed Elements', () => {
    test('should show delayed element after waiting', async () => {
      await dynamicPage.clickShowDelayed();
      await dynamicPage.waitForDelayedElement();
      await expect(dynamicPage.delayedElement).toBeVisible();
    });
  });

  test.describe('AJAX Content', () => {
    test('should load AJAX content', async () => {
      await dynamicPage.clickLoadAjax();
      await expect(dynamicPage.ajaxContent).not.toBeEmpty({ timeout: 10000 });
    });
  });
});
