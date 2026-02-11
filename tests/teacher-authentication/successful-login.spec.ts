// spec: specs/student-tracker-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Teacher Authentication', () => {
  test('Successful Teacher Login', async ({ page }) => {
    // 1. Navigate to the application URL (https://student-tracker-new.vercel.app)
    await page.goto('https://student-tracker-new.vercel.app');

    // expect: The page redirects to the Teacher Login page
    // expect: The page title displays 'Teacher Login - Student Tracker'
    await expect(page.getByText('Teacher Login')).toBeVisible();

    // expect: Login form with Email and Password fields is visible
    await expect(page.getByRole('textbox', { name: 'Email *' })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Password *' })).toBeVisible();

    // 2. Enter valid email 'rakegowda015@gmail.com' in the Email field
    await page.getByRole('textbox', { name: 'Email *' }).fill('rakegowda015@gmail.com');

    // expect: Email field accepts the input
    await expect(page.getByRole('textbox', { name: 'Email *' })).toHaveValue('rakegowda015@gmail.com');

    // 3. Enter valid password 'Dell#549' in the Password field
    await page.getByRole('textbox', { name: 'Password *' }).fill('Dell#549');

    // expect: Password field accepts the input and displays masked characters
    await expect(page.getByRole('textbox', { name: 'Password *' })).toHaveValue('Dell#549');

    // 4. Click the 'Login' button
    await page.getByRole('button', { name: 'Login' }).click();

    // Wait for dashboard to fully load
    await page.getByText("Loading stats...").first().waitFor({ state: 'hidden' });

    // expect: User is redirected to the Teacher Dashboard
    await expect(page.getByRole('heading', { name: 'Dashboard Overview' })).toBeVisible();

    // expect: Dashboard displays welcome message with teacher name
    await expect(page.getByText('Welcome back, here\'s how your class is performing.')).toBeVisible();

    // expect: Dashboard shows statistics: Total Students, Passed, Failed, Average Percentage
    await expect(page.getByText('Total Students')).toBeVisible();
    await expect(page.getByText('Passed')).toBeVisible();
    await expect(page.getByText('Failed')).toBeVisible();
    await expect(page.getByText('Avg Percentage')).toBeVisible();

    // expect: Dashboard shows attendance statistics for today
    await expect(page.getByText('Today Present')).toBeVisible();
    await expect(page.getByText('Today Absent')).toBeVisible();

    // expect: Grade Distribution chart is visible
    await expect(page.getByRole('heading', { name: 'Grade Distribution' })).toBeVisible();

    // expect: Navigation sidebar is visible with Dashboard, Students, Add Student, Subjects, and Attendance links
    await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Students' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Add Student' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Subjects' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Attendance' })).toBeVisible();
  });
});
