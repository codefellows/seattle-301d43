# Lab 12: Componentization

## Resources

- [Book app wireframes](./wireframes)

## Configuration

Use the following as a guide for your directory structure.

```sh
book_app (repository)
├──public
│  └── styles
│      ├── base.css
│      ├── fonts
│      │   ├── icomoon.eot
│      │   ├── icomoon.svg
│      │   ├── icomoon.ttf
│      │   └── icomoon.woff
│      ├── icons.css
│      ├── layout.css
│      ├── modules.css
│      └── reset.css
├──views
│  ├── pages
│  │   ├── error.ejs
│  │   └── show.ejs
│  ├── partials
│  │   ├── footer.ejs
│  │   ├── head.ejs
│  │   └── header.ejs
│  └── index.ejs
├── .env
├── .eslintrc.json
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── server.js
```

## User Acceptance Tests

### Overview

This lab assignment will add the ability for a user to see the details of a single book in a new view. Your code base will also be modularized into components, making your code DRY.

### Feature 1: Detail view

#### Why are we implementing this feature?

As a user, I want to request information about a single book so that I can view its additional details.

#### What are we going to implement?

Given that a user views the book collection  
When the user clicks on the detail button for an individual book  
Then the application should take the user to a detail view where the description and ISBN will be displayed  

Given that a user is viewing the details of a single book  
When the user clicks on a button  
Then the user will be returned to the main page where all of the books from the collection are rendered  

#### How are we implementing it?

- Add an endpoint for a `GET` request to `/books/:id`.
  - This should allow the client to make a request for a singular book, which returns the details of that record from the database. 
- You will likely need to modify the template in your `index.ejs` file to allow the user to select a single book and use its unique id to display the details.
- Create a new view called `show.ejs` to display the detail view of a single book.
- Include the ability for the user to return to the main list of all books.
- Redeploy your application.

### Feature 2: Consistent rendering

#### Why are we implementing this feature?

- As a user, I want the application to be designed in a consistent way so that I do not experience any down time or slow load times.

#### What are we going to implement?

Given that a user views the application  
When the user interacts with the application    
Then the application should load quickly and perform efficiently

#### How are we implementing it?

- Move your SQL queries and view rendering into callbacks. Reference the appropriate callback in each route.
- Move your error handling into a callback.
- Add a new folder called `partials` and create files that are the same across each view. Include the partial files in each view.
- Redeploy your application.

### Feature 3: Continue to style the application

#### Why are we implementing this feature?

- As a user, I want a simple, clean-looking UI so that my application is easy to navigate.

#### What are we going to implement?

Given that users access the application on multiple platforms  
When the user views the application  
Then the interface should be intuitive and visually pleasing  

#### How are we implementing it?

- Continue to style your site using a mobile-responsive approach. Use the provided wireframes as a general guideline for the minimum styling requirements, while adding your own personal taste and color palette.
- Ensure the proper use of SMACCS principles.
  - Your `modules.css` will probably become larger today, which means that you should exercise SMACSS further by modularizing that stylesheet into a `modules/` directory with a file for each partial component of your site.
- Continue to iterate on your styles. For example, begin to include standardized styles such as a color palette and defined font families.
- Redeploy your application.

## Stretch Goal

*As a developer, I want to explore further functionality so that I can continue to improve the user's experience.*

Given that the user views the application on a mobile device  
When the user clicks on the hamburger menu  
Then the navigation items will be visible  

- Implement the ability for your hamburger menu to operate without the use of JavaScript. You will need to research how to enable a 'pop-up/out' style menu with vanilla HTML and CSS.
- Consider any further UI/UX features which will allow a more friendly interface for your users.

## Documentation

_Your `README.md` must include:_

```md
# Project Name

**Author**: Your Name Goes Here
**Version**: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

## Overview
<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for a Code Fellows 301 class. (i.e. What's your problem domain?) -->

## Getting Started
<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->

## Architecture
<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->

## Change Log
<!-- Use this area to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an examples:

01-01-2001 4:59pm - Application now has a fully-functional express server, with GET and POST routes for the book resource.

## Credits and Collaborations
<!-- Give credit (and a link) to other people or resources that helped you build this application. -->
-->
```

## Submission Instructions

- Continue working in the same repository from the previous class.
- Continue to work on semantically-named non-master branches.
- Complete your Feature Tasks for the day (above)
- Create a Pull Request (PR) back to the `master` branch of your repository
- On Canvas, submit a link to your PR and a link to your deployed application on Heroku. **Make sure to include the following:**
  - A question within the context of today's lab assignment
  - An observation about the lab assignment, or related 'Ah-hah!' moment
  - How long you spent working on this assignment
