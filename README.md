# Task Tracker

A full-stack task management application built with a .NET Web API backend and a React frontend.

The application allows users to create, view, update, search, and delete tasks. The frontend communicates with the backend through HTTP requests.

## Tech Stack

### Backend
- .NET / ASP.NET Core Web API
- C#
- REST API
- In-memory task storage

### Frontend
- React
- Vite
- JavaScript
- CSS

## Features

- Create a task with a title, description, and status
- View all tasks
- Search tasks
- Update task details and status
- Delete tasks
- Basic validation for required task titles
- Table and card views
- Responsive dark-themed interface

## Project Structure

```text
task_tracker/
├── tasktracker_backend/
│   ├── Program.cs
│   ├── appsettings.json
│   └── tasktracker_backend.csproj
│
├── tasktracker_frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
How It Works

The application has two separate parts:

The ASP.NET Core backend provides the task management API.
The React frontend provides the user interface.

The frontend sends HTTP requests to the backend to create, retrieve, update, and delete tasks.

The backend currently uses in-memory storage, so tasks are available while the API is running but are not permanently stored in a database.

API

The backend runs on:

http://localhost:5019

Main endpoint:

GET    /api/tasks
POST   /api/tasks
PUT    /api/tasks/{id}
DELETE /api/tasks/{id}
Running the Project
1. Start the Backend

Open a terminal:

cd ~/task_tracker/tasktracker_backend
dotnet run

The API should be available at:

http://localhost:5019

You can test it with:

curl http://localhost:5019/api/tasks
2. Start the Frontend

Open a second terminal:

cd ~/task_tracker/tasktracker_frontend
npm install
npm run dev

Vite will provide a local development URL, usually:

http://localhost:5173

Open that address in your browser.

Both the backend and frontend need to be running for the application to work correctly.

Task Statuses

Tasks can have one of the following statuses:

Not started
In Progress
Done
Blocked
Notes

This project was built as a full-stack task management exercise, with the main focus on communication between a React frontend and a .NET REST API.

The application currently uses in-memory persistence rather than a database. Restarting the backend will reset the task data.

Future Improvements

Possible future improvements include:

Persistent database storage
Authentication and user accounts
Due dates and task priorities
Pagination
Automated tests
Production deployment
Improved API error handling

