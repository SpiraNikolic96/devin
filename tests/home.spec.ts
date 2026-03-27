import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';

test.describe('Home Page', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.goto();
  });

  test('should display the main heading and subtitle', async () => {
    await expect(homePage.heading).toBeVisible();
    await expect(homePage.subtitle).toBeVisible();
  });

  test('should display all navigation links', async () => {
    await expect(homePage.navForms).toBeVisible();
    await expect(homePage.navInteractions).toBeVisible();
    await expect(homePage.navWidgets).toBeVisible();
    await expect(homePage.navTables).toBeVisible();
    await expect(homePage.navAlerts).toBeVisible();
    await expect(homePage.navWindows).toBeVisible();
    await expect(homePage.navFiles).toBeVisible();
    await expect(homePage.navDynamic).toBeVisible();
    await expect(homePage.navBroken).toBeVisible();
  });

  test('should display all category cards', async () => {
    await expect(homePage.formsCard).toBeVisible();
    await expect(homePage.interactionsCard).toBeVisible();
    await expect(homePage.widgetsCard).toBeVisible();
    await expect(homePage.tablesCard).toBeVisible();
    await expect(homePage.alertsCard).toBeVisible();
    await expect(homePage.windowsCard).toBeVisible();
    await expect(homePage.filesCard).toBeVisible();
    await expect(homePage.dynamicCard).toBeVisible();
    await expect(homePage.brokenCard).toBeVisible();
  });

  test('should navigate to Forms page via card click', async ({ page }) => {
    await homePage.clickFormsCard();
    await expect(page).toHaveURL(/forms/);
  });

  test('should navigate to Interactions page via card click', async ({ page }) => {
    await homePage.clickInteractionsCard();
    await expect(page).toHaveURL(/interactions/);
  });

  test('should navigate to Widgets page via card click', async ({ page }) => {
    await homePage.clickWidgetsCard();
    await expect(page).toHaveURL(/widgets/);
  });

  test('should navigate to Tables page via card click', async ({ page }) => {
    await homePage.clickTablesCard();
    await expect(page).toHaveURL(/tables/);
  });

  test('should navigate to Alerts page via card click', async ({ page }) => {
    await homePage.clickAlertsCard();
    await expect(page).toHaveURL(/alerts/);
  });

  test('should navigate to Forms page via nav link', async ({ page }) => {
    await homePage.navigateToForms();
    await expect(page).toHaveURL(/forms/);
  });

  test('should navigate to Widgets page via nav link', async ({ page }) => {
    await homePage.navigateToWidgets();
    await expect(page).toHaveURL(/widgets/);
  });

  test('should navigate to Tables page via nav link', async ({ page }) => {
    await homePage.navigateToTables();
    await expect(page).toHaveURL(/tables/);
  });
});
