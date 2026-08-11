function TaskItem({
  task,
  onEdit,
  onDelete,
}) {
  const statusClass = task.status
    .toLowerCase()
    .replaceAll(" ", "-");

  return (
    <article className="task-item">
      <div className="task-item__main">
        <div className="task-item__title-row">
          <h3>{task.title}</h3>

          <span
            className={`status-badge status-badge--${statusClass}`}
          >
            {task.status}
          </span>
        </div>

        <p>{task.description}</p>
      </div>

      <div className="task-item__actions">
        <button
          type="button"
          className="icon-button"
          onClick={() => onEdit(task)}
          aria-label={`Edit ${task.title}`}
        >
          Edit
        </button>

        <button
          type="button"
          className="icon-button icon-button--danger"
          onClick={() => onDelete(task.id)}
          aria-label={`Delete ${task.title}`}
        >
          Delete
        </button>
      </div>
    </article>
  );
}

export default TaskItem;
