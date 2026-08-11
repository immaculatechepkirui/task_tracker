### Task Flow

A full-stack task management application built with a .NET Web API backend and a React frontend. 

The application allows users to create, view, update, search, and delete tasks. The frontend communicates with the backend through HTTP requests. 

### Tech Stack

### Backend

* .NET / ASP.NET Core Web API
* C#
* REST API
* In-memory task storage

### Frontend

* React
* Vite
* JavaScript
* CSS

### Features

* Create a task with a title, description, and status
* View all tasks
* Search tasks
* Update task details and status
* Delete tasks
* Basic validation for required task titles
* Table and card views
* Responsive dark-themed interface

### Project Structure

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
```

### How It Works

The application operates as a decoupled full-stack architecture where the React user interface communicates with the ASP.NET Core backend over HTTP. Because the API utilizes in-memory storage, task data persists only while the backend server remains active. 

### API Architecture

The backend API is hosted locally on http://localhost:5019. 

| HTTP Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/tasks` | Retrieves all tasks |
| `POST` | `/api/tasks` | Creates a new task |
| `PUT` | `/api/tasks/{id}` | Updates a task's details or status |
| `DELETE` | `/api/tasks/{id}` | Deletes a task by ID |

### Running the Project

Clone the repository and move into the project directory:

git clone git@github.com:immaculatechepkirui/task_tracker.git

cd task_tracker

### 1. Start the Backend

In the first terminal:

cd tasktracker_backend

dotnet run

The API will run at:

http://localhost:5019

You can verify it is working with:

curl http://localhost:5019/api/tasks

### 2. Start the Frontend

Open a second terminal and run:

cd ~/task_tracker/tasktracker_frontend

npm install

npm run dev

Open the local URL provided by Vite, usually:

http://localhost:5173


⚠️ **Note:** Both servers must run concurrently for the application to function properly. 

### Task Statuses

Each task cycles through the following workflow states: 

* Not started
* In Progress
* Done

### Implementation Notes

This project serves as a full-stack task management exercise focusing on cross-origin communication between React and a .NET REST API. 

* **Persistence:** Uses in-memory storage instead of a persistent database.
* **Data Lifecycle:** Restarting the backend service completely resets the task list back to its default state.

### Future Improvements

* **Persistent Storage:** Integrate Entity Framework Core with an SQLite or PostgreSQL database.
* **Security:** Implement user authentication and authorized route access.
* **Metadata:** Add task due dates, priority tags, and categorization.
* **Optimization:** Implement server-side pagination and task filtering.
* **Quality Assurance:** Write automated unit tests for the API controllers and React components.
* **DevOps:** Configure production deployment pipelines and enhanced API error handling middlewares.
