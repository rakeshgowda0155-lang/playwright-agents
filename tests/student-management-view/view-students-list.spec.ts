// spec: specs/student-tracker-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Student Management - View', () => {
  test('View Students List', async ({ page }) => {
    // 1. Log in as a teacher
    await page.goto('https://student-tracker-new.vercel.app');
    await page.getByRole('textbox', { name: 'Email *' }).fill('rakegowda015@gmail.com');
    await page.getByRole('textbox', { name: 'Password *' }).fill('Dell#549');
    await page.getByRole('button', { name: 'Login' }).click();

    // expect: User is logged in and redirected to the dashboard
    await expect(page.getByText('Dashboard Overview')).toBeVisible();

    // 2. Click the 'Students' link in the sidebar
    await page.getByRole('link', { name: 'Students' }).click();

    // expect: User is redirected to the Students List page
    // expect: Page shows 'Students List' heading
    await expect(page.getByRole('heading', { name: 'Students' })).toBeVisible();

    // expect: List displays all students with their information (Name, Email, Roll No, Phone, Pass/Fail status)
    await expect(page.getByText('Yashas')).toBeVisible();
    await expect(page.getByText('Lavonne Jacobs')).toBeVisible();
    await expect(page.getByText('Test Student')).toBeVisible();
    await expect(page.getByText('Student 01')).toBeVisible();
    await expect(page.getByRole('columnheader', { name: 'Roll No' })).toBeVisible();
    await expect(page.getByRole('columnheader', { name: 'Percentage' })).toBeVisible();
    await expect(page.getByRole('columnheader', { name: 'Grade' })).toBeVisible();

    // expect: Action buttons for View, Edit, Delete are visible for each student
    await expect(page.getByRole('columnheader', { name: 'Actions' })).toBeVisible();

    // expect: 'Add New Student' button is visible
    await expect(page.getByRole('button', { name: 'Add Student' })).toBeVisible();
  });
});
