// spec: Student Management - Add Students Suite
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Student Management - Add Students Suite', () => {
  test('Add Student - Valid Student with Subjects and Marks', async ({ page }) => {
    // Generate unique roll number for this test run
    const uniqueRollNumber = `STU${Date.now().toString().slice(-6)}`;
    
    // 1. Navigate to the application and login with valid credentials (jane.doe@example.com / Test@1234)
    await page.goto('https://student-tracker-new.vercel.app/');
    await page.getByRole('textbox', { name: 'Email *' }).fill('jane.doe@example.com');
    await page.getByRole('textbox', { name: 'Password *' }).fill('Test@1234');
    await page.getByRole('button', { name: 'Login' }).click();
    
    // Expect: User is logged in and dashboard is displayed
    await expect(page.getByRole('heading', { name: 'Dashboard Overview' })).toBeVisible();
    
    // 2. Make sure at least one subject exists (add 'Mathematics' if needed)
    await page.getByRole('link', { name: 'Subjects' }).click();
    
    // Expect: Subject is available for student enrollment
    await expect(page.getByText('Mathematics')).toBeVisible();
    
    // 3. Navigate to the Students section by clicking 'Students' in the sidebar
    await page.getByRole('link', { name: 'Students' }).click();
    
    // Expect: Students page is displayed
    // Expect: Page shows 'Student List' or similar heading
    await expect(page.getByRole('heading', { name: 'Students' })).toBeVisible();
    
    // Expect: 'Add Student' button is visible
    await expect(page.getByRole('button', { name: 'Add Student' })).toBeVisible();
    
    // 4. Click the 'Add Student' button
    await page.getByRole('button', { name: 'Add Student' }).click();
    
    // Expect: Add Student form is displayed
    await expect(page.getByRole('heading', { name: 'Add New Student' })).toBeVisible();
    
    // Expect: Form shows fields for Full Name, Roll Number, Password, and Photo (optional)
    await expect(page.getByRole('textbox', { name: 'Full Name *' })).toBeVisible();
    
    // 5. Enter valid full name (e.g., 'John Smith')
    await page.getByRole('textbox', { name: 'Full Name *' }).fill('John Smith');
    
    // Expect: Full name is entered in the field
    await expect(page.getByRole('textbox', { name: 'Full Name *' })).toHaveValue('John Smith');
    
    // 6. Enter valid roll number (e.g., 'STU001')
    await page.getByRole('textbox', { name: 'Roll Number *' }).fill(uniqueRollNumber);
    
    // Expect: Roll number is entered in the field
    await expect(page.getByRole('textbox', { name: 'Roll Number *' })).toHaveValue(uniqueRollNumber);
    
    // 7. Enter valid password (e.g., 'Pass@1234')
    await page.getByRole('textbox', { name: 'Password *', exact: true }).fill('Pass@1234');
    await page.getByRole('textbox', { name: 'Confirm Password *' }).fill('Pass@1234');
    
    // Expect: Password is entered (masked)
    await expect(page.getByRole('textbox', { name: 'Password *', exact: true })).toHaveValue('Pass@1234');
    
    // 8. Select a subject (e.g., 'Mathematics') and enter marks (e.g., '85')
    await page.getByLabel('Subject Name *').selectOption(['Mathematics (MATH101)']);
    await page.getByRole('spinbutton', { name: 'Marks (0-100) *' }).fill('85');
    
    // Expect: Subject is selected
    // Expect: Marks are entered
    await expect(page.getByRole('spinbutton', { name: 'Marks (0-100) *' })).toHaveValue('85');
    
    // 9. Click the 'Save' or 'Add Student' button
    await page.getByRole('button', { name: 'Create Student' }).click();
    
    // Expect: Student is added successfully
    // Expect: Success message is displayed
    // Expect: New student appears in the students list
    await expect(page.getByText('John Smith').first()).toBeVisible();
    
    // Expect: Student details show correct information
    await expect(page.getByText(uniqueRollNumber)).toBeVisible();
    await expect(page.getByText('85%').first()).toBeVisible();
  });
});
