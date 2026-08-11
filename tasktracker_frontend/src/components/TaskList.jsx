import TaskItem from "./TaskItem";

function TaskList({
  tasks,
  onEdit,
  onDelete,
  viewMode,
}) {
  if (tasks.length === 0) {
    return (
      <section className="empty-state">
        <div className="empty-state__icon">✦</div>

        <h3>No tasks found</h3>

        <p>
          Try a different search or create a new task.
        </p>
      </section>
    );
  }

  return (
    <section
      className={
        viewMode === "cards"
          ? "task-list task-list--cards"
          : "task-list"
      }
    >
      {viewMode === "table" && (
        <div className="task-list__header">
          <span>Task</span>
          <span>Actions</span>
        </div>
      )}

      <div
        className={
          viewMode === "cards"
            ? "task-list__body task-list__body--cards"
            : "task-list__body"
        }
      >
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onEdit={onEdit}
            onDelete={onDelete}
            viewMode={viewMode}
          />
        ))}
      </div>
    </section>
  );
}

export default TaskList;
