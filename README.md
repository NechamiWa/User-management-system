# React User Management Application

This is a React-based user management application that allows users to view, add, delete, and interact with user data. The application utilizes React Router for navigation, Axios for HTTP requests, and Bootstrap for styling.

## Features

- **User List**: Displays a list of users fetched from an API with options to add, delete, and view user details.
- **User Details**: Shows detailed information about a selected user, including their name, email, and username.
- **User Posts**: Allows users to view posts associated with a selected user.
- **User Addition**: Provides a form to add a new user to the system.
- **User Deletion**: Allows users to delete existing users from the system.
- **Search Functionality**: Enables users to search for specific users by name.
- **Error Handling**: Includes error handling for failed API requests and validation errors in form inputs.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/NechamiWa/react-user-management.git
   ```

2. Navigate into the project directory:

   ```bash
   cd react-user-management
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Usage

- Upon launching the application, you'll be directed to the login page.
- After logging in, you'll be redirected to the user list page where you can view, add, and delete users.
- Clicking on a user's details or posts will navigate you to the corresponding page.
- Use the search bar to filter users by name.
- Use the navigation buttons to switch between different sections of the application.

## Dependencies

- React
- React Router
- Axios
- Bootstrap
- Formik
- Yup

## Contributing

Contributions are welcome! Please feel free to submit bug reports, feature requests, or pull requests to help improve this project.
