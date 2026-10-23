function TaskList({ tasks, onToggleTaskCompletion }) {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li
          className={`task-card${task.completed ? " is-completed" : ""}`}
          key={task.id}
        >
          <div className="task-copy">
            <h3>{task.title}</h3>
            {task.description && <p>{task.description}</p>}
            <span className="task-status">
              {task.completed ? "Completed" : "In progress"}
            </span>
          </div>
          <label className="completion-control">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleTaskCompletion(task.id)}
              aria-label={`Mark "${task.title}" as ${
                task.completed ? "incomplete" : "complete"
              }`}
            />
            <span className="checkbox-visual" aria-hidden="true" />
          </label>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
