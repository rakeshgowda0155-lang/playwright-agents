// spec: Authentication Suite - Teacher Signup - Valid Registration
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Authentication Suite', () => {
  test('Teacher Signup - Valid Registration', async ({ page }) => {
    // 1. Navigate to the application root URL (https://student-tracker-new.vercel.app/)
    await page.goto('https://student-tracker-new.vercel.app/');
    
    // expect: User is redirected to the teacher login page
    // expect: Page displays 'Teacher Login' heading
    await expect(page.getByRole('heading', { name: 'Teacher Login' })).toBeVisible();
    
    // expect: Login form is visible with Email and Password fields
    await expect(page.getByRole('textbox', { name: 'Email *' })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Password *' })).toBeVisible();

    // 2. Click on the 'Sign up' link
    await page.getByRole('link', { name: 'Sign up' }).click();
    
    // expect: User is redirected to the teacher signup page
    // expect: Page displays 'Teacher Signup' heading
    await expect(page.getByRole('heading', { name: 'Teacher Signup' })).toBeVisible();
    
    // expect: Signup form is visible with all required fields: Full Name, Email, Password, Confirm Password
    await expect(page.getByRole('textbox', { name: 'Full Name *' })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Email *' })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Password *' })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Confirm Password *' })).toBeVisible();

    // 3. Enter valid full name (e.g., 'Jane Doe')
    await page.getByRole('textbox', { name: 'Full Name *' }).fill('Jane Doe');
    
    // expect: Full name is entered in the text field
    await expect(page.getByRole('textbox', { name: 'Full Name *' })).toHaveValue('Jane Doe');

    // 4. Enter valid email (e.g., 'jane.doe@example.com')
    await page.getByRole('textbox', { name: 'Email *' }).fill('jane.doe@example.com');
    
    // expect: Email is entered in the text field
    await expect(page.getByRole('textbox', { name: 'Email *' })).toHaveValue('jane.doe@example.com');

    // 5. Enter valid password meeting requirements (e.g., 'Test@1234')
    await page.getByRole('textbox', { name: 'Password *', exact: true }).fill('Test@1234');
    
    // expect: Password is entered (masked)
    await expect(page.getByRole('textbox', { name: 'Password *', exact: true })).toHaveValue('Test@1234');
    
    // expect: Password requirements message is visible: 'Min 8 chars, uppercase, lowercase, number, special char.'
    await expect(page.getByText('Min 8 chars, uppercase, lowercase, number, special char.')).toBeVisible();

    // 6. Enter matching password in Confirm Password field
    await page.getByRole('textbox', { name: 'Confirm Password *' }).fill('Test@1234');
    
    // expect: Confirm password is entered (masked)
    await expect(page.getByRole('textbox', { name: 'Confirm Password *' })).toHaveValue('Test@1234');

    // 7. Click the 'Sign Up' button
    await page.getByRole('button', { name: 'Sign Up' }).click();
    
    // expect: User account is created successfully
    // expect: User is redirected to the teacher dashboard
    // expect: Dashboard displays 'Dashboard Overview' heading
    await expect(page.getByRole('heading', { name: 'Dashboard Overview' })).toBeVisible();
    
    // expect: User information is shown in the sidebar (name and email)
    await expect(page.getByText('Jane Doe')).toBeVisible();
    await expect(page.getByText('jane.doe@example.com')).toBeVisible();
  });
});
