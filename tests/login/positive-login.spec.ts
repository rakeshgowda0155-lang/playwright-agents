import { test, expect } from '@playwright/test';

test.describe('Login - Positive Flow', () => {
  test('should successfully login with valid credentials and redirect to teacher dashboard', async ({ page }) => {
    // Step 1: Navigate to the login page
    await page.goto('https://student-tracker-new.vercel.app/');

    // Step 2: Enter email address
    // Using getByRole with name for better accessibility
    await page.getByRole('textbox', { name: /email/i }).fill('rakegowda015@gmail.com');

    // Step 3: Enter password
    // Using getByLabel for password field
    await page.getByLabel(/password/i).fill('Dell#549');

    // Step 4: Click the Login button
    await page.getByRole('button', { name: /login/i }).click();

    // Step 5: Verify successful login - should redirect to /teacher/dashboard
    await expect(page).toHaveURL(/\/teacher\/dashboard/);

    // Step 6: Verify the dashboard page loads with the correct heading/content
    // Wait for the page to be fully loaded
    await page.waitForLoadState('networkidle');
    
    // Verify dashboard heading is present
    await expect(page.getByRole('heading', { name: /dashboard/i })).toBeVisible();
  });
});
