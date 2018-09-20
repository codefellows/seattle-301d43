# Lab 13: Adding a new resource

## Resources

- [HTML5 Forms](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)
- [HTML5 Form Validation](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation#Using_built-in_form_validation)

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
│  │   ├── new.ejs
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

## User Stories and Feature Tasks

### Overview

This lab assignment will add the ability for a user to add a new book to the database by filling in a form.

### Feature 1: Add a new book to the collection

#### Why are we implementing this feature?

- As a user, I want the ability to add new books to my application so that my collection continues to grow.

#### What are we going to implement?

Given that a user would like to expand their collection  
When the user clicks on a button to add a new book    
Then the user should view the form to add a new book    

#### How are we implementing it?

- Create a view called `new.ejs` which contains a form. The user will be able to enter the details of a new book. Include HTML5 form validation.
- Add an endpoint to display the form to the user.

### Feature 2: Provide user feedback upon successful addition

#### Why are we implementing this feature?

- As a user, I want to receive feedback so that I can confirm the new book was successfully added to my collection.

#### What are we going to implement?

Given that a user fills out the form  
When the user submits the form  
Then the user should be directed to the detail view with a success message displayed  

#### How are we implementing it?

- Add an endpoint for a `POST` request to `/books`. The callback should add the new book to the database. The callback should include a second query to retrieve the newly-added book from the database and display the details to the user.
- Use the same detail view from lab 12. Display a message to the user to indicate that the book was successfully added to the database.
- Redeploy your application.

### Feature 3: Continue to style the application

#### Why are we implementing this feature?

-  As a user, I want a simple, clean looking UI so that my application is easy to navigate.

#### What are we going to implement?

Given that users access the application on multiple platforms  
When the user views the application  
Then the interface should be intuitive and visually pleasing  

#### How are we implementing it?

- Style your form so that the user receives some sort of visual feedback as they focus on the form elements. Refer to the daily discussion assignment for a video series about styling HTML5 forms. Consider any further UI/UX features which will create a better experience for your users.
- Include a hamburger menu that will allow the ability to navigate between views. Update your partials as needed.
- Redeploy your application.

## Stretch Goals

*As a user, I want to use sprite sheets for my form elements so that my form is unique.*

Given that the user wants to add a book to their collection  
When the user interacts with the form  
Then the form elements should show a background image sourced from a sprite sheet  

*As a user, I want to be able to dismiss the message dialog, so that my view stays as clean as possible.*

Given that a feedback message is displayed to the user  
When the user clicks on the success message  
Then it should fade out or animate off of the screen using jQuery and an event handler  

*As a user, I want to organize my books by author so that I can view all of the books that a single author has written and view the details about their work.*

Given that the user wants to enhance their book collection  
When the books are displayed  
Then the books should be displayed by author or by title  

- Create a new form to add details about an individual author.
- Create a new table in your `books_app` database for authors. The table should include the author's name and a book id as the foreign key.
- Add the functionality to select an author and view all of the books in your collection written by that author.

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
- Complete your Feature Tasks for the day (below)
- Create a Pull Request (PR) back to the `master` branch of your repository
- On Canvas, submit a link to your PR and a link to your deployed application on Heroku. **Make sure to include the following:**
  - A question within the context of today's lab assignment
  - An observation about the lab assignment, or related 'Ah-hah!' moment
  - How long you spent working on this assignment
