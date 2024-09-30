# mission-05-z-energy

This project is a full-stack application for finding gas stations and displaying their details, including operating hours, services, and fuel prices. It consists of a frontend built with React and a backend built with Node.js and Express.

## Table of Contents

1. **Project Title and Description**: Provides a brief overview of the project.
2. **Table of Contents**: Lists the sections included in the README for easy navigation.
3. **Installation**: Instructions for cloning the repository and installing dependencies for both frontend and backend.
4. **Usage**: Instructions for starting both the backend server and the frontend development server.
5. **Running Tests**: Instructions for running tests for both frontend and backend.
6. **Contributing**: Guidelines for contributing to the project.

## Installation

1.  Clone the repository:

    ```sh
    git clone https://github.com/your-username/mission-05-z-energy.git
    cd mission-05-z-energy
    ```

2.  Install the dependencies for both frontend and backend:

    # Navigate to the frontend directory and install dependencies

    ```sh
    cd frontend
    npm install
    ```

    # Navigate to the backend directory and install dependencies

    ```sh
    cd ../backend
    npm install
    ```

## Usage

1. Start the backend server

   ```sh
   cd backend
   nodemon
   ```

   The backend server will start on http://localhost:3000

   # IMPORTANT!

   Type this to your browser first to store the locations into your local database:

   ```sh
   http://localhost:3000/api/fetch-stations
   ```

   This will save all existing Z Energy Gas Stations into your database.

2. Start the frontend development server:

   ```sh
   cd ../frontend
   npm run dev
   ```

## Running Tests

To run the tests for backend and frontend, follow the following:

1. Backend:

   ```sh
   cd backend
   npm install jest@latest supertest@latest
   npm run test
   ```

2. Frontend:

   The frontend tests will be done using Cypress. Follow these steps to run Cypress tests:

   ```sh
   cd frontend
   npm install cypress@latest
   npx cypress run --spec "cypress/e2e/frontend.cy.js"
   ```

   Please ensure that the frontend server is up and running since it will be an end-to-end test. Otherwise, the test will immediately fail.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.
