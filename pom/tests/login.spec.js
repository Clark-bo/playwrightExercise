//Recording Play
import { test, expect } from '@playwright/test';
//test('Título de la funcionalidad que se esta probando')
test('User must be logged in succesfully!!!', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
});