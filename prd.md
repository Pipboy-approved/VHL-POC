Section 1.0 Overview

We create a web aplication that is Single Page Application (SPA).

- Application name is "VHL portal"
- The application is a Vite app with React and Typescript that uses only raw CSS for styling.

Important! Every time before You make changes, confirm that these comply with prd.md
Important! If there are conflicts or uncertainties - ask clarifying questions or suggest changes before changing anything.

Section 1.1 File structure and components in application

File structure:
- All CSS should be in one file called styles.css and this should reside in root directory
-- In CSS use for colours only hex notation and convert colors to 3 alphanumeric codes. Samples: #333; #f6A; #BD3 etc.

All CSS in styles.css should be sorted as follows.
1) Styles by Tags, sorted alphanumerically
2) Styles by classes, sorted alphanumerically
2) Styles by ID´s, sorted alphanumerically

Components
- The app spans across the screen of browser.
- Inside it are a MENU and SPA area that responds to selections, made in menu.
- The MENU is a DIV tag that spans across the screen (styles described in section 1.2).
- The SPA is a DIV tag that spans across the screen (styles described in section 1.2)
- The SPA-STAGE. Will be described in future.
- In MENU we have 5 menu MENU-ITEMS that use Flexible Box Layout are DIV tags which use flex:
-- Transactions
-- Investing
-- Loan/leasing
-- Insurance
-- Pension
-- Support

1.2 HTML elements in application

MENU > div
MENU-ITEM > div
SPA > div
SPA-STAGE > div

After solution creation it should be uploaded to Github https://github.com/Pipboy-approved/fit

1.3 Styling (CSS) in application

MENU
- Default CSS
3% padding from all sides of MENU tag
It is also a Flex Container for MENU-ITEMS.
Border solid 1px #555
Background color #444
Rounded corners 10px
- Hover effects
Drop shadow 5px 5px 10px #777

MENU-ITEM
- Default CSS
3% padding from all sides of MENU-ITEM tag
Items spaced horizontally as Flex Items
No gaps between items
Border solid 1px #666
Background color #555
Rounded corners 10px
- Hover effects
Mouse cursor as pointer
Background color changes to #555 with 0.5s transition

SPA
- Default CSS
5% padding from all sides of BODY tag
It is also a Flex Container for SPA-STAGE.
- Hover effects
Drop shadow 5px 5px 10px #333

Additional requirements
- Space between MENU and SPA is 3% of screen height.
- In the main window, the body element of HTML has background color #333
- All used text is by default Verdana 1vw and #ddd

1.3 Scripts in application
- All Typescript should reside in \src folder