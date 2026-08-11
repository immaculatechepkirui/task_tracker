import { useEffect, useState } from "react";

const initialForm = {
  title: "",
  description: "",
  status: "Not started",
};

function TaskForm({
  task,
  onSubmit,
  onClose,
}) {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (task) {
      setForm({
        title: task.title,
        description: task.description,
        status: task.status,
      });
    } else {
      setForm(initialForm);
    }
  }, [task]);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.title.trim()) {
      return;
    }

    onSubmit({
      ...form,
      title: form.title.trim(),
      description: form.description.trim(),
    });
  }

  return (
    <div className="modal-backdrop">
      <section className="task-modal">
        <div className="task-modal__header">
          <div>
            <p className="eyebrow">
              {task ? "EDIT TASK" : "NEW TASK"}
            </p>

            <h2>
              {task ? "Update task" : "Create task"}
            </h2>

            <p className="task-modal__subtitle">
              {task
                ? "Update the details and current progress."
                : "Add a new task to your workspace."}
            </p>
          </div>

          <button
            type="button"
            className="modal-close"
            onClick={onClose}
            aria-label="Close form"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <label className="form-field">
            <span>Task title</span>

            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="e.g. Conduct field assessment"
              required
              autoFocus
            />
          </label>

          <label className="form-field">
            <span>Description</span>

            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Describe what needs to be completed..."
              rows="5"
            />
          </label>

          <label className="form-field">
            <span>Status</span>

            <select
              name="status"
              value={form.status}
              onChange={handleChange}
            >
              <option value="Not started">
                Not started
              </option>

              <option value="In Progress">
                In Progress
              </option>

              <option value="Done">
                Done
              </option>
            </select>
          </label>

          <div className="task-modal__footer">
            <button
              type="button"
              className="button button--secondary"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="button button--primary"
            >
              {task ? "Save changes" : "Create task"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default TaskForm;
