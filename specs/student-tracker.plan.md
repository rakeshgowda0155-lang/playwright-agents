# Student Tracker Application - Comprehensive Test Plan

## Application Overview

The Student Tracker application is a teacher portal for managing students, subjects, grades, and attendance. It provides features for teacher authentication, student management with marks tracking, subject management, and attendance tracking. The application calculates student grades, percentages, and provides statistical dashboards with visualizations.

## Test Scenarios

### 1. Authentication Suite

**Seed:** `tests/seed.spec.ts`

#### 1.1. Teacher Signup - Valid Registration

**File:** `tests/authentication/teacher-signup-valid.spec.ts`

**Steps:**
  1. Navigate to the application root URL
    - expect: User is redirected to the teacher login page
    - expect: Page displays 'Teacher Login' heading
    - expect: Login form is visible with Email and Password fields
  2. Click on the 'Sign up' link
    - expect: User is redirected to the teacher signup page
    - expect: Page displays 'Teacher Signup' heading
    - expect: Signup form is visible with all required fields: Full Name, Email, Password, Confirm Password
  3. Enter valid full name (e.g., 'Jane Doe')
    - expect: Full name is entered in the text field
  4. Enter valid email (e.g., 'jane.doe@example.com')
    - expect: Email is entered in the text field
  5. Enter valid password meeting requirements (e.g., 'Test@1234')
    - expect: Password is entered (masked)
    - expect: Password requirements message is visible: 'Min 8 chars, uppercase, lowercase, number, special char.'
  6. Enter matching password in Confirm Password field
    - expect: Confirm password is entered (masked)
  7. Click the 'Sign Up' button
    - expect: User account is created successfully
    - expect: User is redirected to the teacher dashboard
    - expect: Dashboard displays 'Dashboard Overview' heading
    - expect: User information is shown in the sidebar (name and email)

#### 1.2. Teacher Signup - Password Validation

**File:** `tests/authentication/teacher-signup-password-validation.spec.ts`

**Steps:**
  1. Navigate to the teacher signup page
    - expect: Signup form is displayed
  2. Enter valid full name and email
    - expect: Fields are filled correctly
  3. Enter a weak password that doesn't meet requirements (e.g., 'weak')
    - expect: Password is entered
  4. Enter matching weak password in Confirm Password field
    - expect: Confirm password is entered
  5. Click the 'Sign Up' button
    - expect: Form validation error is displayed
    - expect: User is not able to create account
    - expect: Error message indicates password requirements not met

#### 1.3. Teacher Signup - Password Mismatch

**File:** `tests/authentication/teacher-signup-password-mismatch.spec.ts`

**Steps:**
  1. Navigate to the teacher signup page
    - expect: Signup form is displayed
  2. Enter valid full name, email, and password
    - expect: Fields are filled correctly
  3. Enter a different password in Confirm Password field
    - expect: Different password is entered
  4. Click the 'Sign Up' button
    - expect: Form validation error is displayed
    - expect: Error message indicates passwords do not match
    - expect: User account is not created

#### 1.4. Teacher Signup - Duplicate Email

**File:** `tests/authentication/teacher-signup-duplicate-email.spec.ts`

**Steps:**
  1. Navigate to the teacher signup page
    - expect: Signup form is displayed
  2. Enter an email that is already registered
    - expect: Email is entered
  3. Fill in other required fields with valid data
    - expect: All fields are filled
  4. Click the 'Sign Up' button
    - expect: Error message is displayed indicating email is already in use
    - expect: User account is not created
    - expect: User remains on signup page

#### 1.5. Teacher Login - Valid Credentials

**File:** `tests/authentication/teacher-login-valid.spec.ts`

**Steps:**
  1. Navigate to the teacher login page
    - expect: Login form is displayed with Email and Password fields
  2. Enter valid registered email
    - expect: Email is entered in the field
  3. Enter correct password
    - expect: Password is entered (masked)
  4. Click the 'Login' button
    - expect: User is authenticated successfully
    - expect: User is redirected to the teacher dashboard
    - expect: Dashboard displays user's name and statistics

#### 1.6. Teacher Login - Invalid Credentials

**File:** `tests/authentication/teacher-login-invalid.spec.ts`

**Steps:**
  1. Navigate to the teacher login page
    - expect: Login form is displayed
  2. Enter email and incorrect password
    - expect: Fields are filled
  3. Click the 'Login' button
    - expect: Error message is displayed indicating invalid credentials
    - expect: User remains on login page
    - expect: User is not authenticated

#### 1.7. Teacher Login - Password Visibility Toggle

**File:** `tests/authentication/teacher-login-password-toggle.spec.ts`

**Steps:**
  1. Navigate to the teacher login page
    - expect: Login form is displayed
  2. Enter password in the password field
    - expect: Password is entered and masked (shown as dots)
  3. Click the password visibility toggle button (eye icon)
    - expect: Password becomes visible as plain text
  4. Click the password visibility toggle button again
    - expect: Password is masked again

#### 1.8. Teacher Logout

**File:** `tests/authentication/teacher-logout.spec.ts`

**Steps:**
  1. Login as a teacher and navigate to dashboard
    - expect: User is logged in and on dashboard
  2. Click the 'Logout' button in the sidebar
    - expect: User is logged out successfully
    - expect: User is redirected to the teacher login page
    - expect: User session is terminated
  3. Attempt to navigate to dashboard URL directly
    - expect: User is redirected to login page
    - expect: Dashboard is not accessible without authentication

#### 1.9. Navigation Between Login and Signup

**File:** `tests/authentication/navigation-login-signup.spec.ts`

**Steps:**
  1. Navigate to the teacher login page
    - expect: Login page is displayed
  2. Click on the 'Sign up' link
    - expect: User is navigated to the signup page
  3. Click on the 'Login' link on signup page
    - expect: User is navigated back to the login page

### 2. Subject Management Suite

**Seed:** `tests/seed.spec.ts`

#### 2.1. Add Subject - Valid Data

**File:** `tests/subjects/add-subject-valid.spec.ts`

**Steps:**
  1. Login as teacher and navigate to Subjects page
    - expect: Subjects page is displayed
    - expect: Page shows 'Manage Subjects' heading
    - expect: Form to add new subject is visible
  2. Enter a valid subject name (e.g., 'Mathematics')
    - expect: Subject name is entered in the text field
  3. Enter an optional subject code (e.g., 'MATH101')
    - expect: Subject code is entered in the text field
  4. Click the 'Add Subject' button
    - expect: Success message 'Subject added' is displayed
    - expect: New subject appears in the 'Existing Subjects' table
    - expect: Subject count is incremented
    - expect: Form fields are cleared

#### 2.2. Add Subject - Without Code

**File:** `tests/subjects/add-subject-no-code.spec.ts`

**Steps:**
  1. Navigate to Subjects page
    - expect: Subjects page is displayed
  2. Enter a valid subject name without entering subject code
    - expect: Subject name is entered, code field is empty
  3. Click the 'Add Subject' button
    - expect: Subject is added successfully
    - expect: Subject appears in the table with name and empty code
    - expect: Success message is displayed

#### 2.3. Add Subject - Empty Name Validation

**File:** `tests/subjects/add-subject-empty-name.spec.ts`

**Steps:**
  1. Navigate to Subjects page
    - expect: Subjects page is displayed
  2. Leave subject name field empty
    - expect: Subject name field is empty
  3. Click the 'Add Subject' button
    - expect: Validation error is displayed
    - expect: Error indicates subject name is required
    - expect: Subject is not added to the list

#### 2.4. Add Multiple Subjects

**File:** `tests/subjects/add-multiple-subjects.spec.ts`

**Steps:**
  1. Navigate to Subjects page
    - expect: Subjects page is displayed with subject count showing 0
  2. Add first subject (e.g., 'Mathematics', 'MATH101')
    - expect: Subject is added, count shows 1
  3. Add second subject (e.g., 'Science', 'SCI101')
    - expect: Subject is added, count shows 2
  4. Add third subject (e.g., 'English', 'ENG101')
    - expect: Subject is added, count shows 3
    - expect: All three subjects are visible in the subjects table

#### 2.5. Delete Subject

**File:** `tests/subjects/delete-subject.spec.ts`

**Steps:**
  1. Navigate to Subjects page with existing subjects
    - expect: Subjects page displays list of subjects
  2. Click the delete button (trash icon) for a subject
    - expect: Confirmation dialog appears asking to confirm deletion
  3. Confirm the deletion
    - expect: Subject is removed from the list
    - expect: Subject count is decremented
    - expect: Success message is displayed

#### 2.6. Delete Subject - Cancel

**File:** `tests/subjects/delete-subject-cancel.spec.ts`

**Steps:**
  1. Navigate to Subjects page with existing subjects
    - expect: Subjects page displays list of subjects
  2. Click the delete button for a subject
    - expect: Confirmation dialog appears
  3. Cancel the deletion
    - expect: Subject remains in the list
    - expect: No changes are made
    - expect: Dialog is closed

#### 2.7. Subjects Display in Student Form

**File:** `tests/subjects/subjects-display-student-form.spec.ts`

**Steps:**
  1. Add multiple subjects in Subjects page
    - expect: Subjects are added successfully
  2. Navigate to Add Student page
    - expect: Add Student form is displayed
  3. Check the Subject Name dropdown in the Subjects & Marks section
    - expect: Dropdown displays all created subjects with their codes
    - expect: Subjects are formatted as 'SubjectName (SubjectCode)'
    - expect: Default option 'Select Subject' is displayed

### 3. Student Management - Add Student Suite

**Seed:** `tests/seed.spec.ts`

#### 3.1. Add Student - Complete Valid Data

**File:** `tests/students/add-student-complete.spec.ts`

**Steps:**
  1. Login as teacher and add at least one subject first
    - expect: Subject is available in the system
  2. Navigate to Add Student page via navigation menu
    - expect: Add Student page is displayed
    - expect: Page shows 'Add New Student' heading
    - expect: Form sections for Basic Information and Subjects & Marks are visible
  3. Enter valid full name (e.g., 'John Smith')
    - expect: Full name is entered
  4. Enter valid roll number (e.g., '001')
    - expect: Roll number is entered
  5. Enter valid password meeting requirements (e.g., 'Student@123')
    - expect: Password is entered with requirements displayed
  6. Enter matching password in Confirm Password field
    - expect: Confirm password is entered
  7. Select a subject from the dropdown (e.g., 'Mathematics (MATH101)')
    - expect: Subject is selected
  8. Enter marks between 0-100 (e.g., '85')
    - expect: Marks are entered in the spinbutton
  9. Click 'Add Subject' button to add another subject
    - expect: New subject row is added
    - expect: Additional subject dropdown and marks fields appear
  10. Fill in the second subject with valid data (e.g., 'Science (SCI101)', '92')
    - expect: Second subject and marks are entered
  11. Click the 'Create Student' button
    - expect: Student is created successfully
    - expect: User is redirected to Students list page
    - expect: New student appears in the students table
    - expect: Student's calculated percentage and grade are displayed correctly

#### 3.2. Add Student - Without Subjects Warning

**File:** `tests/students/add-student-no-subjects-defined.spec.ts`

**Steps:**
  1. Login as teacher without adding any subjects
    - expect: No subjects exist in the system
  2. Navigate to Add Student page
    - expect: Add Student form is displayed
  3. Check the Subjects & Marks section
    - expect: Warning message is displayed: 'No subjects found. Create subjects first.'
    - expect: Link to 'Create subjects' is provided
    - expect: Note is displayed: 'You must define subjects in the "Subjects" tab before adding marks.'
  4. Fill in all basic information fields with valid data
    - expect: Basic information is entered
  5. Attempt to click 'Create Student' button
    - expect: Create Student button is disabled
    - expect: Student cannot be created without at least one subject

#### 3.3. Add Student - Password Validation

**File:** `tests/students/add-student-password-validation.spec.ts`

**Steps:**
  1. Navigate to Add Student page
    - expect: Add Student form is displayed
  2. Fill in name and roll number
    - expect: Fields are filled
  3. Enter a weak password (e.g., 'weak123')
    - expect: Password is entered
  4. Enter matching weak password in confirm field
    - expect: Confirm password is entered
  5. Fill in subject and marks
    - expect: Subject data is entered
  6. Click 'Create Student' button
    - expect: Validation error is displayed
    - expect: Error indicates password doesn't meet requirements
    - expect: Student is not created

#### 3.4. Add Student - Password Mismatch

**File:** `tests/students/add-student-password-mismatch.spec.ts`

**Steps:**
  1. Navigate to Add Student page
    - expect: Add Student form is displayed
  2. Fill in all fields with valid data
    - expect: All fields are filled
  3. Enter different passwords in Password and Confirm Password fields
    - expect: Passwords don't match
  4. Click 'Create Student' button
    - expect: Validation error is displayed
    - expect: Error indicates passwords do not match
    - expect: Student is not created

#### 3.5. Add Student - Duplicate Roll Number

**File:** `tests/students/add-student-duplicate-roll.spec.ts`

**Steps:**
  1. Add a student with roll number '001'
    - expect: Student is created successfully
  2. Navigate to Add Student page again
    - expect: Add Student form is displayed
  3. Fill in form with valid data but use the same roll number '001'
    - expect: All fields are filled
  4. Click 'Create Student' button
    - expect: Error message is displayed indicating roll number already exists
    - expect: Student is not created

#### 3.6. Add Student - Invalid Marks Range

**File:** `tests/students/add-student-invalid-marks.spec.ts`

**Steps:**
  1. Navigate to Add Student page
    - expect: Add Student form is displayed
  2. Fill in all basic information with valid data
    - expect: Basic information is entered
  3. Select a subject
    - expect: Subject is selected
  4. Enter marks outside the valid range (e.g., '150' or '-10')
    - expect: Invalid value is entered
  5. Attempt to create student
    - expect: Validation error is displayed
    - expect: Error indicates marks must be between 0-100
    - expect: Student is not created

#### 3.7. Add Student - Multiple Subjects

**File:** `tests/students/add-student-multiple-subjects.spec.ts`

**Steps:**
  1. Add multiple subjects (Math, Science, English, History) in Subjects page
    - expect: All subjects are added
  2. Navigate to Add Student page
    - expect: Add Student form is displayed
  3. Fill in basic information
    - expect: Basic information is entered
  4. Add first subject with marks (Math: 85)
    - expect: First subject is added
  5. Click 'Add Subject' and add second subject (Science: 92)
    - expect: Second subject is added
  6. Click 'Add Subject' and add third subject (English: 78)
    - expect: Third subject is added
  7. Click 'Add Subject' and add fourth subject (History: 88)
    - expect: Fourth subject is added
  8. Click 'Create Student' button
    - expect: Student is created successfully
    - expect: Student's overall percentage is calculated correctly from all subjects
    - expect: Correct grade is assigned based on percentage

#### 3.8. Add Student - Remove Subject Row

**File:** `tests/students/add-student-remove-subject.spec.ts`

**Steps:**
  1. Navigate to Add Student page
    - expect: Add Student form is displayed
  2. Fill in basic information
    - expect: Basic information is entered
  3. Add first subject
    - expect: Subject row exists
  4. Click 'Add Subject' to add a second subject row
    - expect: Second subject row is added
  5. Click the delete button on the second subject row
    - expect: Second subject row is removed
    - expect: Only first subject row remains
    - expect: Form can still be submitted

#### 3.9. Add Student - Photo Upload (Optional)

**File:** `tests/students/add-student-photo-upload.spec.ts`

**Steps:**
  1. Navigate to Add Student page
    - expect: Add Student form is displayed
  2. Fill in all required fields
    - expect: All required fields are filled
  3. Click the 'Photo (Optional)' button
    - expect: File picker dialog opens
  4. Select a valid image file
    - expect: Image is uploaded
    - expect: Preview or filename is shown
  5. Create the student
    - expect: Student is created with photo
    - expect: Photo is displayed in student details

#### 3.10. Add Student - Same Subject Twice Validation

**File:** `tests/students/add-student-duplicate-subject.spec.ts`

**Steps:**
  1. Navigate to Add Student page
    - expect: Add Student form is displayed
  2. Fill in basic information
    - expect: Basic information is entered
  3. Select 'Mathematics' as first subject with marks
    - expect: First subject is selected
  4. Add another subject row
    - expect: Second subject row is added
  5. Try to select 'Mathematics' again in the second row
    - expect: Error message is displayed indicating subject already selected
    - expect: Or the subject is disabled in the dropdown
    - expect: Student cannot be created with duplicate subjects

### 4. Student Management - View and List Suite

**Seed:** `tests/seed.spec.ts`

#### 4.1. View Students List

**File:** `tests/students/view-students-list.spec.ts`

**Steps:**
  1. Login as teacher and add multiple students
    - expect: Students are added to the system
  2. Navigate to Students page
    - expect: Students page is displayed
    - expect: Page shows 'Students' heading
    - expect: Table with columns: Student, Roll No, Percentage, Grade, Actions is visible
    - expect: All added students are listed in the table
  3. Verify student information in the list
    - expect: Each student row displays name, roll number, percentage, and grade
    - expect: Action buttons (View, Edit, Delete) are visible for each student

#### 4.2. View Empty Students List

**File:** `tests/students/view-empty-students-list.spec.ts`

**Steps:**
  1. Login as teacher without adding any students
    - expect: No students exist in the system
  2. Navigate to Students page
    - expect: Students page is displayed
    - expect: Table structure is visible
    - expect: Message 'No students found.' is displayed in the table

#### 4.3. View Student Details

**File:** `tests/students/view-student-details.spec.ts`

**Steps:**
  1. Navigate to Students list page with existing students
    - expect: Students are listed
  2. Click the View button (eye icon) for a student
    - expect: User is redirected to Student Details page
    - expect: Page shows 'Student Details' heading
    - expect: Student's avatar/initial is displayed
    - expect: Basic information section shows: Full Name, Roll Number, Total Marks, Percentage
    - expect: Overall Grade and Percentage are prominently displayed
    - expect: Subjects table shows all subjects with marks obtained and max marks
    - expect: Total row shows sum of all marks
    - expect: 'Download PDF Result' button is visible
    - expect: 'Edit Student' button is visible

#### 4.4. View Student Details - Grade Calculation

**File:** `tests/students/view-student-grade-calculation.spec.ts`

**Steps:**
  1. Add a student with specific marks to achieve grade A (e.g., 85%)
    - expect: Student is added
  2. View the student details
    - expect: Grade displayed is 'A'
    - expect: Percentage is calculated correctly
  3. Add another student with failing marks (e.g., 45%)
    - expect: Student is added
  4. View the failing student details
    - expect: Grade displayed is 'F'
    - expect: Percentage is calculated correctly

#### 4.5. Navigate Back from Student Details

**File:** `tests/students/navigate-back-student-details.spec.ts`

**Steps:**
  1. View a student's details page
    - expect: Student details are displayed
  2. Click the 'Back' button
    - expect: User is navigated back to Students list page
    - expect: All students are still visible in the list

#### 4.6. Download Student PDF Result

**File:** `tests/students/download-student-pdf.spec.ts`

**Steps:**
  1. Navigate to a student's details page
    - expect: Student details page is displayed
  2. Click the 'Download PDF Result' button
    - expect: PDF download is initiated
    - expect: PDF file contains student information, marks, and grade

### 5. Student Management - Edit and Delete Suite

**Seed:** `tests/seed.spec.ts`

#### 5.1. Edit Student - Update Name

**File:** `tests/students/edit-student-name.spec.ts`

**Steps:**
  1. Navigate to Students list page
    - expect: Students are listed
  2. Click the Edit button (pencil icon) for a student
    - expect: User is redirected to Edit Student page
    - expect: Page shows 'Edit Student' heading
    - expect: Form is pre-filled with existing student data
    - expect: Full Name field contains current student name
  3. Update the student's full name to a new value
    - expect: New name is entered in the field
  4. Click the 'Update Student' button
    - expect: Student information is updated
    - expect: User is redirected to Students list page
    - expect: Updated name is displayed in the students table

#### 5.2. Edit Student - Roll Number Read-Only

**File:** `tests/students/edit-student-roll-readonly.spec.ts`

**Steps:**
  1. Navigate to Edit Student page for any student
    - expect: Edit form is displayed
  2. Check the Roll Number field
    - expect: Roll Number field is disabled/read-only
    - expect: Message is displayed: 'Roll number cannot be changed'
    - expect: User cannot modify the roll number

#### 5.3. Edit Student - Update Password

**File:** `tests/students/edit-student-password.spec.ts`

**Steps:**
  1. Navigate to Edit Student page
    - expect: Edit form is displayed
  2. Enter a new password in the 'New Password (Optional)' field
    - expect: New password is entered
    - expect: Confirm New Password field becomes enabled
  3. Enter matching password in Confirm New Password field
    - expect: Confirm password is entered
  4. Click 'Update Student' button
    - expect: Student password is updated successfully
    - expect: Success message is displayed

#### 5.4. Edit Student - Leave Password Blank

**File:** `tests/students/edit-student-password-unchanged.spec.ts`

**Steps:**
  1. Navigate to Edit Student page
    - expect: Edit form is displayed
  2. Leave the 'New Password (Optional)' field blank
    - expect: Password fields remain empty
  3. Update other fields (e.g., name) and click 'Update Student'
    - expect: Student is updated successfully
    - expect: Password remains unchanged from the original

#### 5.5. Edit Student - Update Marks

**File:** `tests/students/edit-student-marks.spec.ts`

**Steps:**
  1. Navigate to Edit Student page
    - expect: Edit form shows existing subjects and marks
  2. Change marks for an existing subject (e.g., change Math from 85 to 90)
    - expect: New marks are entered
  3. Click 'Update Student' button
    - expect: Student marks are updated
    - expect: Percentage and grade are recalculated
    - expect: Updated information is reflected in students list

#### 5.6. Edit Student - Add Subject

**File:** `tests/students/edit-student-add-subject.spec.ts`

**Steps:**
  1. Navigate to Edit Student page for a student with 2 subjects
    - expect: Edit form shows 2 existing subjects
  2. Click 'Add Subject' button
    - expect: New subject row is added
  3. Select a new subject and enter marks
    - expect: Third subject is selected with marks
  4. Click 'Update Student' button
    - expect: Student is updated with the new subject
    - expect: Percentage and grade are recalculated based on all 3 subjects

#### 5.7. Edit Student - Remove Subject

**File:** `tests/students/edit-student-remove-subject.spec.ts`

**Steps:**
  1. Navigate to Edit Student page for a student with multiple subjects
    - expect: Edit form shows all subjects
  2. Click the delete button for one of the subject rows
    - expect: Subject row is removed from the form
  3. Click 'Update Student' button
    - expect: Student is updated without that subject
    - expect: Percentage and grade are recalculated based on remaining subjects

#### 5.8. Edit Student - Cancel

**File:** `tests/students/edit-student-cancel.spec.ts`

**Steps:**
  1. Navigate to Edit Student page
    - expect: Edit form is displayed
  2. Make changes to any fields
    - expect: Fields are modified
  3. Click the 'Cancel' button
    - expect: User is redirected to Students list page
    - expect: No changes are saved
    - expect: Student information remains unchanged

#### 5.9. Delete Student

**File:** `tests/students/delete-student.spec.ts`

**Steps:**
  1. Navigate to Students list page with existing students
    - expect: Students are listed
  2. Click the Delete button (trash icon) for a student
    - expect: Confirmation dialog appears asking to confirm deletion
  3. Confirm the deletion
    - expect: Student is removed from the list
    - expect: Success message is displayed
    - expect: Student count in dashboard is updated

#### 5.10. Delete Student - Cancel

**File:** `tests/students/delete-student-cancel.spec.ts`

**Steps:**
  1. Navigate to Students list page
    - expect: Students are listed
  2. Click the Delete button for a student
    - expect: Confirmation dialog appears
  3. Cancel the deletion
    - expect: Dialog is closed
    - expect: Student remains in the list
    - expect: No changes are made

### 6. Search and Filter Suite

**Seed:** `tests/seed.spec.ts`

#### 6.1. Search Students by Name

**File:** `tests/search/search-by-name.spec.ts`

**Steps:**
  1. Add multiple students with different names (e.g., John Smith, Sarah Johnson, Mike Wilson)
    - expect: Multiple students are added
  2. Navigate to Students list page
    - expect: All students are displayed
  3. Enter 'John' in the search box
    - expect: Students list is filtered
    - expect: Only students with 'John' in their name are displayed (John Smith, Sarah Johnson)
    - expect: Other students are hidden

#### 6.2. Search Students by Roll Number

**File:** `tests/search/search-by-roll-number.spec.ts`

**Steps:**
  1. Add multiple students with different roll numbers (001, 002, 003)
    - expect: Students are added
  2. Navigate to Students list page
    - expect: All students are displayed
  3. Enter '002' in the search box
    - expect: Only the student with roll number '002' is displayed
    - expect: Other students are filtered out

#### 6.3. Search Students - No Results

**File:** `tests/search/search-no-results.spec.ts`

**Steps:**
  1. Navigate to Students list page with existing students
    - expect: Students are displayed
  2. Enter a search term that doesn't match any student (e.g., 'XYZ123')
    - expect: No students are displayed
    - expect: Message 'No students found.' is shown

#### 6.4. Search Students - Clear Search

**File:** `tests/search/search-clear.spec.ts`

**Steps:**
  1. Navigate to Students list page
    - expect: All students are displayed
  2. Enter a search term to filter students
    - expect: Students list is filtered
  3. Clear the search box
    - expect: All students are displayed again
    - expect: Filter is removed

#### 6.5. Search Students - Partial Match

**File:** `tests/search/search-partial-match.spec.ts`

**Steps:**
  1. Add students with names like 'John Smith', 'Johnny Walker', 'Mike Johnson'
    - expect: Students are added
  2. Search for 'john'
    - expect: All students with 'john' in their name are displayed (case-insensitive)
    - expect: Results include John Smith, Johnny Walker, and Mike Johnson

#### 6.6. Search Students - Real-time Filtering

**File:** `tests/search/search-realtime.spec.ts`

**Steps:**
  1. Navigate to Students list page
    - expect: All students are displayed
  2. Start typing in the search box (e.g., 'J')
    - expect: Results filter in real-time as you type
    - expect: Students matching 'J' are shown
  3. Continue typing (e.g., 'Jo')
    - expect: Results further filter to match 'Jo'
  4. Complete the search term (e.g., 'John')
    - expect: Final filtered results show students matching 'John'

### 7. Dashboard and Statistics Suite

**Seed:** `tests/seed.spec.ts`

#### 7.1. Dashboard - Initial Empty State

**File:** `tests/dashboard/dashboard-empty.spec.ts`

**Steps:**
  1. Login as a new teacher with no students or attendance records
    - expect: Dashboard is displayed
    - expect: Page shows 'Dashboard Overview' heading
    - expect: Total Students shows 0
    - expect: Passed shows 0
    - expect: Failed shows 0
    - expect: Avg Percentage shows 0%
    - expect: Attendance metrics show 0

#### 7.2. Dashboard - Statistics After Adding Students

**File:** `tests/dashboard/dashboard-statistics.spec.ts`

**Steps:**
  1. Add 3 students: 2 passing (85%, 80%) and 1 failing (45%)
    - expect: Students are added
  2. Navigate to Dashboard
    - expect: Total Students shows 3
    - expect: Passed shows 2
    - expect: Failed shows 1
    - expect: Avg Percentage shows 70.00%
    - expect: Grade Distribution chart displays correct data

#### 7.3. Dashboard - Navigation to Attendance

**File:** `tests/dashboard/dashboard-navigate-attendance.spec.ts`

**Steps:**
  1. Navigate to Dashboard
    - expect: Dashboard is displayed
  2. Click on 'Manage →' link in Today's Attendance section
    - expect: User is navigated to Attendance page

#### 7.4. Dashboard - Grade Distribution Chart

**File:** `tests/dashboard/dashboard-grade-chart.spec.ts`

**Steps:**
  1. Add students with various grades (A, B, C, D, F)
    - expect: Students with different grades are added
  2. Navigate to Dashboard
    - expect: Grade Distribution chart is visible
    - expect: Chart displays bars for each grade category
    - expect: Chart shows correct count for each grade

#### 7.5. Dashboard - Welcome Message

**File:** `tests/dashboard/dashboard-welcome.spec.ts`

**Steps:**
  1. Login as teacher
    - expect: Dashboard is displayed
    - expect: Page displays 'Dashboard Overview' heading
    - expect: Subheading shows 'Welcome back, here's how your class is performing.'

#### 7.6. Dashboard - Today's Attendance Summary

**File:** `tests/dashboard/dashboard-attendance-summary.spec.ts`

**Steps:**
  1. Login and navigate to Dashboard
    - expect: Dashboard is displayed
  2. Check Today's Attendance section
    - expect: Section shows Present: 0
    - expect: Shows Absent: 0
    - expect: Shows Late: 0
    - expect: Shows Excused: 0
    - expect: Shows Total Recorded: 0

### 8. Attendance Management Suite

**Seed:** `tests/seed.spec.ts`

#### 8.1. Attendance - View Attendance Page

**File:** `tests/attendance/view-attendance-page.spec.ts`

**Steps:**
  1. Login as teacher and add students
    - expect: Students are added
  2. Navigate to Attendance page
    - expect: Attendance page is displayed
    - expect: Page shows 'Manage Attendance' heading
    - expect: Overall attendance metrics are displayed
    - expect: Date selector shows today's date
    - expect: Table lists all students with attendance status dropdowns

#### 8.2. Attendance - Mark Student Present

**File:** `tests/attendance/mark-present.spec.ts`

**Steps:**
  1. Navigate to Attendance page
    - expect: Attendance page is displayed with students listed
  2. Select 'Present' from the status dropdown for a student
    - expect: Status is set to Present
  3. Click 'Save Attendance' button
    - expect: Attendance is saved successfully
    - expect: Success message is displayed
    - expect: Overall statistics are updated

#### 8.3. Attendance - Mark Student Absent

**File:** `tests/attendance/mark-absent.spec.ts`

**Steps:**
  1. Navigate to Attendance page
    - expect: Attendance page is displayed
  2. Select 'Absent' from the status dropdown for a student
    - expect: Status is set to Absent
  3. Click 'Save Attendance' button
    - expect: Attendance is saved
    - expect: Absent count is updated
    - expect: Overall attendance percentage is recalculated

#### 8.4. Attendance - Mark Student Late

**File:** `tests/attendance/mark-late.spec.ts`

**Steps:**
  1. Navigate to Attendance page
    - expect: Attendance page is displayed
  2. Select 'Late' from the status dropdown for a student
    - expect: Status is set to Late
  3. Add optional remark (e.g., 'Arrived 10 minutes late')
    - expect: Remark is entered
  4. Save attendance
    - expect: Attendance is saved with remark
    - expect: Late count is updated

#### 8.5. Attendance - Mark Student Excused

**File:** `tests/attendance/mark-excused.spec.ts`

**Steps:**
  1. Navigate to Attendance page
    - expect: Attendance page is displayed
  2. Select 'Excused' from the status dropdown for a student
    - expect: Status is set to Excused
  3. Add optional remark (e.g., 'Medical appointment')
    - expect: Remark is entered
  4. Save attendance
    - expect: Attendance is saved with remark
    - expect: Excused count is updated

#### 8.6. Attendance - Add Remarks

**File:** `tests/attendance/add-remarks.spec.ts`

**Steps:**
  1. Navigate to Attendance page
    - expect: Attendance page is displayed
  2. Select any status for a student
    - expect: Status is selected
  3. Enter remarks in the remarks field for that student
    - expect: Remarks are entered
  4. Save attendance
    - expect: Attendance is saved with remarks

#### 8.7. Attendance - Select Different Date

**File:** `tests/attendance/select-date.spec.ts`

**Steps:**
  1. Navigate to Attendance page
    - expect: Attendance page shows today's date
  2. Click on the date selector
    - expect: Date picker opens
  3. Select a different date
    - expect: Attendance table updates for the selected date
    - expect: If attendance was recorded for that date, it shows the saved data
    - expect: If no attendance for that date, all students default to 'Present'

#### 8.8. Attendance - Download PDF

**File:** `tests/attendance/download-pdf.spec.ts`

**Steps:**
  1. Navigate to Attendance page with recorded attendance
    - expect: Attendance page is displayed
  2. Click 'Download PDF' button
    - expect: PDF download is initiated
    - expect: PDF contains attendance records for the selected date

#### 8.9. Attendance - Overall Percentage Calculation

**File:** `tests/attendance/overall-percentage.spec.ts`

**Steps:**
  1. Mark attendance for multiple days with varying attendance
    - expect: Attendance records are created
  2. Navigate to Attendance page
    - expect: Overall Attendance percentage is displayed
    - expect: Percentage is calculated correctly based on all attendance records

#### 8.10. Attendance - Low Attendance Alert

**File:** `tests/attendance/low-attendance-alert.spec.ts`

**Steps:**
  1. Mark multiple absences for a student over several days
    - expect: Student has low attendance
  2. Check the Dashboard
    - expect: Low Attendance metric shows count of students with low attendance

#### 8.11. Attendance - Multiple Students Bulk Update

**File:** `tests/attendance/bulk-update.spec.ts`

**Steps:**
  1. Navigate to Attendance page with multiple students
    - expect: All students are listed
  2. Set different statuses for all students (some Present, some Absent, some Late)
    - expect: All statuses are set
  3. Click 'Save Attendance' button
    - expect: All attendance records are saved at once
    - expect: Statistics are updated to reflect all changes

#### 8.12. Attendance - View Reports (if available)

**File:** `tests/attendance/view-reports.spec.ts`

**Steps:**
  1. Navigate to Attendance page
    - expect: Attendance page is displayed
  2. Click 'View Reports' button
    - expect: User is navigated to Attendance Reports page (if feature is implemented)
    - expect: Or error page is shown if not implemented

### 9. Navigation and UI Suite

**Seed:** `tests/seed.spec.ts`

#### 9.1. Navigation - Sidebar Links

**File:** `tests/navigation/sidebar-links.spec.ts`

**Steps:**
  1. Login and view the dashboard
    - expect: Sidebar is visible with navigation links
  2. Click on 'Dashboard' link
    - expect: Dashboard page is displayed
    - expect: Dashboard link is highlighted as active
  3. Click on 'Students' link
    - expect: Students page is displayed
    - expect: Students link is highlighted as active
  4. Click on 'Add Student' link
    - expect: Add Student page is displayed
    - expect: Add Student link is highlighted
  5. Click on 'Subjects' link
    - expect: Subjects page is displayed
    - expect: Subjects link is highlighted
  6. Click on 'Attendance' link
    - expect: Attendance page is displayed
    - expect: Attendance link is highlighted

#### 9.2. Navigation - Back Button Functionality

**File:** `tests/navigation/back-button.spec.ts`

**Steps:**
  1. Navigate to various pages that have a 'Back' button (e.g., Add Student, Edit Student, View Student, Subjects, Attendance)
    - expect: Pages with Back button are visited
  2. Click the 'Back' button on each page
    - expect: User is navigated to the appropriate previous page
    - expect: Navigation works correctly for all Back buttons

#### 9.3. Navigation - Breadcrumb Trail

**File:** `tests/navigation/breadcrumb.spec.ts`

**Steps:**
  1. Navigate through multiple pages (Dashboard → Students → View Student)
    - expect: Each page displays appropriate page title and description
  2. Verify page headings and context
    - expect: Each page has clear heading and descriptive subtext

#### 9.4. UI - Sidebar Branding

**File:** `tests/ui/sidebar-branding.spec.ts`

**Steps:**
  1. Login and view any page
    - expect: Sidebar displays 'StudentTracker' heading
    - expect: 'Teacher Portal' label is shown below the heading

#### 9.5. UI - User Profile Display

**File:** `tests/ui/user-profile-display.spec.ts`

**Steps:**
  1. Login as teacher
    - expect: Sidebar bottom section displays logged-in teacher's name
    - expect: Teacher's email address is displayed
    - expect: Logout button is visible

#### 9.6. UI - Responsive Layout

**File:** `tests/ui/responsive-layout.spec.ts`

**Steps:**
  1. View the application on different screen sizes
    - expect: Layout adapts appropriately to different viewports
    - expect: Sidebar behavior is responsive
    - expect: Tables are scrollable on smaller screens
    - expect: Content remains accessible

#### 9.7. UI - Icons and Visual Elements

**File:** `tests/ui/icons-visual.spec.ts`

**Steps:**
  1. Navigate through different pages
    - expect: All navigation items have appropriate icons
    - expect: Action buttons (View, Edit, Delete) have clear icons
    - expect: Icons are consistent throughout the application

#### 9.8. UI - Form Field Placeholders

**File:** `tests/ui/form-placeholders.spec.ts`

**Steps:**
  1. Visit forms on various pages (Login, Signup, Add Student, Add Subject)
    - expect: All text input fields have helpful placeholder text
    - expect: Placeholders guide users on what to enter

#### 9.9. UI - Success Messages

**File:** `tests/ui/success-messages.spec.ts`

**Steps:**
  1. Perform actions that trigger success messages (add subject, add student, save attendance)
    - expect: Success message appears after each successful action
    - expect: Messages are displayed in a visible notification/toast
    - expect: Messages disappear after a few seconds

#### 9.10. Direct URL Access - Protected Routes

**File:** `tests/navigation/protected-routes.spec.ts`

**Steps:**
  1. Without logging in, attempt to access protected URLs directly (e.g., /teacher/dashboard, /teacher/students)
    - expect: User is redirected to login page
    - expect: Protected pages are not accessible without authentication

### 10. Edge Cases and Error Handling Suite

**Seed:** `tests/seed.spec.ts`

#### 10.1. Long Student Name

**File:** `tests/edge-cases/long-student-name.spec.ts`

**Steps:**
  1. Navigate to Add Student page
    - expect: Form is displayed
  2. Enter a very long name (e.g., 50+ characters)
    - expect: Name is entered
  3. Complete the form and create student
    - expect: Student is created
    - expect: Long name is displayed properly in the table without breaking layout
    - expect: Name is truncated or wrapped appropriately

#### 10.2. Special Characters in Names

**File:** `tests/edge-cases/special-chars-name.spec.ts`

**Steps:**
  1. Add a student with special characters in name (e.g., 'O'Brien', 'José García')
    - expect: Name with special characters is accepted
  2. Create the student
    - expect: Student is created successfully
    - expect: Special characters are displayed correctly

#### 10.3. Maximum Marks (100)

**File:** `tests/edge-cases/max-marks.spec.ts`

**Steps:**
  1. Add a student with perfect scores (100 in all subjects)
    - expect: All marks are set to 100
  2. Create student
    - expect: Student is created
    - expect: Percentage shows 100%
    - expect: Grade is calculated correctly (likely A or A+)

#### 10.4. Minimum Marks (0)

**File:** `tests/edge-cases/min-marks.spec.ts`

**Steps:**
  1. Add a student with zero marks in all subjects
    - expect: All marks are set to 0
  2. Create student
    - expect: Student is created
    - expect: Percentage shows 0%
    - expect: Grade is F

#### 10.5. Single Subject Student

**File:** `tests/edge-cases/single-subject-student.spec.ts`

**Steps:**
  1. Add a student with only one subject and marks
    - expect: Student has one subject
  2. Create student
    - expect: Student is created successfully
    - expect: Percentage is calculated based on that single subject
    - expect: Grade is assigned correctly

#### 10.6. Large Number of Students

**File:** `tests/edge-cases/many-students.spec.ts`

**Steps:**
  1. Add a large number of students (e.g., 50+)
    - expect: All students are added
  2. Navigate to Students list page
    - expect: All students are listed
    - expect: Table performance is acceptable
    - expect: Search/filter functionality works with large dataset

#### 10.7. Large Number of Subjects

**File:** `tests/edge-cases/many-subjects.spec.ts`

**Steps:**
  1. Add many subjects (e.g., 20+)
    - expect: All subjects are added
  2. Add a student with multiple subjects
    - expect: Subject dropdown displays all subjects
    - expect: Dropdown is scrollable and usable

#### 10.8. Empty Subject Code

**File:** `tests/edge-cases/empty-subject-code.spec.ts`

**Steps:**
  1. Add subjects without providing subject codes
    - expect: Subjects are added with empty codes
  2. Check how they appear in the student form dropdown
    - expect: Subjects are displayed as 'SubjectName ()' or just 'SubjectName'

#### 10.9. Session Timeout

**File:** `tests/edge-cases/session-timeout.spec.ts`

**Steps:**
  1. Login and remain idle for an extended period
    - expect: Session may timeout (if implemented)
  2. Attempt to perform an action after timeout
    - expect: User is redirected to login page
    - expect: Or session is maintained (depending on implementation)

#### 10.10. Concurrent Edits

**File:** `tests/edge-cases/concurrent-edits.spec.ts`

**Steps:**
  1. Open Edit Student page for the same student in two different browser tabs/windows
    - expect: Both tabs show the edit form
  2. Make changes in first tab and save
    - expect: Changes are saved
  3. Make different changes in second tab and save
    - expect: Changes are saved
    - expect: Last save wins (or appropriate conflict handling is implemented)

#### 10.11. Network Error Handling

**File:** `tests/edge-cases/network-error.spec.ts`

**Steps:**
  1. Simulate network disconnection while performing an action (if testing environment allows)
    - expect: Appropriate error message is displayed
    - expect: User is informed of the network issue
    - expect: Application doesn't crash

#### 10.12. Browser Back Button

**File:** `tests/edge-cases/browser-back-button.spec.ts`

**Steps:**
  1. Navigate through several pages in the application
    - expect: Navigation occurs
  2. Use browser's back button
    - expect: Application navigates back correctly
    - expect: State is maintained appropriately
    - expect: No errors occur
