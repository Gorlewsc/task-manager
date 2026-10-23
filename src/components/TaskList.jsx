function TaskList({ tasks, toggleTaskCompletion, setTasks }) {
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => setTasks(toggleTaskCompletion(tasks, task.id))}
          />
          <p>Completed: {task.completed ? "Yes" : "No"}</p>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
