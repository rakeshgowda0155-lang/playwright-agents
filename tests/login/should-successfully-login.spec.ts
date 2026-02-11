// spec: Login Tests
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Login Tests', () => {
  test('should successfully login with valid credentials and redirect to teacher dashboard', async ({ page }) => {
    // 1. Navigate to https://student-tracker-new.vercel.app/
    await page.goto('https://student-tracker-new.vercel.app/');

    // 2. Enter email: rakegowda015@gmail.com
    await page.getByRole('textbox', { name: 'Email *' }).fill('rakegowda015@gmail.com');

    // 3. Enter password: Dell#549
    await page.getByRole('textbox', { name: 'Password *' }).fill('Dell#549');

    // 4. Click the Login button
    await page.getByRole('button', { name: 'Login' }).click();

    // 5. Verify successful login - should redirect to /teacher/dashboard
    await expect(page).toHaveURL(/\/teacher\/dashboard/);

    // 6. Verify the dashboard page loads with the correct heading or content
    await expect(page.getByRole('heading', { name: 'Dashboard Overview' })).toBeVisible();
  });
});
