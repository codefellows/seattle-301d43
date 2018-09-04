![CF](https://camo.githubusercontent.com/70edab54bba80edb7493cad3135e9606781cbb6b/687474703a2f2f692e696d6775722e636f6d2f377635415363382e706e67) Lab 02: jQuery and the DOM

## Lab 02
Welcome to your first lab assignment for Code 301!!

Today we'll be kicking off our blog app by applying what we learned in lecture to implement a mobile-first design using responsive web design techniques, and use jQuery to interact with the DOM. You'll also need to spend some time getting familiar with the new Git/GitHub & Pair Programming workflow that we'll utilize throughout this course.

*Please take the time to read carefully through each of the READMEs for lab assignments as they have detailed information regarding your assignment, such as: submission instructions, resources, configuration, user stories with feature tasks, and documentation.*

## Lab 02 Submission Instructions
When you are finished with lab, follow these steps to submit your work. Create one pull request (aka: "PR") from your forked repo to the CF repo with your changes, and you'll each submit that same PR link in Canvas.

1. Be sure to remember to do all of your work on non-master branches.
1. Ensure that all your local changes are committed and pushed to your origin repo.
1. Visit the origin repo on github.com, and ensure that all of your completed work has been merged to master via pull requests within your repo.
1. Create a new PR from your fork to the CF repo and ensure the branches look correct.
1. Fill in the template based on the check box prompts:
	- Write a good descriptive summary of your changes
	- Be sure to include how much time you spent on it and who you worked with.
	- Briefly reflect on and summarize your process.
1. When you create the PR, it will have a unique URL. Copy this link, share with your partner, and paste it into the assignment submission form in Canvas. Both the driver and the navigator will submit the same PR link.

---

### Set up your repo

![High-level Overview: Git Workflow](https://codefellows.github.io/common_curriculum/assets/img/gitflow_front.png)

Here is the recommended workflow:

1. Driver: fork the CF lab repository if you haven't done so already.
1. Your **forked repo** on GitHub is your "origin" repo.
1. Clone **your fork** to your local development environment. Follow this directory <span id="directory">structure</span>:

	```
	~/codefellows
	  301/
	    lab-assignments/
	      02-jquery-and-the-dom/ # this is the cloned repository for today's work
	```

	1. Immediately `git checkout -b <driverName-navigatorName>` (ex: `git checkout -b allie-sam`).
	2. Create a copy of the `starter-code` directory with the copy's name being the driver-navigator (ex: `cp -r starter-code allie-sam`) and navigate into that directory (ex: `cd allie-sam`). *Do not* work directly in the `starter-code` directory; only work in your renamed copy of it.

### Write code together!

1. Driver: In your terminal, ensure that:
   - You are on the branch named after you and your partner.
   - You are currently within the partner pair directory (`02-jquery-and-the-dom/allie-sam`).

1. Open this directory as a project in your editor.
1. Use the "Find in Project" feature to locate all the `TODO:`, `REVIEW:`, and `COMMENT:` items.
1. Before writing code, do a read-through of the existing code and discuss the `REVIEW` items with your partner.
1. Use `live-server` in your terminal to render the code in the browser. Note that `live-server` will automatically update the browser when code is changed and saved.
1. Work through one or two `TODO` or `COMMENT` items before switching roles (or one hour, whichever arrives first), testing your code as you go.
1. In your terminal type `git status` to view the files that you have changed. You should only see the files that you have worked on.
1. Type `git diff` to see line-item changes with your down arrow key. (Type `q` to exit this mode)
1. Type `git add file1 file2` where file1, file2, etc. are the files that you have changed.
1. Type `git status` to view the files that have been added to your commit. You should only see the files that you worked on.
1. Type `git commit -m "some meaningful message"` where some meaningful message is a message that **thoroughly** explains your commit.
1. Type `git status` to ensure there is nothing left to commit.
1. Type `git push origin <driverName-navigatorName>` to push this branch to your forked repo on GitHub.
1. On GitHub, Add your navigator as a collaborator (go to `Settings` -> `Collaborators & teams`).
1. Once they have been added, `Slack` to your partner your forked repo link for them to clone down.

### Switch roles

The navigator (who will become the new driver):

  - Clone the repo from the link your partner Slacked you into your working directory.
  - Type `git checkout <driverName-navigatorName>` to check out the remote branch. NOTE: do not use -b flag.
   - If remote branch checkout is successful your terminal should show `Branch 'driver-navigator' set up to track remote branch 'driver-navigator' from 'origin'.
Switched to a new branch 'driver-navigator'`
  - Type `ls` from terminal to confirm <driverName-navigatorName> folder exists.
  - If folder does not exist then try `git branch -b <driverName-navigatorName> origin/<driverName-navigatorName>`
  - If *still* not working then ask TA and/or refer to Tracking Branches section of [Git - Remote Branches] (https://git-scm.com/book/en/v2/Git-Branching-Remote-Branches)
  - Open the code in your editor and resume editing the code.
  - Add, commit, push as you have done before.

## Resources  
[jQuery cheatsheet](https://oscarotero.com/jquery/)

## Configuration
_Your repository must include:_

```
02-jquery-and-the-dom
└── starter-code
└── driver-navigator
  ├── .eslintrc.json
  ├── .gitignore
  ├── LICENSE
  ├── index.html
  ├── scripts
  │   ├── article.js
  │   └── blogArticles.js
  ├── styles
  │   ├── base.css
  │   ├── layout.css
  │   └── modules.css
  └── vendor
      └── styles
          ├── fonts
          │   ├── icomoon.eot
          │   ├── icomoon.svg
          │   ├── icomoon.ttf
          │   └── icomoon.woff
          ├── icons.css
          └── normalize.css
  └── PULL_REQUEST_TEMPLATE.md
  └── README.md
```

## User Stories and Feature Tasks

- Consider styling the app using SMACSS practices. Seek to optimize and organize your CSS as much as possible!

*As a user, I want my site to display my blog articles in a clear, logical way so that I can find the most recent articles first and the blog is easy to read.*

- Complete the `toHtml()` method, which will ultimately be used to render each article instance to the DOM.
- The articles should be sorted by date.

*As a developer, I want to make my code DRY and render articles from a separate data file so that my HTML file is not cluttered with lengthy and repetitive code.*

- Complete the `Article()` constructor and create instances by assigning all of the properties of each data object to properties of `this`.

*As a developer, I want to utilize the jQuery library's functionality so that I can efficiently access, traverse, and manipulate elements on the DOM.*

- Add the necessary script tag to include jQuery in the app.
- Utilize jQuery functionality to modify the display property of DOM elements.
- Utilize jQuery functionality to traverse the DOM and complete the HTML template for the articles.

*As a developer, I want to optimize iteration with JavaScript array methods so that my code is more condensed and maintainable.*

- Refactor all `for` loops using the `.forEach()` method.


## Documentation
_Your README.md must include:_

```md
# Project Name

**Author**: Your Name Goes Here
**Version**: 1.0.0 (increment the patch/fix version number up if you make more commits past your first submission)

## Overview
<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for a Code Fellows 301 class. (i.e. What's your problem domain?) -->

## Getting Started
<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->

## Architecture
<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->

## Change Log
<!-- Use this are to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an example:

01-01-2001 4:59pm - Application now has a fully-functional express server, with GET and POST routes for the book resource.
-->
## Credits and Collaborations
<!-- Give credit (and a link) to other people or resources that helped you build this application. -->

```
