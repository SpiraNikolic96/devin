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

  test.describe('Delayed Text', () => {
    test('should show delayed text after clicking button', async () => {
      await dynamicPage.clickLoadData();
      await expect(dynamicPage.loadedContent).toBeVisible({ timeout: 10000 });
    });
  });

  test.describe('Toggle Element', () => {
    test('should toggle element visibility', async () => {
      await dynamicPage.clickShowDelayed();
      await expect(dynamicPage.delayedElement).toBeVisible({ timeout: 10000 });
    });
  });

  test.describe('AJAX Content', () => {
    test('should load AJAX content', async () => {
      await dynamicPage.clickLoadAjax();
      await expect(dynamicPage.ajaxContent).not.toBeEmpty({ timeout: 10000 });
    });
  });
});
