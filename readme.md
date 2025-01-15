# Accessible website
- project is for HAMK Online Course on Web Accessibility

## Cognitive Accessibility Considerations
1. Color contrast
- ensured sufficient contrast for easy readability
2. Plain language
- Used simple language with quite short sentences and straight-to-the-point text blocks.
3. Clear structure/layout
- Created a predictable, safe layout for user familiarity
4. Consistency
- Maintained consistent design throughout the website
5. highlights
- Used bullet points here on the home page to quickly highlight key features and services

## Implemented Accessibility Features
1. "Skip to Main Content"  -link
- Positioned at the top left corner with aria-label="Skip to main content".
- Added tabindex=1 and a JavaScript function to ensure focus upon opening the page.
2. Quick Links on Services Page:
- Enabled quick section navigation using WAI-ARIA attributes.
3. Text Scaling Option: 
- Added buttons to increase or decrease text size via JavaScript function.
4. Tab Order Adjustments:
- Organized tab order to prioritize the navigation bar, followed by buttons.
5. Current Location Indication:
- Used JavaScript to underline the active page in the navigation bar, ensuring users can identify their location easily.


## Evaluation Tools and Testing
**Screen Reader Testing**
- Tool Used: NVDA Screen Reader.
- Verified accessibility by navigating via headings, testing keyboard-only navigation, checking menus, tab orders, and forms.
**Evaluation tools**
1. Axe DevTools (Chrome Extension):
- Initial test revealed contrast ratio issues, leading to design updates.
2. Siteimprove Accessibility Checker:
- Detected insufficient button sizes in the navigation bar, which were adjusted
3. Contrast Checker:
- Used WebAIM Contrast Checker to validate color contrast compliance.

## Areas for Improvement
- "Book a visit" page is not properly usable for screen readers
- The website lacks ARIA roles and labels