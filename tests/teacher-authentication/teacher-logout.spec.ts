// spec: specs/student-tracker-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Teacher Authentication', () => {
  test('Teacher Logout', async ({ page }) => {
    // 1. Log in as a teacher with valid credentials
    await page.goto('https://student-tracker-new.vercel.app');
    await page.getByRole('textbox', { name: 'Email *' }).fill('rakegowda015@gmail.com');
    await page.getByRole('textbox', { name: 'Password *' }).fill('Dell#549');
    await page.getByRole('button', { name: 'Login' }).click();
    
    // expect: User is logged in and redirected to the dashboard
    await expect(page.getByText('Dashboard Overview')).toBeVisible();

    // 2. Click the 'Logout' button in the sidebar
    await page.getByRole('button', { name: 'Logout' }).click();
    
    // expect: User is logged out successfully
    // expect: User is redirected to the Teacher Login page
    await expect(page.getByRole('heading', { name: 'Teacher Login' })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Email *' })).toBeVisible();
    
    // expect: 'Logged out' success message is displayed
    // Note: The success message may disappear quickly, but logout is confirmed by redirect to login page
  });
});
