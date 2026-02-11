// spec: Navigation Tests
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Navigation Tests', () => {
  test('Verify main navigation menu', async ({ page }) => {
    // 1. Navigate to https://playwright.dev/
    await page.goto('https://playwright.dev/');

    // 2. Verify the main navigation bar contains all required links
    await expect(page.getByRole('link', { name: 'Playwright logo Playwright' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Docs' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'API' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Node.js' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Community' })).toBeVisible();

    // 3. Verify the utility navigation icons are present
    await expect(page.getByRole('link', { name: 'GitHub repository' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Discord server' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Switch between dark and light mode (currently system mode)' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Search (Ctrl+K)' })).toBeVisible();
  });
});
