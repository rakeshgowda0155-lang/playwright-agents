// spec: Subject Management Suite - Add Subject - Valid Subject
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Subject Management Suite', () => {
  test('Add Subject - Valid Subject', async ({ page }) => {
    // 1. Navigate to the application and login with valid credentials (jane.doe@example.com / Test@1234)
    await page.goto('https://student-tracker-new.vercel.app/');
    await page.getByRole('textbox', { name: 'Email *' }).fill('jane.doe@example.com');
    await page.getByRole('textbox', { name: 'Password *' }).fill('Test@1234');
    await page.getByRole('button', { name: 'Login' }).click();
    
    // expect: User is logged in and dashboard is displayed
    await expect(page.getByRole('heading', { name: 'Dashboard Overview' })).toBeVisible();

    // 2. Navigate to the Subjects section by clicking 'Subjects' in the sidebar
    await page.getByRole('link', { name: 'Subjects' }).click();
    
    // expect: Subjects page is displayed
    // expect: Page shows 'Subjects' heading
    await expect(page.getByRole('heading', { name: 'Manage Subjects' })).toBeVisible();
    
    // expect: 'Add Subject' button is visible
    await expect(page.getByRole('button', { name: 'Add Subject' })).toBeVisible();

    // 3. Click the 'Add Subject' button
    // expect: Add Subject form/modal is displayed
    // expect: Form shows 'Subject Name' and 'Subject Code' fields
    await expect(page.getByRole('textbox', { name: 'Subject Name *' })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Subject Code (Optional)' })).toBeVisible();

    // 4. Enter valid subject name (e.g., 'Mathematics')
    await page.getByRole('textbox', { name: 'Subject Name *' }).fill('Mathematics');
    
    // expect: Subject name is entered in the field
    await expect(page.getByRole('textbox', { name: 'Subject Name *' })).toHaveValue('Mathematics');

    // 5. Enter optional subject code (e.g., 'MATH101')
    await page.getByRole('textbox', { name: 'Subject Code (Optional)' }).fill('MATH101');
    
    // expect: Subject code is entered in the field
    await expect(page.getByRole('textbox', { name: 'Subject Code (Optional)' })).toHaveValue('MATH101');

    // 6. Click the 'Add' or 'Save' button
    await page.getByRole('button', { name: 'Add Subject' }).click();
    
    // expect: Subject is added successfully
    // expect: Success message or confirmation is displayed
    // expect: New subject appears in the subjects list
    await expect(page.getByText('Mathematics')).toBeVisible();
    await expect(page.getByText('MATH101')).toBeVisible();
    
    // expect: Subject count is updated
    await expect(page.getByRole('heading', { name: 'Existing Subjects (1)' })).toBeVisible();
  });
});
