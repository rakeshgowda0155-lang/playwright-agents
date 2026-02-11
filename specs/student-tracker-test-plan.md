# Student Tracker Application - Comprehensive Test Plan

## Application Overview

The Student Tracker is a comprehensive web-based application designed for managing student information, marks, attendance, and performance tracking. The application has two main user portals: Teacher Portal and Student Portal. Teachers can manage students, subjects, attendance, and view various reports and analytics. Students can log in to view their individual results. The application provides CRUD operations for students and subjects, attendance management with various status types (Present, Absent, Late, Excused), grade distribution charts, and PDF report generation capabilities.

## Test Scenarios

### 1. Teacher Authentication

**Seed:** `seed.spec.ts`

#### 1.1. Successful Teacher Login

**File:** `tests/teacher-authentication/successful-login.spec.ts`

**Steps:**
  1. Navigate to the application URL (https://student-tracker-new.vercel.app)
    - expect: The page redirects to the Teacher Login page
    - expect: The page title displays 'Teacher Login - Student Tracker'
    - expect: Login form with Email and Password fields is visible
  2. Enter valid email 'rakegowda015@gmail.com' in the Email field
    - expect: Email field accepts the input
  3. Enter valid password 'Dell#549' in the Password field
    - expect: Password field accepts the input and displays masked characters
  4. Click the 'Login' button
    - expect: User is redirected to the Teacher Dashboard
    - expect: Dashboard displays welcome message with teacher name
    - expect: Dashboard shows statistics: Total Students, Passed, Failed, Average Percentage
    - expect: Dashboard shows attendance statistics for today
    - expect: Grade Distribution chart is visible
    - expect: Navigation sidebar is visible with Dashboard, Students, Add Student, Subjects, and Attendance links

#### 1.2. Failed Login with Invalid Credentials

**File:** `tests/teacher-authentication/failed-login-invalid-credentials.spec.ts`

**Steps:**
  1. Navigate to the Teacher Login page
    - expect: Login page loads successfully
  2. Enter invalid email 'invalid@example.com' in the Email field
    - expect: Email field accepts the input
  3. Enter invalid password 'WrongPassword123!' in the Password field
    - expect: Password field accepts the input
  4. Click the 'Login' button
    - expect: User remains on the login page
    - expect: Error message is displayed indicating invalid credentials
    - expect: User is not redirected to the dashboard

#### 1.3. Login with Empty Fields

**File:** `tests/teacher-authentication/login-empty-fields.spec.ts`

**Steps:**
  1. Navigate to the Teacher Login page
    - expect: Login page loads successfully
  2. Leave the Email field empty
    - expect: Email field remains empty
  3. Leave the Password field empty
    - expect: Password field remains empty
  4. Click the 'Login' button
    - expect: Validation errors are displayed
    - expect: Email field shows 'Email is required' or similar error
    - expect: Password field shows 'Password is required' or similar error
    - expect: User is not redirected

#### 1.4. Password Visibility Toggle

**File:** `tests/teacher-authentication/password-visibility-toggle.spec.ts`

**Steps:**
  1. Navigate to the Teacher Login page
    - expect: Login page loads successfully
  2. Enter password 'TestPassword123!' in the Password field
    - expect: Password is displayed as masked characters
  3. Click the eye icon button next to the password field
    - expect: Password becomes visible as plain text 'TestPassword123!'
  4. Click the eye icon button again
    - expect: Password becomes masked again

#### 1.5. Teacher Logout

**File:** `tests/teacher-authentication/teacher-logout.spec.ts`

**Steps:**
  1. Log in as a teacher with valid credentials
    - expect: User is logged in and redirected to the dashboard
  2. Click the 'Logout' button in the sidebar
    - expect: User is logged out successfully
    - expect: User is redirected to the Teacher Login page
    - expect: 'Logged out' success message is displayed

#### 1.6. Navigate to Teacher Signup

**File:** `tests/teacher-authentication/navigate-to-signup.spec.ts`

**Steps:**
  1. Navigate to the Teacher Login page
    - expect: Login page loads successfully
  2. Click the 'Sign up' link
    - expect: User is redirected to the Teacher Signup page
    - expect: Signup form with Full Name, Email, Password, and Confirm Password fields is visible
    - expect: Password requirements are displayed: 'Min 8 chars, uppercase, lowercase, number, special char.'

#### 1.7. Navigate to Student Login from Teacher Login

**File:** `tests/teacher-authentication/navigate-to-student-login.spec.ts`

**Steps:**
  1. Navigate to the Teacher Login page
    - expect: Login page loads successfully
  2. Click the 'Student Login' link
    - expect: User is redirected to the Student Login page
    - expect: Student Result Portal heading is visible
    - expect: Roll Number and Password fields are visible

### 2. Teacher Signup

**Seed:** `seed.spec.ts`

#### 2.1. Successful Teacher Signup

**File:** `tests/teacher-signup/successful-signup.spec.ts`

**Steps:**
  1. Navigate to the Teacher Signup page
    - expect: Signup page loads successfully with the form
  2. Enter 'John Doe' in the Full Name field
    - expect: Full Name field accepts the input
  3. Enter 'johndoe@example.com' in the Email field
    - expect: Email field accepts the input
  4. Enter 'Teacher123!' in the Password field
    - expect: Password field accepts the input and displays masked characters
  5. Enter 'Teacher123!' in the Confirm Password field
    - expect: Confirm Password field accepts the input
  6. Click the 'Sign Up' button
    - expect: Account is created successfully
    - expect: User is redirected to the Teacher Login page or Dashboard
    - expect: Success message is displayed

#### 2.2. Signup with Mismatched Passwords

**File:** `tests/teacher-signup/signup-mismatched-passwords.spec.ts`

**Steps:**
  1. Navigate to the Teacher Signup page
    - expect: Signup page loads successfully
  2. Enter 'Jane Smith' in the Full Name field
    - expect: Full Name field accepts the input
  3. Enter 'janesmith@example.com' in the Email field
    - expect: Email field accepts the input
  4. Enter 'Password123!' in the Password field
    - expect: Password field accepts the input
  5. Enter 'DifferentPass456!' in the Confirm Password field
    - expect: Confirm Password field accepts the input
  6. Click the 'Sign Up' button
    - expect: Validation error is displayed
    - expect: Error message indicates that passwords do not match
    - expect: User remains on the signup page

#### 2.3. Signup with Invalid Password Format

**File:** `tests/teacher-signup/signup-invalid-password.spec.ts`

**Steps:**
  1. Navigate to the Teacher Signup page
    - expect: Signup page loads successfully
  2. Enter 'Test Teacher' in the Full Name field
    - expect: Full Name field accepts the input
  3. Enter 'test@example.com' in the Email field
    - expect: Email field accepts the input
  4. Enter 'weak' in the Password field (does not meet requirements)
    - expect: Password field accepts the input
  5. Enter 'weak' in the Confirm Password field
    - expect: Confirm Password field accepts the input
  6. Click the 'Sign Up' button
    - expect: Validation error is displayed
    - expect: Error message indicates password does not meet requirements
    - expect: User remains on the signup page

#### 2.4. Signup with Existing Email

**File:** `tests/teacher-signup/signup-existing-email.spec.ts`

**Steps:**
  1. Navigate to the Teacher Signup page
    - expect: Signup page loads successfully
  2. Enter 'Rakesh H C' in the Full Name field
    - expect: Full Name field accepts the input
  3. Enter 'rakegowda015@gmail.com' (existing email) in the Email field
    - expect: Email field accepts the input
  4. Enter 'ValidPass123!' in the Password field
    - expect: Password field accepts the input
  5. Enter 'ValidPass123!' in the Confirm Password field
    - expect: Confirm Password field accepts the input
  6. Click the 'Sign Up' button
    - expect: Error message is displayed indicating email already exists
    - expect: User remains on the signup page

### 3. Dashboard and Navigation

**Seed:** `seed.spec.ts`

#### 3.1. View Dashboard Statistics

**File:** `tests/dashboard-navigation/view-dashboard-statistics.spec.ts`

**Steps:**
  1. Log in as a teacher with valid credentials
    - expect: User is redirected to the Dashboard
  2. View the Dashboard Overview section
    - expect: 'Dashboard Overview' heading is visible
    - expect: Welcome message displays: 'Welcome back, here's how your class is performing.'
    - expect: Total Students count is displayed (e.g., '4')
    - expect: Passed students count is displayed (e.g., '3')
    - expect: Failed students count is displayed (e.g., '1')
    - expect: Average Percentage is displayed (e.g., '57.92%')
  3. View the Today's Attendance section
    - expect: 'Today Present' count is displayed (e.g., '0 / 4')
    - expect: 'Today Absent' count is displayed (e.g., '0')
    - expect: 'Today %' percentage is displayed (e.g., '0%')
  4. View the Grade Distribution chart
    - expect: 'Grade Distribution' heading is visible
    - expect: Chart displays grade distribution (A, C, D, F)
  5. View the Today's Attendance summary
    - expect: 'Today's Attendance' heading is visible
    - expect: 'Manage →' link is visible
    - expect: Present, Absent, Late, and Excused counts are displayed
    - expect: Total Recorded count is displayed

#### 3.2. Navigate Between Pages via Sidebar

**File:** `tests/dashboard-navigation/navigate-between-pages.spec.ts`

**Steps:**
  1. Log in as a teacher
    - expect: User is on the Dashboard
  2. Click 'Students' link in the sidebar
    - expect: User is redirected to the Students page
    - expect: URL changes to '/teacher/students'
    - expect: 'Students' link in sidebar is highlighted/active
  3. Click 'Add Student' link in the sidebar
    - expect: User is redirected to the Add Student page
    - expect: URL changes to '/teacher/students/add'
  4. Click 'Subjects' link in the sidebar
    - expect: User is redirected to the Subjects page
    - expect: URL changes to '/teacher/subjects'
  5. Click 'Attendance' link in the sidebar
    - expect: User is redirected to the Attendance page
    - expect: URL changes to '/teacher/attendance'
  6. Click 'Dashboard' link in the sidebar
    - expect: User is redirected back to the Dashboard
    - expect: URL changes to '/teacher/dashboard'

#### 3.3. Navigate to Attendance from Dashboard

**File:** `tests/dashboard-navigation/navigate-to-attendance-from-dashboard.spec.ts`

**Steps:**
  1. Log in as a teacher
    - expect: User is on the Dashboard
  2. Click the 'Manage →' link in the Today's Attendance section
    - expect: User is redirected to the Attendance page
    - expect: URL changes to '/teacher/attendance'

### 4. Student Management - View

**Seed:** `seed.spec.ts`

#### 4.1. View Students List

**File:** `tests/student-management-view/view-students-list.spec.ts`

**Steps:**
  1. Log in as a teacher and navigate to the Students page
    - expect: Students page loads successfully
    - expect: 'Students' heading is visible
    - expect: 'Manage your class list' description is visible
    - expect: Table with columns: Student, Roll No, Percentage, Grade, Actions is visible
    - expect: All students are listed in the table (4 students)

#### 4.2. Search Students by Name

**File:** `tests/student-management-view/search-students-by-name.spec.ts`

**Steps:**
  1. Navigate to the Students page
    - expect: Students page loads with all students visible
  2. Enter 'Test' in the search field
    - expect: Student list is filtered
    - expect: Only 'Test Student' is visible in the table
    - expect: Other students are hidden
  3. Clear the search field
    - expect: All students are displayed again in the table

#### 4.3. Search Students by Roll Number

**File:** `tests/student-management-view/search-students-by-roll-number.spec.ts`

**Steps:**
  1. Navigate to the Students page
    - expect: Students page loads with all students visible
  2. Enter '123' in the search field
    - expect: Student list is filtered
    - expect: Only student with roll number '123' (Yashas) is visible
    - expect: Other students are hidden
  3. Clear the search field
    - expect: All students are displayed again

#### 4.4. View Student Details

**File:** `tests/student-management-view/view-student-details.spec.ts`

**Steps:**
  1. Navigate to the Students page
    - expect: Students page loads successfully
  2. Click the View icon (eye icon) for the first student (Yashas)
    - expect: User is redirected to the Student Details page
    - expect: URL changes to '/teacher/students/view/{student-id}'
    - expect: 'Student Details' heading is visible
    - expect: Student name 'Yashas' is displayed
    - expect: Roll number '123' is displayed
    - expect: Overall Grade 'D' and Percentage '52.67%' are displayed
  3. View the Basic Information section
    - expect: Full Name, Roll Number, Total Marks, and Percentage are displayed
  4. View the Subjects table
    - expect: Table shows all subjects with marks obtained and max marks
    - expect: Biology: 90/100, English: 20/100, Subject-6760: 48/100
    - expect: Total row shows: 158/300
  5. Verify action buttons
    - expect: 'Download PDF Result' button is visible
    - expect: 'Edit Student' button is visible
    - expect: 'Back' button is visible

#### 4.5. Download Student PDF Result

**File:** `tests/student-management-view/download-student-pdf.spec.ts`

**Steps:**
  1. Navigate to a student's details page
    - expect: Student details page loads successfully
  2. Click the 'Download PDF Result' button
    - expect: PDF download is initiated
    - expect: PDF file is generated with student information and marks

#### 4.6. Navigate Back from Student Details

**File:** `tests/student-management-view/navigate-back-from-details.spec.ts`

**Steps:**
  1. View a student's details
    - expect: Student details page is displayed
  2. Click the 'Back' button
    - expect: User is redirected back to the Students list page
    - expect: Students list is displayed

### 5. Student Management - Add

**Seed:** `seed.spec.ts`

#### 5.1. Add New Student Successfully

**File:** `tests/student-management-add/add-student-successfully.spec.ts`

**Steps:**
  1. Log in as a teacher and navigate to the Add Student page
    - expect: 'Add New Student' heading is visible
    - expect: Form with Basic Information and Subjects & Marks sections is visible
  2. Enter 'New Student' in the Full Name field
    - expect: Full Name field accepts the input
  3. Enter '9999' in the Roll Number field
    - expect: Roll Number field accepts the input
  4. Enter 'Student123!' in the Password field
    - expect: Password field accepts the input
  5. Enter 'Student123!' in the Confirm Password field
    - expect: Confirm Password field accepts the input
  6. Select 'Biology (BIO01)' from the Subject Name dropdown
    - expect: Subject is selected in the dropdown
  7. Enter '85' in the Marks field
    - expect: Marks field accepts the input
  8. Click the 'Add Subject' button to add more subjects
    - expect: A new subject row is added to the form
  9. Select 'English (ENG01)' from the new Subject Name dropdown
    - expect: Subject is selected
  10. Enter '75' in the new Marks field
    - expect: Marks field accepts the input
  11. Click the 'Create Student' button
    - expect: Student is created successfully
    - expect: User is redirected to the Students list page
    - expect: New student appears in the list
    - expect: Success message is displayed

#### 5.2. Add Student with Missing Required Fields

**File:** `tests/student-management-add/add-student-missing-fields.spec.ts`

**Steps:**
  1. Navigate to the Add Student page
    - expect: Add Student form is displayed
  2. Leave the Full Name field empty
    - expect: Full Name field is empty
  3. Enter '8888' in the Roll Number field
    - expect: Roll Number field accepts the input
  4. Leave the Password field empty
    - expect: Password field is empty
  5. Click the 'Create Student' button
    - expect: Validation errors are displayed
    - expect: Full Name field shows error message
    - expect: Password field shows error message
    - expect: Student is not created

#### 5.3. Add Student with Duplicate Roll Number

**File:** `tests/student-management-add/add-student-duplicate-roll.spec.ts`

**Steps:**
  1. Navigate to the Add Student page
    - expect: Add Student form is displayed
  2. Enter 'Duplicate Student' in the Full Name field
    - expect: Full Name field accepts the input
  3. Enter '123' (existing roll number) in the Roll Number field
    - expect: Roll Number field accepts the input
  4. Enter 'Password123!' in the Password field
    - expect: Password field accepts the input
  5. Enter 'Password123!' in the Confirm Password field
    - expect: Confirm Password field accepts the input
  6. Select a subject and enter marks
    - expect: Subject and marks are entered
  7. Click the 'Create Student' button
    - expect: Error message is displayed indicating roll number already exists
    - expect: Student is not created

#### 5.4. Add Student with Invalid Password Format

**File:** `tests/student-management-add/add-student-invalid-password.spec.ts`

**Steps:**
  1. Navigate to the Add Student page
    - expect: Add Student form is displayed
  2. Fill in all required fields
    - expect: Fields accept the input
  3. Enter 'weak' in the Password field (does not meet requirements)
    - expect: Password field accepts the input
  4. Enter 'weak' in the Confirm Password field
    - expect: Confirm Password field accepts the input
  5. Click the 'Create Student' button
    - expect: Validation error is displayed
    - expect: Error indicates password does not meet requirements: Min 8 chars, uppercase, lowercase, number, special char
    - expect: Student is not created

#### 5.5. Add Student with Invalid Marks Range

**File:** `tests/student-management-add/add-student-invalid-marks.spec.ts`

**Steps:**
  1. Navigate to the Add Student page
    - expect: Add Student form is displayed
  2. Fill in all basic information fields correctly
    - expect: Basic information is entered
  3. Select a subject from the dropdown
    - expect: Subject is selected
  4. Enter '150' (exceeds max of 100) in the Marks field
    - expect: Marks field may show validation error or prevent input
  5. Try to submit the form
    - expect: Validation error is displayed
    - expect: Error indicates marks must be between 0 and 100
    - expect: Student is not created

#### 5.6. Add Student with Photo Upload

**File:** `tests/student-management-add/add-student-with-photo.spec.ts`

**Steps:**
  1. Navigate to the Add Student page
    - expect: Add Student form is displayed
  2. Fill in all required fields correctly
    - expect: All required fields are filled
  3. Click the 'Photo (Optional)' button
    - expect: File picker dialog opens
  4. Select an image file
    - expect: Image is uploaded successfully
    - expect: Preview or filename is displayed
  5. Complete the form and click 'Create Student'
    - expect: Student is created with the photo
    - expect: Photo is visible in student details

#### 5.7. Add Multiple Subjects to New Student

**File:** `tests/student-management-add/add-student-multiple-subjects.spec.ts`

**Steps:**
  1. Navigate to the Add Student page
    - expect: Add Student form is displayed
  2. Fill in basic information correctly
    - expect: Basic information is entered
  3. Add first subject and marks
    - expect: First subject is added
  4. Click 'Add Subject' button
    - expect: New subject row is added
  5. Add second subject and marks
    - expect: Second subject is added
  6. Click 'Add Subject' button again
    - expect: Another subject row is added
  7. Add third subject and marks
    - expect: Third subject is added
  8. Click 'Create Student'
    - expect: Student is created with all three subjects
    - expect: All subjects and marks are saved correctly

### 6. Student Management - Edit

**Seed:** `seed.spec.ts`

#### 6.1. Edit Student Information Successfully

**File:** `tests/student-management-edit/edit-student-successfully.spec.ts`

**Steps:**
  1. Navigate to the Students page and click the Edit icon for a student
    - expect: Edit Student page loads
    - expect: Form is pre-filled with current student data
    - expect: Full Name shows 'Yashas'
    - expect: Roll Number shows '123' and is disabled
  2. Change the Full Name to 'Yashas Updated'
    - expect: Full Name field accepts the new value
  3. Update marks for Biology from '90' to '95'
    - expect: Marks field accepts the new value
  4. Click the 'Update Student' button
    - expect: Student information is updated successfully
    - expect: User is redirected to the Students list
    - expect: Updated information is reflected in the list
    - expect: Success message is displayed

#### 6.2. Edit Student Password

**File:** `tests/student-management-edit/edit-student-password.spec.ts`

**Steps:**
  1. Navigate to Edit Student page for a student
    - expect: Edit form is displayed
  2. Enter 'NewPass123!' in the New Password field
    - expect: New Password field accepts the input
    - expect: Confirm New Password field becomes enabled
  3. Enter 'NewPass123!' in the Confirm New Password field
    - expect: Confirm New Password field accepts the input
  4. Click 'Update Student'
    - expect: Student password is updated successfully
    - expect: Success message is displayed

#### 6.3. Edit Student with Password Mismatch

**File:** `tests/student-management-edit/edit-student-password-mismatch.spec.ts`

**Steps:**
  1. Navigate to Edit Student page
    - expect: Edit form is displayed
  2. Enter 'NewPass123!' in the New Password field
    - expect: New Password field accepts the input
  3. Enter 'DifferentPass456!' in the Confirm New Password field
    - expect: Confirm New Password field accepts the input
  4. Click 'Update Student'
    - expect: Validation error is displayed
    - expect: Error indicates passwords do not match
    - expect: Student is not updated

#### 6.4. Add Subject to Existing Student

**File:** `tests/student-management-edit/add-subject-to-student.spec.ts`

**Steps:**
  1. Navigate to Edit Student page for a student
    - expect: Edit form shows existing subjects
  2. Click 'Add Subject' button
    - expect: New subject row is added
  3. Select a new subject from the dropdown
    - expect: Subject is selected
  4. Enter marks for the new subject
    - expect: Marks field accepts the input
  5. Click 'Update Student'
    - expect: Student is updated with the new subject
    - expect: New subject appears in student details

#### 6.5. Remove Subject from Student

**File:** `tests/student-management-edit/remove-subject-from-student.spec.ts`

**Steps:**
  1. Navigate to Edit Student page for a student with multiple subjects
    - expect: Edit form shows all subjects with remove buttons
  2. Click the remove/delete icon for a subject
    - expect: Subject row is removed from the form
    - expect: Remaining subjects are still visible
  3. Click 'Update Student'
    - expect: Student is updated without the removed subject
    - expect: Removed subject no longer appears in student details

#### 6.6. Cancel Edit Student

**File:** `tests/student-management-edit/cancel-edit-student.spec.ts`

**Steps:**
  1. Navigate to Edit Student page
    - expect: Edit form is displayed
  2. Make changes to student information
    - expect: Changes are reflected in the form
  3. Click the 'Cancel' button
    - expect: User is redirected to the Students list
    - expect: Changes are not saved
    - expect: Original student data remains unchanged

#### 6.7. Update Student Photo

**File:** `tests/student-management-edit/update-student-photo.spec.ts`

**Steps:**
  1. Navigate to Edit Student page
    - expect: Edit form is displayed
  2. Click the 'Photo' button
    - expect: File picker dialog opens
  3. Select a new image file
    - expect: New image is uploaded
    - expect: Preview or filename is displayed
  4. Click 'Update Student'
    - expect: Student photo is updated successfully
    - expect: New photo is visible in student details

#### 6.8. Navigate to Edit from Student Details

**File:** `tests/student-management-edit/navigate-edit-from-details.spec.ts`

**Steps:**
  1. View a student's details page
    - expect: Student details page is displayed
  2. Click the 'Edit Student' button
    - expect: User is redirected to the Edit Student page
    - expect: Form is pre-filled with current student data

### 7. Student Management - Delete

**Seed:** `seed.spec.ts`

#### 7.1. Delete Student Successfully

**File:** `tests/student-management-delete/delete-student-successfully.spec.ts`

**Steps:**
  1. Navigate to the Students page
    - expect: Students list is displayed with all students
  2. Click the delete icon for a student
    - expect: Confirmation dialog appears asking to confirm deletion
  3. Confirm the deletion
    - expect: Student is deleted successfully
    - expect: Student is removed from the list
    - expect: Success message is displayed
    - expect: Dashboard statistics are updated

#### 7.2. Cancel Student Deletion

**File:** `tests/student-management-delete/cancel-student-deletion.spec.ts`

**Steps:**
  1. Navigate to the Students page
    - expect: Students list is displayed
  2. Click the delete icon for a student
    - expect: Confirmation dialog appears
  3. Cancel the deletion
    - expect: Dialog closes
    - expect: Student remains in the list
    - expect: No changes are made

### 8. Subject Management

**Seed:** `seed.spec.ts`

#### 8.1. View Subjects List

**File:** `tests/subject-management/view-subjects-list.spec.ts`

**Steps:**
  1. Log in as a teacher and navigate to the Subjects page
    - expect: 'Manage Subjects' heading is visible
    - expect: 'Define the subjects available for your students' description is displayed
    - expect: 'Add New Subject' form is visible
    - expect: 'Existing Subjects' table displays all subjects (4 subjects)
    - expect: Table shows columns: Name, Code, Actions

#### 8.2. Add New Subject Successfully

**File:** `tests/subject-management/add-subject-successfully.spec.ts`

**Steps:**
  1. Navigate to the Subjects page
    - expect: Subjects page loads successfully
  2. Enter 'Mathematics' in the Subject Name field
    - expect: Subject Name field accepts the input
  3. Enter 'MATH01' in the Subject Code field
    - expect: Subject Code field accepts the input
  4. Click the 'Add Subject' button
    - expect: Subject is created successfully
    - expect: New subject appears in the Existing Subjects table
    - expect: Success message is displayed
    - expect: Form fields are cleared

#### 8.3. Add Subject with Missing Subject Name

**File:** `tests/subject-management/add-subject-missing-name.spec.ts`

**Steps:**
  1. Navigate to the Subjects page
    - expect: Subjects page loads
  2. Leave the Subject Name field empty
    - expect: Subject Name field is empty
  3. Enter 'CODE01' in the Subject Code field
    - expect: Subject Code field accepts the input
  4. Click 'Add Subject'
    - expect: Validation error is displayed
    - expect: Error indicates Subject Name is required
    - expect: Subject is not created

#### 8.4. Add Subject without Subject Code

**File:** `tests/subject-management/add-subject-without-code.spec.ts`

**Steps:**
  1. Navigate to the Subjects page
    - expect: Subjects page loads
  2. Enter 'Physics' in the Subject Name field
    - expect: Subject Name field accepts the input
  3. Leave the Subject Code field empty (it's optional)
    - expect: Subject Code field is empty
  4. Click 'Add Subject'
    - expect: Subject is created successfully without a code
    - expect: New subject appears in the table with empty code

#### 8.5. Delete Subject Successfully

**File:** `tests/subject-management/delete-subject-successfully.spec.ts`

**Steps:**
  1. Navigate to the Subjects page
    - expect: Existing subjects are displayed in the table
  2. Click the delete icon for a subject
    - expect: Confirmation dialog appears
  3. Confirm the deletion
    - expect: Subject is deleted successfully
    - expect: Subject is removed from the table
    - expect: Success message is displayed

#### 8.6. Delete Subject with Existing Student Assignments

**File:** `tests/subject-management/delete-subject-with-students.spec.ts`

**Steps:**
  1. Navigate to the Subjects page
    - expect: Subjects are displayed
  2. Click delete icon for a subject that is assigned to students (e.g., Biology)
    - expect: Confirmation dialog or warning appears indicating subject is in use
  3. Confirm deletion if allowed, or cancel if restricted
    - expect: If allowed: Subject is deleted and removed from students' records
    - expect: If restricted: Error message indicates subject cannot be deleted because it's assigned to students

### 9. Attendance Management

**Seed:** `seed.spec.ts`

#### 9.1. View Attendance Page

**File:** `tests/attendance-management/view-attendance-page.spec.ts`

**Steps:**
  1. Log in as a teacher and navigate to the Attendance page
    - expect: 'Manage Attendance' heading is visible
    - expect: 'Mark and track student attendance' description is displayed
    - expect: Statistics cards show: Overall Attendance (0%), Present (0), Absent (0), Low Attendance (0)
    - expect: 'View Reports' button is visible
    - expect: Date picker shows today's date
    - expect: Table displays all students with Status dropdown and Remarks field

#### 9.2. Mark Student Attendance as Present

**File:** `tests/attendance-management/mark-attendance-present.spec.ts`

**Steps:**
  1. Navigate to the Attendance page
    - expect: Attendance page loads with today's date selected
  2. For a student, keep the status as 'Present' (default)
    - expect: Status shows 'Present' in the dropdown
  3. Click the 'Save Attendance' button
    - expect: Attendance is saved successfully
    - expect: Success message is displayed
    - expect: Statistics are updated to show 1 present

#### 9.3. Mark Student Attendance as Absent

**File:** `tests/attendance-management/mark-attendance-absent.spec.ts`

**Steps:**
  1. Navigate to the Attendance page
    - expect: Attendance page loads
  2. Select 'Absent' from the status dropdown for a student
    - expect: Status changes to 'Absent'
  3. Enter 'Sick' in the Remarks field
    - expect: Remarks field accepts the input
  4. Click 'Save Attendance'
    - expect: Attendance is saved with 'Absent' status and remarks
    - expect: Statistics show 1 absent

#### 9.4. Mark Attendance for Multiple Students

**File:** `tests/attendance-management/mark-attendance-multiple.spec.ts`

**Steps:**
  1. Navigate to the Attendance page
    - expect: All students are listed
  2. Set first student as 'Present'
    - expect: Status is set to Present
  3. Set second student as 'Absent'
    - expect: Status is set to Absent
  4. Set third student as 'Late'
    - expect: Status is set to Late
  5. Set fourth student as 'Excused'
    - expect: Status is set to Excused
  6. Click 'Save Attendance'
    - expect: All attendance records are saved
    - expect: Statistics are updated correctly: Present: 1, Absent: 1, Late: 1, Excused: 1

#### 9.5. Change Attendance Date

**File:** `tests/attendance-management/change-attendance-date.spec.ts`

**Steps:**
  1. Navigate to the Attendance page
    - expect: Current date is selected by default
  2. Click the date picker
    - expect: Calendar popup opens
  3. Select a different date (e.g., yesterday)
    - expect: Date changes in the date picker
    - expect: Attendance data for that date is loaded (if exists)
  4. Mark attendance for students
    - expect: Attendance can be marked for the selected date
  5. Click 'Save Attendance'
    - expect: Attendance is saved for the selected date

#### 9.6. Download Attendance PDF

**File:** `tests/attendance-management/download-attendance-pdf.spec.ts`

**Steps:**
  1. Navigate to the Attendance page
    - expect: Attendance page is displayed
  2. Mark attendance for students
    - expect: Attendance is marked
  3. Click the 'Download PDF' button
    - expect: PDF download is initiated
    - expect: PDF contains attendance information for the selected date

#### 9.7. Add Remarks to Attendance

**File:** `tests/attendance-management/add-attendance-remarks.spec.ts`

**Steps:**
  1. Navigate to the Attendance page
    - expect: Attendance page loads
  2. Select 'Late' for a student
    - expect: Status is set to Late
  3. Enter 'Traffic delay' in the Remarks field
    - expect: Remarks field accepts the input
  4. Click 'Save Attendance'
    - expect: Attendance is saved with remarks
    - expect: Remarks are stored with the attendance record

### 10. Attendance Reports

**Seed:** `seed.spec.ts`

#### 10.1. View Attendance Reports Page

**File:** `tests/attendance-reports/view-reports-page.spec.ts`

**Steps:**
  1. Navigate to Attendance page and click 'View Reports'
    - expect: Attendance Reports page loads
    - expect: 'Attendance Reports' heading is visible
    - expect: 'View detailed attendance reports for students' description is displayed
    - expect: Student dropdown is visible with 'Select a student' placeholder
    - expect: Start Date and End Date fields are visible with default values
    - expect: 'Generate Report' button is visible but disabled

#### 10.2. Generate Attendance Report for a Student

**File:** `tests/attendance-reports/generate-student-report.spec.ts`

**Steps:**
  1. Navigate to the Attendance Reports page
    - expect: Reports page loads
  2. Select 'Yashas (123)' from the Student dropdown
    - expect: Student is selected
    - expect: 'Generate Report' button becomes enabled
  3. Keep default date range or select custom dates
    - expect: Date range is set
  4. Click 'Generate Report'
    - expect: Report is generated for the selected student
    - expect: Report displays attendance details for the date range
    - expect: Statistics and attendance records are shown

#### 10.3. Generate Report with Custom Date Range

**File:** `tests/attendance-reports/generate-report-custom-dates.spec.ts`

**Steps:**
  1. Navigate to the Attendance Reports page
    - expect: Reports page loads
  2. Select a student from the dropdown
    - expect: Student is selected
  3. Click the Start Date field and select a start date
    - expect: Start date is selected
  4. Click the End Date field and select an end date
    - expect: End date is selected
  5. Click 'Generate Report'
    - expect: Report is generated for the custom date range
    - expect: Only attendance within the date range is displayed

#### 10.4. Generate Report Button Disabled Without Student Selection

**File:** `tests/attendance-reports/report-button-disabled.spec.ts`

**Steps:**
  1. Navigate to the Attendance Reports page
    - expect: Reports page loads
  2. Verify 'Generate Report' button state without selecting a student
    - expect: 'Generate Report' button is disabled
    - expect: Button cannot be clicked
  3. Select a student from the dropdown
    - expect: 'Generate Report' button becomes enabled

### 11. Student Portal

**Seed:** `seed.spec.ts`

#### 11.1. Student Login Successfully

**File:** `tests/student-portal/student-login-successfully.spec.ts`

**Steps:**
  1. Navigate to the Student Login page
    - expect: 'Student Result Portal' heading is visible
    - expect: 'Enter your roll number to view results' description is displayed
    - expect: Roll Number and Password fields are visible
    - expect: 'Check Result' button is visible
  2. Enter '123' in the Roll Number field
    - expect: Roll Number field accepts the input
  3. Enter the student password in the Password field
    - expect: Password field accepts the input
  4. Click 'Check Result'
    - expect: Student is authenticated
    - expect: Student's result page is displayed with marks and grades

#### 11.2. Student Login with Invalid Credentials

**File:** `tests/student-portal/student-login-invalid.spec.ts`

**Steps:**
  1. Navigate to the Student Login page
    - expect: Student login page loads
  2. Enter '99999' (non-existent roll number) in the Roll Number field
    - expect: Roll Number field accepts the input
  3. Enter any password
    - expect: Password field accepts the input
  4. Click 'Check Result'
    - expect: Error message is displayed indicating invalid credentials
    - expect: User remains on the login page

#### 11.3. View Student Result

**File:** `tests/student-portal/view-student-result.spec.ts`

**Steps:**
  1. Log in as a student with valid credentials
    - expect: Student result page is displayed
  2. View student information
    - expect: Student name and roll number are displayed
    - expect: Overall grade and percentage are shown
    - expect: Table displays all subjects with marks obtained and max marks
    - expect: Total marks and percentage are calculated correctly

#### 11.4. Navigate to Teacher Login from Student Portal

**File:** `tests/student-portal/navigate-to-teacher-login.spec.ts`

**Steps:**
  1. Navigate to the Student Login page
    - expect: Student login page loads
  2. Click the 'Teacher Login' link
    - expect: User is redirected to the Teacher Login page
    - expect: Teacher login form is displayed

### 12. Edge Cases and Error Handling

**Seed:** `seed.spec.ts`

#### 12.1. Access Protected Routes Without Authentication

**File:** `tests/edge-cases/access-protected-routes.spec.ts`

**Steps:**
  1. Without logging in, directly navigate to '/teacher/dashboard'
    - expect: User is redirected to the Teacher Login page
    - expect: User cannot access the dashboard without authentication
  2. Try to access '/teacher/students'
    - expect: User is redirected to the login page
  3. Try to access '/teacher/attendance'
    - expect: User is redirected to the login page

#### 12.2. Session Persistence After Page Refresh

**File:** `tests/edge-cases/session-persistence.spec.ts`

**Steps:**
  1. Log in as a teacher
    - expect: User is logged in and on the dashboard
  2. Refresh the page
    - expect: User remains logged in
    - expect: Dashboard loads without requiring re-authentication

#### 12.3. Handle Network Errors Gracefully

**File:** `tests/edge-cases/handle-network-errors.spec.ts`

**Steps:**
  1. Simulate network disconnection (offline mode)
    - expect: Network is offline
  2. Try to log in
    - expect: Error message is displayed indicating network issue
    - expect: User-friendly error message is shown
  3. Restore network connection
    - expect: User can successfully log in after network is restored

#### 12.4. Handle Very Long Input in Text Fields

**File:** `tests/edge-cases/long-input-validation.spec.ts`

**Steps:**
  1. Navigate to Add Student page
    - expect: Add student form loads
  2. Enter a very long string (500+ characters) in the Full Name field
    - expect: Field handles the input gracefully
    - expect: Either limits the input or shows validation error
  3. Try to submit the form
    - expect: Appropriate validation message is displayed if length exceeds limit

#### 12.5. Test Special Characters in Input Fields

**File:** `tests/edge-cases/special-characters-input.spec.ts`

**Steps:**
  1. Navigate to Add Student page
    - expect: Form loads
  2. Enter special characters in the Full Name field (e.g., '<script>alert(1)</script>')
    - expect: Input is properly sanitized
    - expect: No script execution occurs
    - expect: XSS prevention is in place
  3. Submit the form
    - expect: Special characters are handled safely
    - expect: No security vulnerabilities are exposed

#### 12.6. Concurrent User Actions

**File:** `tests/edge-cases/concurrent-user-actions.spec.ts`

**Steps:**
  1. Open two browser windows/tabs and log in as the same teacher in both
    - expect: Both sessions are active
  2. In window 1, delete a student
    - expect: Student is deleted in window 1
  3. In window 2, refresh the students list
    - expect: Deleted student is no longer visible in window 2
    - expect: Data is synchronized

#### 12.7. Browser Back Button Navigation

**File:** `tests/edge-cases/browser-back-button.spec.ts`

**Steps:**
  1. Log in and navigate to multiple pages (Dashboard -> Students -> Add Student)
    - expect: Navigation through pages is successful
  2. Click the browser back button
    - expect: User navigates back to the Students page
    - expect: Page state is preserved
  3. Click back button again
    - expect: User navigates back to the Dashboard
  4. Log out and click back button
    - expect: User is not able to access authenticated pages
    - expect: User is redirected to login if trying to access protected routes
