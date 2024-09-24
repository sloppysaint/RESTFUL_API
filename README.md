
1. Project Structure and Architecture

task-manager/
├── models/
│   ├── Task.js
│   └── User.js
├── routes/
│   ├── tasks.js
│   └── users.js
├── middlewares/
│   └── auth.js
├── controllers/
│   ├── taskController.js
│   └── userController.js
├── index.js
├── .env
└── README.md

-> Controllers: Contains the logic for handling requests and responses.
-> Models: Define the structure of the data (Mongoose schemas).
-> Routes: Defines the API endpoints and which controllers they hit.
-> Middleware: Contains the JWT authentication logic.

 2. Key Features and Functionalities

    User Registration and Login:
      ->  New users can register with a username, email, and password.
      ->  After logging in, users receive a JWT token, which they use to access protected endpoints.

    Task CRUD Operations:
      ->  Users can create, read, update, and delete tasks.
      ->  Each task includes fields like title, description, status (pending, in-progress, completed), and a due date.

    JWT Authentication:
      ->  Secure access to task-related routes so that only authenticated users can perform CRUD operations.

    API Documentation:
      ->  I've integrated Swagger for auto-generating API documentation.
      ->  Users can easily see the available endpoints, request bodies, and responses.

3. Challenges Faced & How I Addressed Them
  -> Error Handling: I implemented consistent error handling across all routes to ensure clear, helpful error messages.
  -> Authentication: I used JWT to authenticate users and protect task-related routes.
  -> Task Ownership: Ensuring that only the user who created a task can update or delete it required careful validation with user IDs.
  
4. Instructions to Run the Project Locally

1. Clone the project from the repository.
-> git clone https://github.com/sloppysaint/RESTFUL_API
-> cd task-manager

2. Install dependencies:
-> npm install

3. Set up environment variables in a .env file:
-> MONGO_URI=<Your_MongoDB_URI>
-> JWT_SECRET=<Your_Secret_Key>

4. Start the server
-> nodemon index.js or npm start
