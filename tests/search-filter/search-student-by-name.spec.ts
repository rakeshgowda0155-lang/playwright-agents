// spec: Search and Filter Suite - Search Student by Name
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Search and Filter Suite', () => {
  test('Search Student by Name', async ({ page }) => {
    // Generate unique identifiers for this test run
    const uniqueStudentName = 'John Smith';
    const uniqueRollNumber = `STU${Date.now().toString().slice(-6)}`;
    const uniqueSubjectName = `Math${Date.now().toString().slice(-6)}`;
    const uniqueSubjectCode = `MATH${Date.now().toString().slice(-4)}`;
    
    // 1. Navigate to the application and login with valid credentials (jane.doe@example.com / Test@1234)
    await page.goto('https://student-tracker-new.vercel.app/');
    await page.getByRole('textbox', { name: 'Email *' }).fill('jane.doe@example.com');
    await page.getByRole('textbox', { name: 'Password *' }).fill('Test@1234');
    await page.getByRole('button', { name: 'Login' }).click();
    
    // Expect: User is logged in and dashboard is displayed
    await expect(page.getByRole('heading', { name: 'Dashboard Overview' })).toBeVisible();
    
    // 2. Create test data - Add a subject and student
    // Create subject first
    await page.getByRole('link', { name: 'Subjects' }).click();
    await page.getByRole('textbox', { name: 'Subject Name *' }).fill(uniqueSubjectName);
    await page.getByRole('textbox', { name: 'Subject Code (Optional)' }).fill(uniqueSubjectCode);
    await page.getByRole('button', { name: 'Add Subject' }).click();
    await expect(page.getByText(uniqueSubjectName).first()).toBeVisible();
    
    // Create student
    await page.getByRole('link', { name: 'Students' }).click();
    await page.getByRole('button', { name: 'Add Student' }).click();
    await page.getByRole('textbox', { name: 'Full Name *' }).fill(uniqueStudentName);
    await page.getByRole('textbox', { name: 'Roll Number *' }).fill(uniqueRollNumber);
    await page.getByRole('textbox', { name: 'Password *', exact: true }).fill('Pass@1234');
    await page.getByRole('textbox', { name: 'Confirm Password *' }).fill('Pass@1234');
    const subjectOption = `${uniqueSubjectName} (${uniqueSubjectCode})`;
    await page.getByLabel('Subject Name *').selectOption([subjectOption]);
    await page.getByRole('spinbutton', { name: 'Marks (0-100) *' }).fill('85');
    await page.getByRole('button', { name: 'Create Student' }).click();
    
    // Expect: Student is created successfully
    await expect(page.getByText(uniqueStudentName).first()).toBeVisible();
    
    // 3. Navigate to the Students section (already there)
    // Expect: Students page is displayed
    await expect(page.getByRole('heading', { name: 'Students' })).toBeVisible();
    
    // Expect: Student list shows existing students
    await expect(page.getByText(uniqueStudentName).first()).toBeVisible();
    
    // 4. Locate the search field (using placeholder as it's more reliable)
    // Expect: Search field is visible
    const searchField = page.getByPlaceholder(/Search by name or roll number/i);
    await expect(searchField).toBeVisible();
    
    // 5. Enter a search term (e.g., 'John')
    await searchField.fill('John');
    
    // Expect: Search term is entered in the field
    await expect(searchField).toHaveValue('John');
    
    // 6. Observe the search results
    // Expect: Search results update automatically (real-time search)
    // Expect: Only students matching the search term are displayed
    // Expect: Student 'John Smith' is visible in the filtered results
    await expect(page.getByText(uniqueStudentName).first()).toBeVisible();
    
    // Expect: Students not matching the search term are not visible (verify with non-matching search)
    await searchField.fill('xyz');
    await expect(page.getByText(/No students found/i)).toBeVisible();
    
    // Return to successful search
    await searchField.fill('John');
    await expect(page.getByText(uniqueStudentName).first()).toBeVisible();
    
    // 7. Clear the search field
    await searchField.fill('');
    
    // Expect: Search field is cleared
    await expect(searchField).toHaveValue('');
    
    // Expect: All students are displayed again
    await expect(page.getByText(uniqueStudentName).first()).toBeVisible();
  });
});
