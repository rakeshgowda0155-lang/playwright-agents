// spec: Test Suite: Search Functionality Tests
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Search Functionality Tests', () => {
  test('Open search dialog with button click', async ({ page }) => {
    // 1. Navigate to https://playwright.dev/
    await page.goto('https://playwright.dev/');

    // 2. Click on the search button in the navigation
    await page.getByRole('button', { name: 'Search (Ctrl+K)' }).click();

    // The search input field is visible and focused
    await expect(page.getByRole('searchbox', { name: 'Search' })).toBeVisible();

    // The 'No recent searches' message is displayed
    await expect(page.getByText('No recent searches')).toBeVisible();

    // The 'Search by Algolia' branding is visible
    await expect(page.getByRole('link', { name: 'Search by Algolia' })).toBeVisible();
  });
});
