// spec: Homepage Tests
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Homepage Tests', () => {
  test('Verify homepage loads successfully', async ({ page }) => {
    // 1. Navigate to https://playwright.dev/
    await page.goto('https://playwright.dev/');

    // Verify the page title is 'Fast and reliable end-to-end testing for modern web apps | Playwright'
    await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright');

    // Verify the main heading 'Playwright enables reliable end-to-end testing for modern web apps.' is visible
    await expect(page.getByRole('heading', { name: 'Playwright enables reliable end-to-end testing for modern web apps.' })).toBeVisible();
  });
});
