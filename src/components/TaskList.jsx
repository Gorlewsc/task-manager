function TaskList({ tasks }) {
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Completed: {task.completed ? "Yes" : "No"}</p>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
