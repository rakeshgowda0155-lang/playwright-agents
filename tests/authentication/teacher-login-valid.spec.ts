// spec: Authentication Suite - Teacher Login - Valid Credentials
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Authentication Suite', () => {
  test('Teacher Login - Valid Credentials', async ({ page }) => {
    // 1. Navigate to the teacher login page (https://student-tracker-new.vercel.app/)
    await page.goto('https://student-tracker-new.vercel.app/');
    
    // Expect: Login form is displayed with Email and Password fields
    await expect(page.getByRole('textbox', { name: 'Email *' })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Password *' })).toBeVisible();
    
    // 2. Enter valid registered email (use the email from the signup test: 'jane.doe@example.com')
    await page.getByRole('textbox', { name: 'Email *' }).fill('jane.doe@example.com');
    
    // Expect: Email is entered in the field
    await expect(page.getByRole('textbox', { name: 'Email *' })).toHaveValue('jane.doe@example.com');
    
    // 3. Enter correct password ('Test@1234')
    await page.getByRole('textbox', { name: 'Password *' }).fill('Test@1234');
    
    // Expect: Password is entered (masked)
    await expect(page.getByRole('textbox', { name: 'Password *' })).toHaveValue('Test@1234');
    
    // 4. Click the 'Login' button
    await page.getByRole('button', { name: 'Login' }).click();
    
    // Expect: User is successfully authenticated
    // Expect: User is redirected to the teacher dashboard
    // Expect: Dashboard displays 'Dashboard Overview' heading
    await expect(page.getByRole('heading', { name: 'Dashboard Overview' })).toBeVisible();
    
    // Expect: User information is visible in the sidebar
    await expect(page.getByText('Jane Doe')).toBeVisible();
    await expect(page.getByText('jane.doe@example.com')).toBeVisible();
  });
});
