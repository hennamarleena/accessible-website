# Accessible website
- This is website/project work for HAMK's online course about web accessibility

**Explain how you took cognitive accessibility into consideration**
-	I made sure that there is a sufficient color contrast so it’s easy to read 
-	I used plain language: simple, not too much text, quite short sentences and straight to point text blocks
-	clear structure/layout, not very surprising, safe and basic
-	I tried to be as consistent as possible with my design
-	I used bullet points here in the home page to quickly highlight key features and services

**Explain the accessibility features that you have implemented and demonstrate briefly how you implemented those**
-	I made "skip to main content" link on the top left corner, here I used WAI ARIA, and put aria-label="Skip to main content" attribute  to that element because I noticed that otherwise the screen reader couldn’t regocnise it properly
-	I put it to tabindex 1, and also made a little javascript code that makes sure that it’s surely on focus when you open the page

-	In services page, I made quick links to section ( + little wai aria here)

-	I implemented an option to Scale Text bigger or smaller. It can be changed with a button, it's made with a javascript function.
-	I made some changes to tabindex order so that it would go through nav bar first and then to those buttons

-	Indicating current location on the website, within navigation bar, current active page has underline on nav bar, made with javascript, user knows where they are


**Report on the evaluation tool, keyboard and / or screen reader that you used to test your project's accessibility**
-	The screen reader I used was NVDA screen reader
-	for example, I made sure that it was possible to navigate with headings and move around only with keyboard
-	I tested menus, tab orders, forms...


**Explain how you used the evaluation tool with your project and describe any issues or challenges that you encountered**
-	I made a first version of my whole site and after that I used Axe dev tools – chrome extension to test my site. It alerted some problems with contrast ratio so I had to change my design a bit
-	I noticed that evaluation tools wouldn’t find the same issues, so I also tested with Siteimprove Accessibility Checker. It said that my nav buttons did not meet efficient size, so I made them little bigger
-	I also tested my pages and colors with contrast checker https://webaim.org/resources/contrastchecker/

