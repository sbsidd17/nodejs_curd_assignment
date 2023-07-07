API Documentation

This documentation provides an overview of the API endpoints and their functionalities for the authentication system.
Base URL

The base URL for accessing the API is http://localhost:3000/ (assuming the server is running locally on port 3000).
Authentication Endpoints

The following endpoints are available for user authentication:
GET /

Returns a simple message indicating that the backend server is running.

    Response:
        Status Code: 200 (OK)
        Body: "User Management Backend with Express and MongoDB"

POST /signup

Registers a new user with the provided name, email, and password.

    Request:
        Method: POST
        URL: /signup
        Body:
            name (string, required): The name of the user.
            email (string, required): The email address of the user.
            password (string, required): The password of the user.


    Response:
        Status Code: 200 (OK) or 400 (Bad Request)
        Body (if successful): { "msg": "User Registered Successfully" }
        Body (if unsuccessful): { "msg": "<error message>" }

POST /login

Authenticates a user with the provided email and password.

    Request:
        Method: POST
        URL: /login
        Body:
            email (string, required): The email address of the user.
            password (string, required): The password of the user.

            
    Response:
        Status Code: 200 (OK) or 400 (Bad Request)
        Body (if successful): "User Login Successfully"
        Body (if password is wrong): "Password is wrong"
        Body (if no account associated with the email): "No Account Associate with this account"

Example Usage
Register a new user


POST /signup

Body:
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "secret123"
}

Response:

Status Code: 200
Body: {
  "msg": "User Registered Successfully"
}

Authenticate a user


POST /login

Body:
{
  "email": "john.doe@example.com",
  "password": "secret123"
}

Response:


Status Code: 200
Body: "User Login Successfully"

Set Up

To set up the project and run the server locally, follow these steps:

    Install the required dependencies by running the command npm install.
    Create a .env file in the project root directory and set the MONGODB_URL variable to your MongoDB connection URL.
    Start the server by running the command node server.js.
    Access the API endpoints using the provided base URL.

Dependencies

The following dependencies are required to run the project:

    express: ^4.17.1
    mongoose: ^6.0.7
    dotenv: ^10.0.0

Make sure to install these dependencies using the npm install command before running the server.
Database Connection

The server connects to a MongoDB database using the dbConnect.js module. The MONGODB_URL environment variable should be configured with the appropriate connection URL.
Contributing

If you would like to contribute to this project, feel free to submit a pull request with your changes. Make sure to follow the existing coding style and include relevant tests for any new features or bug fixes.
License

This project is licensed under the MIT License. See the LICENSE file for more details.
