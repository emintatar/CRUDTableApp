# CRUD Table App for Managing Users

This project is a CRUD (Create, Read, Update, Delete) table app built with React on the client-side and json-server on the server-side. The app allows users to manage user data fetched from an API.

## Getting Started

To get started with this project, follow the steps below:

1. Clone the repository by running the following command in your terminal:

`git clone https://github.com/emintatar/CRUDTableApp`

2. Navigate to the client folder and install the dependencies by running the following command:

`npm install`

3. To start the client application, run the following command in the client directory:

`npm start`

4. Next, navigate to the server folder and start the server by running the following command:

`npm run start:server`

## Features

The app has the following features:
- Home: The Home page is the landing page for the application.

- Header: In the Header component, there is a logo displayed, as well as a role filter mechanism and an "Add New User" button. When the user clicks the "Add New User" button, the AddUserForm component is triggered and rendered inside the Header component.

- AddUserForm: The AddUserForm component allows users to add a new user to the table. The form contains input fields for the user's name, username,email and role. When the user submits the form, the data is sent to API, and the UserList component is updated with the new data.

- UserList: The UserList component displays a list of users fetched from API. The component contains a search input and a checkbox button for deleting multiple users. Users can be filtered by name or role, and multiple users can be deleted by selecting the checkboxes and clicking the delete button.

- Search: The Search component contains a search area and multiple delete users checked with checkboxes with delete button. The search area allows users to search for users by name or email. The multiple delete users functionality allows users to select multiple users and delete them at once.

- Pagination: The Pagination component provides a paging mechanism that helps move around the pages. The component displays the number of pages available and provides navigation buttons for navigating between the pages.

- User: The User component displays a unique value for each user. The component contains a modal that displays the EditUserForm component when the user clicks the edit button.

- EditUserForm: The EditUserForm component allows users to edit an existing user. The form contains input fields for the user's name, username, email and role. When the user submits the form, the data is sent to API, and the UserList component is updated with the edited data.

## Technologies Used

- React
- json-server
- Axios
- Bootstrap