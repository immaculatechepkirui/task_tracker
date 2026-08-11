import { useEffect, useMemo, useState } from "react";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskToolbar from "./components/TaskToolbar";

import {
  createTask,
  deleteTask,
  getTasks,
  updateTask,
} from "./services/taskService";

function App() {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const [viewMode, setViewMode] = useState("table");

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  useEffect(() => {
    async function loadTasks() {
      try {
        setIsLoading(true);

        const data = await getTasks();

        setTasks(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    loadTasks();
  }, []);

  const filteredTasks = useMemo(() => {
    const normalizedSearch = searchTerm
      .trim()
      .toLowerCase();

    if (!normalizedSearch) {
      return tasks;
    }

    return tasks.filter((task) => {
      return (
        task.title
          .toLowerCase()
          .includes(normalizedSearch) ||
        task.description
          .toLowerCase()
          .includes(normalizedSearch) ||
        task.status
          .toLowerCase()
          .includes(normalizedSearch)
      );
    });
  }, [tasks, searchTerm]);

  function openCreateForm() {
    setSelectedTask(null);
    setIsFormOpen(true);
  }

  function openEditForm(task) {
    setSelectedTask(task);
    setIsFormOpen(true);
  }

  function closeForm() {
    setSelectedTask(null);
    setIsFormOpen(false);
  }

  async function handleSubmit(formData) {
    try {
      setError("");

      if (selectedTask) {
        const updatedTask = await updateTask(
          selectedTask.id,
          formData
        );

        setTasks((currentTasks) =>
          currentTasks.map((task) =>
            task.id === selectedTask.id
              ? updatedTask
              : task
          )
        );
      } else {
        const createdTask =
          await createTask(formData);

        setTasks((currentTasks) => [
          ...currentTasks,
          createdTask,
        ]);
      }

      closeForm();
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleDelete(id) {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (!shouldDelete) {
      return;
    }

    try {
      setError("");

      await deleteTask(id);

      setTasks((currentTasks) =>
        currentTasks.filter(
          (task) => task.id !== id
        )
      );
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <main className="app-shell">
      <div className="background-glow background-glow--one" />
      <div className="background-glow background-glow--two" />

      <div className="app-container">
        <header className="site-header">
          <a
            href="/"
            className="brand"
            onClick={(event) =>
              event.preventDefault()
            }
          >
            <span className="brand__mark">T</span>

            <span className="brand__text">
              task<span>flow</span>
            </span>
          </a>

          <div className="header-status">
            <span className="header-status__dot" />
            <span>System operational</span>
          </div>
        </header>

        <section className="page-intro">
          <div>
            <p className="eyebrow">
              AMREF / ICT SHARED SERVICES
            </p>

            <h1>
              Work with clarity.
              <br />
              <span>Move with purpose.</span>
            </h1>

            <p className="page-intro__description">
              A focused workspace for managing tasks,
              tracking progress and keeping work moving.
            </p>
          </div>

          <div className="task-summary">
            <span className="task-summary__number">
              {tasks.length}
            </span>

            <span className="task-summary__label">
              Total tasks
            </span>
          </div>
        </section>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <TaskToolbar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onAddTask={openCreateForm}
          viewMode={viewMode}
          onViewChange={setViewMode}
        />

        {isLoading ? (
          <section className="loading-state">
            <div className="loading-spinner" />
            <p>Loading tasks...</p>
          </section>
        ) : (
          <TaskList
            tasks={filteredTasks}
            onEdit={openEditForm}
            onDelete={handleDelete}
            viewMode={viewMode}
          />
        )}

        <footer className="site-footer">
          <span>TaskFlow</span>
          <span>Built with React + ASP.NET Core</span>
        </footer>
      </div>

      {isFormOpen && (
        <TaskForm
          task={selectedTask}
          onSubmit={handleSubmit}
          onClose={closeForm}
        />
      )}
    </main>
  );
}

export default App;