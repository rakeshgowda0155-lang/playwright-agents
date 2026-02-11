// spec: specs/student-tracker-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Student Management - Add', () => {
  test('Add New Student Successfully', async ({ page }) => {
    // Navigate to the application
    await page.goto('https://student-tracker-new.vercel.app');

    // 1. Log in as a teacher
    await page.getByRole('textbox', { name: 'Email *' }).fill('rakegowda015@gmail.com');
    await page.getByRole('textbox', { name: 'Password *' }).fill('Dell#549');
    await page.getByRole('button', { name: 'Login' }).click();

    // expect: User is logged in and redirected to the dashboard
    await expect(page.getByRole('heading', { name: 'Dashboard Overview' })).toBeVisible();

    // 2. Click the 'Add Student' link in the sidebar
    await page.getByRole('link', { name: 'Add Student' }).click();

    // expect: User is redirected to the Add Student page
    // expect: Page shows 'Add New Student' heading
    await expect(page.getByRole('heading', { name: 'Add New Student' })).toBeVisible();

    // expect: Form displays fields: Name, Roll Number, Email, Phone, Password, Photo URL
    await expect(page.getByRole('textbox', { name: 'Full Name *' })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Roll Number *' })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Password *' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Photo (Optional)' })).toBeVisible();

    // expect: At least one Subject section is visible with Subject Name and Marks fields
    await expect(page.getByRole('combobox', { name: 'Subject Name *' })).toBeVisible();
    await expect(page.getByRole('spinbutton', { name: 'Marks (0-100) *' })).toBeVisible();

    // 3. Enter student information
    await page.getByRole('textbox', { name: 'Full Name *' }).fill('John Doe');
    await page.getByRole('textbox', { name: 'Roll Number *' }).fill('ST1005');
    await page.getByRole('textbox', { name: 'Password *', exact: true }).fill('JohnPass123!');
    await page.getByRole('textbox', { name: 'Confirm Password *' }).fill('JohnPass123!');

    // expect: All fields accept the input
    await expect(page.getByRole('textbox', { name: 'Full Name *' })).toHaveValue('John Doe');
    await expect(page.getByRole('textbox', { name: 'Roll Number *' })).toHaveValue('ST1005');
    await expect(page.getByRole('textbox', { name: 'Password *', exact: true })).toHaveValue('JohnPass123!');

    // 4. Enter subject information
    await page.getByLabel('Subject Name *').selectOption(['Biology (BIO01)']);
    await page.getByRole('spinbutton', { name: 'Marks (0-100) *' }).fill('85');

    // expect: Subject and marks fields accept the input
    await expect(page.getByRole('spinbutton', { name: 'Marks (0-100) *' })).toHaveValue('85');

    // 5. Click the 'Add Student' button
    await page.getByRole('button', { name: 'Create Student' }).click();

    // Wait for navigation and loading to complete
    await page.getByText("Loading...").first().waitFor({ state: 'hidden' });

    // expect: Success message 'Student added successfully' is displayed
    // expect: User is redirected to the Students List page
    await expect(page.getByRole('heading', { name: 'Students' })).toBeVisible();

    // expect: New student 'John Doe' appears in the list
    await expect(page.getByText('John Doe')).toBeVisible();
  });
});
