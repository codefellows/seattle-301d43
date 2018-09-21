# Lab 14: Google Books API

## Resources

- [Google Books API Documentation](https://developers.google.com/books/docs/v1/getting_started)
- [Superagent](https://visionmedia.github.io/superagent/)

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
│  │   ├── books
│  │   │   ├── new.ejs
│  │   │   └── show.ejs
│  │   ├── searches
│  │   │   ├── new.ejs
│  │   │   └── show.ejs
│  │   └── error.ejs
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

Today's refactor will implement the use of a third-party API, Google Books, which will give users the ability to search by author or title. If the user finds the book they want they will be able to add that book to the database.

### Feature 1: Search the Google Books API

#### Why are we implementing this feature?

- As a user, I want to search the Google Books API so that I can view the results and add new books to my list.

#### What are we going to implement?

Given that the user enters a seach query  
When the user submits the search form  
Then the search query should be included in a request to the Google Books API  

#### How are we implementing it?

- Create a view called `new.ejs` which contains a search field. Add the ability for a user to indicate if they are searching by title or author.
  - Now that we are using two models, books and searches, the `pages` folder can be further organized. See the file structure above for suggestions.
- Add an endpoint to display the form to the user, such as `/searches/new`.

### Feature 2: Display search results

#### Why are we implementing this feature?

- As a user, I want to be able to browse the search results so that I can add consider adding one to my collection.

#### What are we going to implement?

Given that the user enters a seach query  
When the user submits the search form  
Then the first ten books should be displayed to the user   

#### How are we implementing it?

- Install and require the `superagent` package from NPM; validate that it's listed as a dependency in your `package.json`.
- Add an endpoint for a `GET` request to `/searches` which will proxy a `superagent` request from the client to the Google Books API and return a list of ten books that match the search query.
  - Map over the array of results to build an array of objects that match the `book` model in your database. Include logic to display default data in the case that the API does not return data for every property requested.
  - Render the newly constructed array of objects in a new view, such as `searches/show.ejs`.

### Feature 3: Add a book to the database

#### Why are we implementing this feature?

- As a user, I want to be able to select one book from the search results so that I can add it to my collection.

#### What are we going to implement?

Given that the results return from the Google Books API  
When the books are displayed to the user  
Then the individual book details should be concealed in a hidden form  

#### How are we implementing it?

- In the results view, include a hidden form that will be populated with the details of each book from the API response. Provide the ability for a user to click a button and add a single book to the database, using the details from the hidden form. Consider user experience when building out this functionality.
- Where possible, reuse callbacks you created in earlier book app lab assignments to add a single book to the database.

### Feature 4: Provide user feedback upon successful addition

#### Why are we implementing this feature?

- As a user, I want to receive feedback so that I can confirm the new book was successfully added to my collection.

#### What are we going to implement?

Given that a user selects a book from the search results  
When the user clicks a button to add a book to their collection  
Then the user should be directed to the detail view with a success message displayed  

#### How are we implementing it?

- Provide feedback to the user to indicate that the book was successfully added to the database. Reuse as much functionality from previous features as possible.
- Redeploy your application.

## Stretch Goal

*As a user, I want to update the books in my collection so it is always current.*

Given that a user wants to update a book in the collection  
When the user fills out a form to update the book details  
Then the record will be updated in the database and the user will receive a success message  

- Add the ability for a user to update an existing book. From the detail view, the user should be able to choose to update the book. This will pre-populate a form with the existing details. When the user submits the updated details, the corresponding API route should update the entry in the database and provide feedback to the user that the book details were successfully updated.
  - If you completed the stretch goals for lab 13, add the ability to update an author as well.

*As a user, I want to remove books from my collection so that it accurately reflects my personal preferences.*

Given that a user wants to remove a book from the collection  
When the user clicks on a "Delete" button  
Then the book should be removed from the database and the user will receive a success message  

- From the detail view, add the ability for a user to delete an existing book. The corresponding API route should remove the entry from the database and provide feedback to the user that the book was removed.
  - If you completed the stretch goals for lab 13, add the ability to delete an author as well.


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
