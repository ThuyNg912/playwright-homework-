// @ts-check
import { test, expect } from '@playwright/test';

test('01 has title', async ({ page }) => {
  await page.goto('https://www.google.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Google/);
});

test('02 has Google icon', async ({ page }) => {
  await page.goto('https://www.google.com/');

  // Click the get started link.
  //await page.getByRole('img', { name: 'Google' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('img', { name: 'Google' })).toBeVisible();
});

test('03 has Search input', async ({ page }) => {
  await page.goto('https://www.google.com/');
  // await expect(page.getByRole('textbox', {name: 'Tìm kiếm'})).click();
  await page.locator('textarea[name="q"]').click();
});
