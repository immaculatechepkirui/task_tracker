function TaskToolbar({
  searchTerm,
  onSearchChange,
  onAddTask,
  viewMode,
  onViewChange,
}) {
  return (
    <section className="task-toolbar">
      <div className="task-toolbar__heading">
        <p className="eyebrow">TASK MANAGEMENT</p>

        <h2>All tasks</h2>

        <p className="task-toolbar__description">
          Manage, track and update your work from one place.
        </p>
      </div>

      <div className="task-toolbar__actions">
        <label className="search-field">
          <span className="search-field__icon">⌕</span>

          <input
            type="search"
            placeholder="Search tasks..."
            value={searchTerm}
            onChange={(event) =>
              onSearchChange(event.target.value)
            }
          />
        </label>

        <div className="view-toggle" aria-label="Change task view">
          <button
            type="button"
            className={`view-toggle__button ${
              viewMode === "table"
                ? "view-toggle__button--active"
                : ""
            }`}
            onClick={() => onViewChange("table")}
          >
            <span>▤</span>
            Table
          </button>

          <button
            type="button"
            className={`view-toggle__button ${
              viewMode === "cards"
                ? "view-toggle__button--active"
                : ""
            }`}
            onClick={() => onViewChange("cards")}
          >
            <span>▦</span>
            Cards
          </button>
        </div>

        <button
          type="button"
          className="button button--primary"
          onClick={onAddTask}
        >
          <span>+</span>
          Add task
        </button>
      </div>
    </section>
  );
}

export default TaskToolbar;
