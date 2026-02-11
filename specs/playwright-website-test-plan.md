# Playwright Website Test Plan

## Application Overview

This test plan provides comprehensive test coverage for the Playwright documentation website (https://playwright.dev/). The website serves as the primary resource for developers using Playwright, providing documentation, API references, community resources, and educational content. The test plan covers key user flows including navigation, search functionality, documentation browsing, API reference exploration, language switching, theme toggling, and community resource access.

## Test Scenarios

### 1. Homepage Tests

**Seed:** `seed.spec.ts`

#### 1.1. Verify homepage loads successfully

**File:** `specs/homepage/homepage-loads.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/
    - expect: The page loads successfully
    - expect: The page title is 'Fast and reliable end-to-end testing for modern web apps | Playwright'
    - expect: The main heading 'Playwright enables reliable end-to-end testing for modern web apps.' is visible

#### 1.2. Verify homepage hero section elements

**File:** `specs/homepage/hero-section.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/
    - expect: The homepage loads successfully
  2. Verify the hero section contains the main heading
    - expect: The heading 'Playwright enables reliable end-to-end testing for modern web apps.' is visible
  3. Verify the 'Get started' button is present
    - expect: The 'Get started' button is visible and clickable
  4. Verify the GitHub star button is present
    - expect: The 'Star microsoft/playwright on GitHub' button is visible with star count (82k+)

#### 1.3. Verify homepage feature sections

**File:** `specs/homepage/feature-sections.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/
    - expect: The homepage loads successfully
  2. Scroll through the page and verify all feature sections are present
    - expect: The 'Any browser • Any platform • One API' section is visible
    - expect: The 'Resilient • No flaky tests' section is visible
    - expect: The 'No trade-offs • No limits' section is visible
    - expect: The 'Full isolation • Fast execution' section is visible
    - expect: The 'Powerful Tooling' section is visible
  3. Verify feature descriptions contain relevant content
    - expect: Cross-browser information mentions Chromium, WebKit, and Firefox
    - expect: Auto-wait feature is described
    - expect: Browser contexts feature is explained
    - expect: Tooling links (Codegen, Playwright inspector, Trace Viewer) are present

#### 1.4. Verify companies section

**File:** `specs/homepage/companies-section.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/
    - expect: The homepage loads successfully
  2. Scroll to the 'Chosen by companies and open source projects' section
    - expect: The section heading is visible
  3. Verify company logos are displayed
    - expect: VS Code logo is visible
    - expect: Bing logo is visible
    - expect: Outlook logo is visible
    - expect: Disney+ Hotstar logo is visible
    - expect: Material UI logo is visible
    - expect: ING logo is visible
    - expect: Adobe logo is visible
    - expect: React Navigation logo is visible
    - expect: Accessibility Insights logo is visible

#### 1.5. Verify homepage footer

**File:** `specs/homepage/footer.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/
    - expect: The homepage loads successfully
  2. Scroll to the footer section
    - expect: The footer is visible
  3. Verify footer sections are present
    - expect: The 'Learn' section with links (Getting started, Playwright Training, Learn Videos, Feature Videos) is visible
    - expect: The 'Community' section with links (Stack Overflow, Discord, Twitter, LinkedIn) is visible
    - expect: The 'More' section with links (GitHub, YouTube, Blog, Ambassadors) is visible
    - expect: The copyright notice 'Copyright © 2026 Microsoft' is visible

### 2. Navigation Tests

**Seed:** `seed.spec.ts`

#### 2.1. Verify main navigation menu

**File:** `specs/navigation/main-navigation.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/
    - expect: The homepage loads successfully
  2. Verify the main navigation bar contains all required links
    - expect: The Playwright logo and text are visible in the navigation
    - expect: The 'Docs' link is visible
    - expect: The 'API' link is visible
    - expect: The language selector button (Node.js) is visible
    - expect: The 'Community' link is visible
  3. Verify the utility navigation icons are present
    - expect: The GitHub repository icon/link is visible
    - expect: The Discord server icon/link is visible
    - expect: The theme toggle button is visible
    - expect: The search button is visible

#### 2.2. Navigate to Docs section

**File:** `specs/navigation/navigate-to-docs.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/
    - expect: The homepage loads successfully
  2. Click on the 'Docs' link in the main navigation
    - expect: The page navigates to /docs/intro
    - expect: The page title is 'Installation | Playwright'
    - expect: The documentation sidebar is visible on the left

#### 2.3. Navigate to API section

**File:** `specs/navigation/navigate-to-api.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/
    - expect: The homepage loads successfully
  2. Click on the 'API' link in the main navigation
    - expect: The page navigates to /docs/api/class-playwright
    - expect: The page title is 'Playwright Library | Playwright'
    - expect: The API reference sidebar is visible with class listings

#### 2.4. Navigate to Community section

**File:** `specs/navigation/navigate-to-community.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/
    - expect: The homepage loads successfully
  2. Click on the 'Community' link in the main navigation
    - expect: The page navigates to /community/welcome
    - expect: The page title is 'Welcome | Playwright'
    - expect: The community sidebar is visible
    - expect: The welcome message is displayed

#### 2.5. Navigate back to homepage via logo

**File:** `specs/navigation/logo-navigation.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/docs/intro
    - expect: The documentation page loads
  2. Click on the Playwright logo in the navigation bar
    - expect: The page navigates back to the homepage (https://playwright.dev/)
    - expect: The hero section is visible

#### 2.6. Verify breadcrumb navigation

**File:** `specs/navigation/breadcrumbs.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/docs/api/class-playwright
    - expect: The API page loads
  2. Verify breadcrumb navigation is present
    - expect: Breadcrumbs are visible showing: Home page > API reference > Playwright Library
    - expect: The home icon in breadcrumbs is clickable
  3. Click on the home icon in breadcrumbs
    - expect: The page navigates to the homepage

### 3. Search Functionality Tests

**Seed:** `seed.spec.ts`

#### 3.1. Open search dialog with button click

**File:** `specs/search/open-search-button.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/
    - expect: The homepage loads successfully
  2. Click on the search button in the navigation
    - expect: The search dialog opens
    - expect: The search input field is visible and focused
    - expect: The 'No recent searches' message is displayed
    - expect: The 'Search by Algolia' branding is visible

#### 3.2. Open search dialog with keyboard shortcut

**File:** `specs/search/open-search-keyboard.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/
    - expect: The homepage loads successfully
  2. Press Ctrl+K (or Cmd+K on Mac)
    - expect: The search dialog opens
    - expect: The search input field is focused

#### 3.3. Search for documentation content

**File:** `specs/search/search-documentation.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/
    - expect: The homepage loads successfully
  2. Open the search dialog by clicking the search button
    - expect: The search dialog opens
  3. Type 'locator' into the search field
    - expect: Search results appear dynamically as you type
    - expect: Results include relevant documentation pages about locators
    - expect: Each result shows the page title and a preview

#### 3.4. Search for API methods

**File:** `specs/search/search-api.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/
    - expect: The homepage loads successfully
  2. Open the search dialog
    - expect: The search dialog opens
  3. Type 'page.click' into the search field
    - expect: Search results appear with API-related content
    - expect: Results include links to API reference pages

#### 3.5. Close search dialog with Escape key

**File:** `specs/search/close-search-escape.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/
    - expect: The homepage loads successfully
  2. Open the search dialog
    - expect: The search dialog opens
  3. Press the Escape key
    - expect: The search dialog closes
    - expect: The page content is visible again

#### 3.6. Clear search query

**File:** `specs/search/clear-search.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/
    - expect: The homepage loads successfully
  2. Open the search dialog and type 'test'
    - expect: The search query is visible in the input field
    - expect: The clear button (X) appears
  3. Click the clear button
    - expect: The search query is cleared
    - expect: The input field is empty
    - expect: The 'No recent searches' message reappears

#### 3.7. Navigate to search result

**File:** `specs/search/navigate-search-result.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/
    - expect: The homepage loads successfully
  2. Open the search dialog and type 'installation'
    - expect: Search results appear
  3. Click on the first search result
    - expect: The search dialog closes
    - expect: The page navigates to the selected documentation page
    - expect: The content of the selected page is displayed

### 4. Documentation Section Tests

**Seed:** `seed.spec.ts`

#### 4.1. Verify documentation sidebar structure

**File:** `specs/documentation/sidebar-structure.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/docs/intro
    - expect: The documentation page loads
  2. Verify the documentation sidebar is visible
    - expect: The sidebar contains the 'Getting Started' section
    - expect: The 'Getting Started' section includes: Installation, Writing tests, Generating tests, Running and debugging tests, Trace viewer, Setting up CI
    - expect: Other sections like 'Playwright Test', 'Getting started - VS Code', 'Release notes', etc. are visible

#### 4.2. Expand and collapse sidebar sections

**File:** `specs/documentation/sidebar-expand-collapse.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/docs/intro
    - expect: The documentation page loads
  2. Click on a collapsed sidebar section (e.g., 'Playwright Test')
    - expect: The section expands
    - expect: Sub-items are revealed (Agents, Annotations, Command line, etc.)
  3. Click on the same section again
    - expect: The section collapses
    - expect: Sub-items are hidden

#### 4.3. Navigate between documentation pages via sidebar

**File:** `specs/documentation/sidebar-navigation.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/docs/intro
    - expect: The Installation page loads
    - expect: The 'Installation' link in the sidebar is highlighted/active
  2. Click on 'Writing tests' in the sidebar
    - expect: The page navigates to /docs/writing-tests
    - expect: The page title changes to 'Writing tests | Playwright'
    - expect: The 'Writing tests' link is now highlighted in the sidebar

#### 4.4. Verify documentation page structure

**File:** `specs/documentation/page-structure.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/docs/intro
    - expect: The Installation page loads
  2. Verify the page contains standard documentation elements
    - expect: The page has a main heading
    - expect: The content area contains text and code examples
    - expect: A table of contents is visible on the right side
    - expect: Previous/Next navigation links are at the bottom

#### 4.5. Navigate using Previous/Next links

**File:** `specs/documentation/prev-next-navigation.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/docs/intro
    - expect: The Installation page loads
  2. Scroll to the bottom of the page
    - expect: The 'Next' button is visible (pointing to 'Writing tests')
  3. Click the 'Next' button
    - expect: The page navigates to the next documentation page
    - expect: Both 'Previous' and 'Next' buttons are now visible
  4. Click the 'Previous' button
    - expect: The page navigates back to the Installation page

#### 4.6. Verify code examples in documentation

**File:** `specs/documentation/code-examples.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/docs/intro
    - expect: The Installation page loads
  2. Locate a code block in the documentation
    - expect: Code blocks are properly formatted with syntax highlighting
    - expect: A 'Copy code to clipboard' button is visible next to code blocks
  3. Click the 'Copy code to clipboard' button
    - expect: The button shows a visual feedback (icon change or tooltip)
    - expect: The code is copied to the clipboard

#### 4.7. Use table of contents for in-page navigation

**File:** `specs/documentation/table-of-contents.spec.ts`

**Steps:**
  1. Navigate to a documentation page with multiple sections
    - expect: The page loads with a table of contents on the right
  2. Click on a section link in the table of contents
    - expect: The page scrolls to the selected section
    - expect: The URL updates with the anchor hash
    - expect: The selected section is highlighted in the table of contents

### 5. API Reference Tests

**Seed:** `seed.spec.ts`

#### 5.1. Verify API reference sidebar structure

**File:** `specs/api/api-sidebar-structure.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/docs/api/class-playwright
    - expect: The API reference page loads
  2. Verify the API sidebar structure
    - expect: The sidebar shows 'API reference' section
    - expect: Main sections include: Playwright Test, Playwright Library, Classes, Assertions, Test Runner, Test Reporter, Experimental
    - expect: The 'Classes' section contains a comprehensive list of API classes (APIRequest, Browser, Page, Locator, etc.)

#### 5.2. Navigate to specific API class

**File:** `specs/api/navigate-to-class.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/docs/api/class-playwright
    - expect: The API reference page loads
  2. Click on 'Page' in the Classes section of the sidebar
    - expect: The page navigates to /docs/api/class-page
    - expect: The page title is 'Page | Playwright'
    - expect: The Page class documentation is displayed

#### 5.3. Verify API class page structure

**File:** `specs/api/class-page-structure.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/docs/api/class-playwright
    - expect: The Playwright Library API page loads
  2. Verify the page structure
    - expect: The page has a main heading with the class name
    - expect: A usage example code block is shown at the top
    - expect: Properties section is present with links to individual properties
    - expect: Each property has proper documentation with type information

#### 5.4. Verify API property documentation

**File:** `specs/api/property-documentation.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/docs/api/class-playwright
    - expect: The page loads
  2. Scroll to a property (e.g., 'chromium')
    - expect: The property name is clearly displayed as a heading
    - expect: The version information is shown (e.g., 'Added before v1.9')
    - expect: A description of the property is provided
    - expect: Usage example is included
    - expect: Type information is shown with links to related types

#### 5.5. Navigate between API classes

**File:** `specs/api/navigate-between-classes.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/docs/api/class-browsertype
    - expect: The BrowserType class page loads
  2. Find a link to another class in the documentation (e.g., 'Browser')
    - expect: Links to related classes are present in the type definitions
  3. Click on a related class link
    - expect: The page navigates to the linked class documentation
    - expect: The new class page loads with its documentation

#### 5.6. Verify API method documentation

**File:** `specs/api/method-documentation.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/docs/api/class-page
    - expect: The Page class documentation loads
  2. Scroll to find a method documentation (e.g., 'click' or 'goto')
    - expect: Method name is displayed as a heading
    - expect: Method signature is shown
    - expect: Parameters are documented with types and descriptions
    - expect: Return type is specified
    - expect: Usage examples are provided
    - expect: Version information is included

#### 5.7. Verify direct links to API sections

**File:** `specs/api/direct-section-links.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/docs/api/class-playwright
    - expect: The page loads
  2. Click on the '#' link next to a property or method heading
    - expect: The URL updates with the anchor hash
    - expect: The page scrolls to the specific section if needed
    - expect: The URL can be copied and used for direct navigation

### 6. Language Selector Tests

**Seed:** `seed.spec.ts`

#### 6.1. Open language selector dropdown

**File:** `specs/language-selector/open-dropdown.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/
    - expect: The homepage loads successfully
  2. Click on the language selector button (showing 'Node.js' by default)
    - expect: A dropdown menu opens
    - expect: Available languages are displayed: Node.js, Python, Java, .NET

#### 6.2. Switch to Python documentation

**File:** `specs/language-selector/switch-to-python.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/
    - expect: The homepage loads with Node.js as the default language
  2. Open the language selector dropdown
    - expect: The dropdown opens with language options
  3. Click on 'Python'
    - expect: The page navigates to the Python version of the site
    - expect: The URL changes to include '/python/'
    - expect: The language selector now shows 'Python'
    - expect: Documentation content is specific to Python syntax

#### 6.3. Switch to Java documentation

**File:** `specs/language-selector/switch-to-java.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/
    - expect: The homepage loads
  2. Open the language selector and select 'Java'
    - expect: The page navigates to the Java version
    - expect: The URL includes '/java/'
    - expect: The language selector shows 'Java'

#### 6.4. Switch to .NET documentation

**File:** `specs/language-selector/switch-to-dotnet.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/
    - expect: The homepage loads
  2. Open the language selector and select '.NET'
    - expect: The page navigates to the .NET version
    - expect: The URL includes '/dotnet/'
    - expect: The language selector shows '.NET'

#### 6.5. Switch back to Node.js documentation

**File:** `specs/language-selector/switch-to-nodejs.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/python/
    - expect: The Python version of the site loads
  2. Open the language selector and select 'Node.js'
    - expect: The page navigates back to the Node.js version
    - expect: The URL no longer has '/python/' in the path
    - expect: The language selector shows 'Node.js'

#### 6.6. Verify language persistence across navigation

**File:** `specs/language-selector/language-persistence.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/
    - expect: The homepage loads
  2. Switch to Python using the language selector
    - expect: The site switches to Python version
  3. Navigate to the API section using the main navigation
    - expect: The API page loads in Python version
    - expect: The language selector still shows 'Python'
    - expect: API examples are in Python syntax

### 7. Theme Toggle Tests

**Seed:** `seed.spec.ts`

#### 7.1. Toggle from system/light to dark mode

**File:** `specs/theme/toggle-to-dark.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/
    - expect: The homepage loads with default theme (system or light mode)
  2. Click the theme toggle button (moon/sun icon)
    - expect: The theme switches to light mode or dark mode
    - expect: The button tooltip/label updates (e.g., 'currently light mode' or 'currently dark mode')
    - expect: The page background color changes
    - expect: Text colors adjust for better contrast
    - expect: The theme preference appears to be saved

#### 7.2. Verify dark mode styling

**File:** `specs/theme/dark-mode-styling.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/
    - expect: The homepage loads
  2. Switch to dark mode using the theme toggle
    - expect: Dark mode is activated
  3. Verify dark mode styling is applied correctly
    - expect: The background is dark
    - expect: Text is light colored for readability
    - expect: Code blocks have appropriate dark theme syntax highlighting
    - expect: Navigation elements are styled for dark mode
    - expect: Links are visible with appropriate colors

#### 7.3. Toggle back to light mode

**File:** `specs/theme/toggle-to-light.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/
    - expect: The homepage loads
  2. Switch to dark mode
    - expect: Dark mode is activated
  3. Click the theme toggle button again
    - expect: The theme switches back to light mode
    - expect: All styling reverts to light mode colors
    - expect: The button tooltip/label updates accordingly

#### 7.4. Verify theme persistence across pages

**File:** `specs/theme/theme-persistence.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/
    - expect: The homepage loads
  2. Switch to dark mode
    - expect: Dark mode is activated
  3. Navigate to the Docs section
    - expect: The documentation page loads in dark mode
    - expect: The theme preference is maintained
  4. Navigate to the API section
    - expect: The API page also displays in dark mode

#### 7.5. Verify theme persistence after page reload

**File:** `specs/theme/theme-reload-persistence.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/
    - expect: The homepage loads
  2. Switch to dark mode
    - expect: Dark mode is activated
  3. Reload the page
    - expect: The page reloads in dark mode
    - expect: The theme preference was saved and restored

### 8. Community Section Tests

**Seed:** `seed.spec.ts`

#### 8.1. Verify community page structure

**File:** `specs/community/page-structure.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/community/welcome
    - expect: The community welcome page loads
  2. Verify the page structure and content
    - expect: The page title is 'Welcome | Playwright'
    - expect: A welcome message is displayed
    - expect: Sections for Ambassadors, GitHub, Contributing, Community Discord, Community LinkedIn, Stack Overflow, YouTube, Blog, News, and Playwright Training are present

#### 8.2. Verify community sidebar navigation

**File:** `specs/community/sidebar-navigation.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/community/welcome
    - expect: The community page loads
  2. Verify the sidebar structure
    - expect: The sidebar shows: Welcome, Ambassadors, Videos section (Conference Videos, Release Videos, Live Streams, Feature Videos, Learn Videos, MCP & Agent Videos)
    - expect: External links like 'Learn Playwright', 'Playwright Samples', 'Blog', and 'Join our Community Discord' are visible with external link icons

#### 8.3. Navigate to Ambassadors page

**File:** `specs/community/ambassadors-page.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/community/welcome
    - expect: The community page loads
  2. Click on 'Ambassadors' in the sidebar
    - expect: The page navigates to /community/ambassadors
    - expect: The Ambassadors page loads
    - expect: Information about Playwright ambassadors is displayed

#### 8.4. Navigate to video sections

**File:** `specs/community/video-sections.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/community/welcome
    - expect: The community page loads
  2. Expand the 'Videos' section in the sidebar if collapsed
    - expect: Video subcategories are visible
  3. Click on 'Feature Videos'
    - expect: The page navigates to /community/feature-videos
    - expect: A list or collection of feature videos is displayed

#### 8.5. Verify external community links

**File:** `specs/community/external-links.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/community/welcome
    - expect: The community page loads
  2. Verify external links are properly marked
    - expect: GitHub link points to https://github.com/microsoft/playwright
    - expect: Discord link points to https://aka.ms/playwright/discord
    - expect: Stack Overflow link is present
    - expect: Twitter, LinkedIn, YouTube, and Blog links are available
    - expect: External links have appropriate icons indicating they open in new tabs/windows

#### 8.6. Verify GitHub issue templates links

**File:** `specs/community/github-issue-templates.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/community/welcome
    - expect: The community page loads
  2. Scroll to the GitHub section
    - expect: Links for Bug Reports, Feature Requests, Report Regression, and Report a security vulnerability are visible
    - expect: Each link points to the appropriate GitHub issue template

#### 8.7. Verify Microsoft Learn integration

**File:** `specs/community/microsoft-learn.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/community/welcome
    - expect: The community page loads
  2. Locate the Playwright Training section
    - expect: A link to 'Build Your first end-to-end test with Playwright' on Microsoft Learn is present
    - expect: The link includes an external link icon

### 9. Footer Tests

**Seed:** `seed.spec.ts`

#### 9.1. Verify footer is present on all pages

**File:** `specs/footer/footer-presence.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/
    - expect: The homepage loads with footer visible
  2. Navigate to https://playwright.dev/docs/intro
    - expect: The documentation page loads with footer visible
  3. Navigate to https://playwright.dev/docs/api/class-playwright
    - expect: The API page loads with footer visible
  4. Navigate to https://playwright.dev/community/welcome
    - expect: The community page loads with footer visible

#### 9.2. Verify footer Learn section links

**File:** `specs/footer/learn-section.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/
    - expect: The homepage loads
  2. Scroll to the footer and locate the Learn section
    - expect: The 'Learn' heading is visible
    - expect: Links include: Getting started, Playwright Training (with external icon), Learn Videos, Feature Videos
    - expect: All links are clickable
  3. Click on 'Getting started' in the footer
    - expect: The page navigates to /docs/intro

#### 9.3. Verify footer Community section links

**File:** `specs/footer/community-section.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/
    - expect: The homepage loads
  2. Scroll to the footer and locate the Community section
    - expect: The 'Community' heading is visible
    - expect: Links include: Stack Overflow (with external icon), Discord (with external icon), Twitter (with external icon), LinkedIn (with external icon)
    - expect: All external links have appropriate icons

#### 9.4. Verify footer More section links

**File:** `specs/footer/more-section.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/
    - expect: The homepage loads
  2. Scroll to the footer and locate the More section
    - expect: The 'More' heading is visible
    - expect: Links include: GitHub (with external icon), YouTube (with external icon), Blog (with external icon), Ambassadors
    - expect: All links are clickable
  3. Click on 'Ambassadors' in the footer
    - expect: The page navigates to /community/ambassadors

#### 9.5. Verify footer copyright notice

**File:** `specs/footer/copyright.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/
    - expect: The homepage loads
  2. Scroll to the very bottom of the page
    - expect: The copyright notice is visible
    - expect: The text reads 'Copyright © 2026 Microsoft' (or current year)

### 10. Accessibility and Responsive Tests

**Seed:** `seed.spec.ts`

#### 10.1. Verify skip to main content link

**File:** `specs/accessibility/skip-to-content.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/
    - expect: The homepage loads
  2. Tab to focus the 'Skip to main content' link (may be visually hidden until focused)
    - expect: The 'Skip to main content' link becomes visible when focused
    - expect: The link is the first focusable element on the page
  3. Press Enter on the focused link
    - expect: Focus moves to the main content area
    - expect: The page scrolls to the main content if needed

#### 10.2. Verify keyboard navigation in main menu

**File:** `specs/accessibility/keyboard-navigation.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/
    - expect: The homepage loads
  2. Use Tab key to navigate through the main navigation menu
    - expect: Focus moves sequentially through navigation items: Logo, Docs, API, Language Selector, Community
    - expect: Focus indicators are clearly visible
    - expect: All interactive elements can be reached via keyboard
  3. Press Enter on a focused navigation link
    - expect: The link activates and navigates to the target page

#### 10.3. Verify keyboard navigation in language selector

**File:** `specs/accessibility/keyboard-language-selector.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/
    - expect: The homepage loads
  2. Tab to the language selector button and press Enter
    - expect: The dropdown menu opens
  3. Use arrow keys to navigate through language options
    - expect: Focus moves between language options
    - expect: Each option is highlighted when focused
  4. Press Enter on a focused language option
    - expect: The language is selected
    - expect: The page switches to the selected language version

#### 10.4. Verify ARIA labels and roles

**File:** `specs/accessibility/aria-attributes.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/
    - expect: The homepage loads
  2. Inspect the page structure for proper ARIA attributes
    - expect: Navigation regions have appropriate role='navigation' attributes
    - expect: Main content has role='main' or <main> semantic element
    - expect: Buttons have descriptive aria-labels (e.g., search button, theme toggle)
    - expect: Links have meaningful text or aria-labels
    - expect: Expandable sections have aria-expanded attributes

#### 10.5. Test mobile responsive design - homepage

**File:** `specs/responsive/mobile-homepage.spec.ts`

**Steps:**
  1. Set viewport to mobile size (e.g., 375x667)
    - expect: The viewport is set to mobile dimensions
  2. Navigate to https://playwright.dev/
    - expect: The page loads and is responsive
    - expect: Navigation may collapse into a hamburger menu
    - expect: Content is readable without horizontal scrolling
    - expect: Text and images scale appropriately
    - expect: Touch targets are adequately sized

#### 10.6. Test tablet responsive design

**File:** `specs/responsive/tablet-view.spec.ts`

**Steps:**
  1. Set viewport to tablet size (e.g., 768x1024)
    - expect: The viewport is set to tablet dimensions
  2. Navigate to https://playwright.dev/docs/intro
    - expect: The documentation page loads responsively
    - expect: The sidebar may collapse or remain visible depending on breakpoint
    - expect: Content adapts to the available width
    - expect: All functionality remains accessible

#### 10.7. Test mobile navigation menu

**File:** `specs/responsive/mobile-navigation.spec.ts`

**Steps:**
  1. Set viewport to mobile size
    - expect: The viewport is set to mobile dimensions
  2. Navigate to https://playwright.dev/
    - expect: The page loads
    - expect: A mobile menu button (hamburger icon) is visible if navigation is collapsed
  3. Click the mobile menu button if present
    - expect: The navigation menu expands/slides in
    - expect: All navigation links are accessible
    - expect: The menu can be closed by clicking outside or on a close button

### 11. External Links and Resources Tests

**Seed:** `seed.spec.ts`

#### 11.1. Verify GitHub repository link

**File:** `specs/external-links/github-link.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/
    - expect: The homepage loads
  2. Locate the GitHub repository icon in the navigation
    - expect: The GitHub icon/link is visible
    - expect: The link points to https://github.com/microsoft/playwright

#### 11.2. Verify Discord server link

**File:** `specs/external-links/discord-link.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/
    - expect: The homepage loads
  2. Locate the Discord icon in the navigation
    - expect: The Discord icon/link is visible
    - expect: The link points to https://aka.ms/playwright/discord

#### 11.3. Verify Star button on homepage

**File:** `specs/external-links/github-star-button.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/
    - expect: The homepage loads
  2. Locate the GitHub star button in the hero section
    - expect: The 'Star microsoft/playwright on GitHub' button is visible
    - expect: The star count (82k+) is displayed
    - expect: The button links to the GitHub repository

#### 11.4. Verify cross-language documentation links

**File:** `specs/external-links/cross-language-links.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/
    - expect: The homepage loads
  2. Scroll to the feature section describing cross-language support
    - expect: Links to TypeScript, JavaScript, Python, .NET, and Java documentation are present
    - expect: Python link points to https://playwright.dev/python/docs/intro
    - expect: .NET link points to https://playwright.dev/dotnet/docs/intro
    - expect: Java link points to https://playwright.dev/java/docs/intro

#### 11.5. Verify company logo links

**File:** `specs/external-links/company-logos.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/
    - expect: The homepage loads
  2. Scroll to the companies section
    - expect: Company logos are displayed
  3. Verify that company logos are clickable links
    - expect: VS Code logo links to https://code.visualstudio.com
    - expect: Bing logo links to https://bing.com
    - expect: Outlook logo links to https://outlook.com
    - expect: Other company logos link to their respective websites or GitHub repos

#### 11.6. Verify tooling links in features section

**File:** `specs/external-links/tooling-links.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/
    - expect: The homepage loads
  2. Scroll to the 'Powerful Tooling' section
    - expect: Links to Codegen, Playwright inspector, and Trace Viewer are present
    - expect: Codegen link points to docs/codegen
    - expect: Playwright inspector link points to docs/debug#playwright-inspector
    - expect: Trace Viewer link points to docs/trace-viewer-intro

### 12. Error Handling and Edge Cases

**Seed:** `seed.spec.ts`

#### 12.1. Test 404 page for non-existent route

**File:** `specs/error-handling/404-page.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/non-existent-page
    - expect: A 404 error page is displayed
    - expect: The page includes helpful information or links to navigate back to valid pages
    - expect: The navigation menu is still accessible

#### 12.2. Test search with no results

**File:** `specs/error-handling/search-no-results.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/
    - expect: The homepage loads
  2. Open the search dialog
    - expect: The search dialog opens
  3. Type a nonsensical query that should return no results (e.g., 'xyzabc123notfound')
    - expect: The search completes
    - expect: A message indicating no results were found is displayed
    - expect: The search dialog remains functional for new queries

#### 12.3. Test navigation with hash fragments

**File:** `specs/error-handling/hash-navigation.spec.ts`

**Steps:**
  1. Navigate to a URL with a hash fragment (e.g., https://playwright.dev/docs/intro#installation)
    - expect: The page loads and automatically scrolls to the section identified by the hash
    - expect: The section is visible in the viewport

#### 12.4. Test rapid language switching

**File:** `specs/error-handling/rapid-language-switch.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/
    - expect: The homepage loads
  2. Rapidly switch between languages (Node.js -> Python -> Java -> .NET -> Node.js)
    - expect: Each language switch completes successfully
    - expect: The correct language version is displayed after each switch
    - expect: No errors or broken states occur
    - expect: The final language selection is correctly reflected

#### 12.5. Test multiple search queries in sequence

**File:** `specs/error-handling/sequential-searches.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/
    - expect: The homepage loads
  2. Open search and search for 'locator'
    - expect: Results for 'locator' appear
  3. Clear the search and search for 'browser'
    - expect: Results for 'browser' appear, replacing previous results
  4. Clear and search for 'test'
    - expect: Results for 'test' appear correctly

#### 12.6. Test back button navigation

**File:** `specs/error-handling/browser-back-button.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/
    - expect: The homepage loads
  2. Click on 'Docs' to navigate to the documentation
    - expect: The documentation page loads
  3. Click on 'API' to navigate to the API reference
    - expect: The API page loads
  4. Click the browser back button
    - expect: The page navigates back to the documentation page
  5. Click the browser back button again
    - expect: The page navigates back to the homepage

#### 12.7. Test forward button navigation

**File:** `specs/error-handling/browser-forward-button.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev/ and then to /docs/intro
    - expect: The documentation page loads
  2. Click the browser back button
    - expect: The page navigates back to the homepage
  3. Click the browser forward button
    - expect: The page navigates forward to the documentation page
