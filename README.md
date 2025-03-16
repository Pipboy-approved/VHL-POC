# VHL Portal

Section 1.0 Overview

We have created a web application named "VHL portal" that is a Single Page Application (SPA).

- The application is a Vite app with React and TypeScript, using a single `styles.css` file for styling, located in the root directory.
- The application features a dynamic menu and content area that updates based on user interaction.

Important! Every time before You make changes, confirm that these comply with prd.md
Important! If there are conflicts or uncertainties - ask clarifying questions or suggest changes before changing anything.

Section 1.1 File structure and components in application

File structure:
- All CSS is consolidated into a single file called `styles.css` located in the root directory.
- All TypeScript files reside in the `src` folder.

Components:
- The app spans across the screen of the browser.
- It includes a MENU with `.menu-item` divs that, when hovered over, change the `.product-menu` to `display: block` and `opacity: 1.0`.
- The SPA area displays content based on the selected menu item.

1.2 HTML elements in application

MENU > div
MENU-ITEM > div
SPA > div
SPA-STAGE > div
LOGO > div

After solution creation it should be uploaded to Github https://github.com/Pipboy-approved/vhl

1.3 Styling (CSS) in application

MENU
- Default CSS: 3% padding from all sides, border solid 1px #555, background color #444, rounded corners 10px.
- Hover effects: Drop shadow 5px 5px 10px #777.

MENU-ITEM
- Default CSS: 3% padding from all sides, no gaps between items, border solid 1px #666, background color #555, rounded corners 10px.
- Hover effects: Mouse cursor as pointer, background color changes to #555 with 0.5s transition.

SPA
- Default CSS: 5% padding from all sides, flex container for SPA-STAGE.
- Hover effects: Drop shadow 5px 5px 10px #333.

LOGO
- Positioned at the top left corner of the screen with a circular shape and centered background image.

Additional requirements
- Space between MENU and SPA is 3% of screen height.
- In the main window, the body element of HTML has background color #333.
- All used text is by default Verdana, 1vw, and color #ddd.

Styling:
- A single CSS file in the root directory, `styles.css`, is used for all styling.
- The `.menu-item` class has a hover effect that changes the `.product-menu` to `display: block` and `opacity: 1.0`.

1.3 Scripts in application
- All TypeScript files are located in the `src` folder.
- The main entry point is `main.tsx`, which is loaded as a module in `index.html`.

After solution creation, it should be uploaded to the GitHub repository at https://github.com/Pipboy-approved/fit. 