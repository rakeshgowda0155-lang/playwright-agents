// spec: Homepage Tests
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Homepage Tests', () => {
  test('Verify homepage hero section elements', async ({ page }) => {
    // 1. Navigate to https://playwright.dev/
    await page.goto('https://playwright.dev/');

    // 2. Verify the hero section contains the main heading
    await expect(page.getByRole('heading', { name: 'Playwright enables reliable end-to-end testing for modern web apps.' })).toBeVisible();

    // 3. Verify the 'Get started' button is present
    await expect(page.getByRole('link', { name: 'Get started' })).toBeVisible();

    // 4. Verify the GitHub star button is present
    await expect(page.getByRole('link', { name: 'Star microsoft/playwright on GitHub' })).toBeVisible();
    await expect(page.getByRole('link', { name: '82k+ stargazers on GitHub' })).toBeVisible();
  });
});
