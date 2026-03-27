import { test, expect } from '@playwright/test';
import { InteractionsPage } from '../pages/interactions.page';

test.describe('Interactions Page', () => {
  let interactionsPage: InteractionsPage;

  test.beforeEach(async ({ page }) => {
    interactionsPage = new InteractionsPage(page);
    await interactionsPage.goto();
  });

  test('should display the page heading', async () => {
    await expect(interactionsPage.pageHeading).toBeVisible();
  });

  test.describe('Click Events', () => {
    test('should handle single click', async () => {
      await interactionsPage.performSingleClick();
      await expect(interactionsPage.singleClickOutput).not.toBeEmpty();
    });

    test('should handle double click', async () => {
      await interactionsPage.performDoubleClick();
      await expect(interactionsPage.doubleClickOutput).not.toBeEmpty();
    });

    test('should handle right click and show context menu', async ({ page }) => {
      await interactionsPage.performRightClick();
      const contextMenu = page.locator('#context-menu');
      await expect(contextMenu).toBeVisible();
    });
  });

  test.describe('Keyboard Events', () => {
    test('should detect key press', async () => {
      await interactionsPage.keyboardInput.focus();
      await interactionsPage.page.keyboard.press('a');
      const keyOutput = interactionsPage.page.locator('#key-output');
      await expect(keyOutput).not.toBeEmpty();
    });
  });

  test.describe('Hover Events', () => {
    test('should detect hover', async ({ page }) => {
      const hoverOutput = page.locator('#hover-output');
      await interactionsPage.hoverOverArea();
      await expect(hoverOutput).not.toBeEmpty();
    });
  });

  test.describe('Drag and Drop', () => {
    test('should drag item to drop zone', async () => {
      await interactionsPage.draggableItem.dragTo(interactionsPage.dropZone);
      await expect(interactionsPage.dragDropOutput).not.toBeEmpty();
    });
  });
});
