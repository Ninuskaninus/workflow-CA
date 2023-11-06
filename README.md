[![End 2 End](https://github.com/Ninuskaninus/workflow-CA/actions/workflows/gpt.yml/badge.svg)](https://github.com/Ninuskaninus/workflow-CA/actions/workflows/gpt.yml)
[![Unit test](https://github.com/Ninuskaninus/workflow-CA/actions/workflows/gpt.yml/badge.svg)](https://github.com/Ninuskaninus/workflow-CA/actions/workflows/gpt.yml)

# Workflow Course Assigment

The primary goal of this project is to leverage the skills and knowledge acquired in this course to enhance the quality of a software package. This enhancement will be achieved through the implementation of effective development workflows, making the development process more efficient and streamlined.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Configuration](#project-configuration)
- [Workflow and Hooks](#workflow-and-hooks)
- [Testing](#testing)
- [File Changes](#file-changes)
- [Issues and Bugs](#issues-and-bugs)
- [Features](#features)
- [License](#license)

## Getting Started

- Fork the repository, and open it with github-desktop and then vs-code
- Install bootstrap and sass to make sure all the styles are in place
- Prettier and Eslint are configured to work in this enviroment
- Cypress and Jest are configured to work in this enviroment

### Prerequisites
- Node.js
- GitHub account
- VS-code

## Project Configuration

- Project is configured to run Prettier on commit.
- Project is configured to run ESLint on commit.
- Project default branch is protected, code is versioned, and branching conventions have been followed.
- Project is configured to build and deploy to pages on merge to the default branch.

## Workflow and Hooks

- The project uses GitHub Actions for workflow automation.
- The default branch is protected to ensure code quality.
- Branching conventions are followed to maintain organization.

## Testing

- Unit tests for the login function, ensuring it fetches and stores a token in browser storage.
- Unit tests for the logout function, ensuring it clears the token from browser storage.
- End-to-End tests for user features, including login, access to the profile, and error handling.

## File Changes


- Project readme file is updated to include new configuration information and workflow status badges.
- Deployed project has been checked for 404 errors.
- Any bugs found have been communicated in the Issues tab.

## Issues and Bugs

- Issues and bugs are tracked in the Issues tab on GitHub.

## Features

- The login function fetches and stores a token in browser storage.
- The logout function clears the token from browser storage.
- The user can log in and access their profile.
- The user cannot submit the login form with invalid credentials and is shown a message.
- The user can log out with the logout button.



