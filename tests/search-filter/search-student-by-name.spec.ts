// spec: Search and Filter Suite - Search Student by Name
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Search and Filter Suite', () => {
  test('Search Student by Name', async ({ page }) => {
    // 1. Navigate to the application and login with valid credentials (jane.doe@example.com / Test@1234)
    await page.goto('https://student-tracker-new.vercel.app/');
    await page.getByRole('textbox', { name: 'Email *' }).fill('jane.doe@example.com');
    await page.getByRole('textbox', { name: 'Password *' }).fill('Test@1234');
    await page.getByRole('button', { name: 'Login' }).click();
    
    // Expect: User is logged in and dashboard is displayed
    await expect(page.getByRole('heading', { name: 'Dashboard Overview' })).toBeVisible();
    
    // 2. Ensure at least one student exists in the system (John Smith with roll STU001 already exists)
    // Note: Student is already available in the database
    
    // 3. Navigate to the Students section
    await page.getByRole('link', { name: 'Students' }).click();
    
    // Expect: Students page is displayed
    await expect(page.getByRole('heading', { name: 'Students' })).toBeVisible();
    
    // Expect: Student list shows existing students
    await expect(page.getByText('John Smith').first()).toBeVisible();
    
    // 4. Locate the search field (labeled 'Search by name or roll number')
    // Expect: Search field is visible
    await expect(page.getByRole('textbox', { name: 'Search by name or roll number...' })).toBeVisible();
    
    // 5. Enter a search term (e.g., 'John')
    const searchField = page.getByRole('textbox', { name: 'Search by name or roll number' });
    await searchField.fill('John');
    
    // Expect: Search term is entered in the field
    await expect(searchField).toHaveValue('John');
    
    // 6. Observe the search results
    // Expect: Search results update automatically (real-time search)
    // Expect: Only students matching the search term are displayed
    // Expect: Student 'John Smith' is visible in the filtered results
    await expect(page.getByText('John Smith').first()).toBeVisible();
    
    // Expect: Students not matching the search term are not visible (verify with non-matching search)
    await searchField.fill('xyz');
    await expect(page.getByText('No students found.')).toBeVisible();
    
    // Return to successful search
    await searchField.fill('John');
    await expect(page.getByText('John Smith').first()).toBeVisible();
    
    // 7. Clear the search field
    await searchField.fill('');
    
    // Expect: Search field is cleared
    await expect(searchField).toHaveValue('');
    
    // Expect: All students are displayed again
    await expect(page.getByText('John Smith').first()).toBeVisible();
  });
});
