import { useState } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import "./App.css";

function toggleTaskCompletion(tasks, taskId) {
  return tasks.map((task) =>
    task.id === taskId ? { ...task, completed: !task.completed } : task,
  );
}

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Complete React project",
      description: "Finish the task manager app using React.",
      completed: false,
    },
    {
      id: 2,
      title: "Read a book",
      description: "Read 'The Pragmatic Programmer' for personal development.",
      completed: true,
    },
    {
      id: 3,
      title: "Exercise",
      description: "Go for a 30-minute run in the park.",
      completed: false,
    },
  ]);

  function handleToggleTaskCompletion(taskId) {
    setTasks((currentTasks) => toggleTaskCompletion(currentTasks, taskId));
  }

  return (
    <>
      <Header
        title="My Task Manager"
        subtitle="Organize your day, one task at a time."
      />
      <TaskList
        tasks={tasks}
        onToggleTaskCompletion={handleToggleTaskCompletion}
      />
    </>
  );
}

export default App;
