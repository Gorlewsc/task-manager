import { useEffect, useState } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import "./App.css";
import TaskForm from "./components/TaskForm";

function toggleTaskCompletion(tasks, taskId) {
  return tasks.map((task) =>
    task.id === taskId ? { ...task, completed: !task.completed } : task,
  );
}

function App() {
  const [theme, setTheme] = useState("light"); // Dark/light mode toggle; default is light mode
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

  useEffect(() => {
    document.documentElement.dataset.theme = theme;

    return () => {
      delete document.documentElement.dataset.theme;
    };
  }, [theme]);

  function handleToggleTaskCompletion(taskId) {
    setTasks((currentTasks) => toggleTaskCompletion(currentTasks, taskId));
  }

  function handleAddTask(newTask) {
    setTasks((currentTasks) => [
      ...currentTasks,
      { ...newTask, id: crypto.randomUUID(), completed: false },
    ]);
  }

  return (
    <div className="app-shell">
      <Header
        title="My Task Manager"
        subtitle="Organize your day, one task at a time."
        theme={theme}
        onToggleTheme={() =>
          setTheme((currentTheme) =>
            currentTheme === "light" ? "dark" : "light",
          )
        }
      />
      <main className="main-content">
        <section className="task-section" aria-labelledby="tasks-heading">
          <div className="section-heading">
            <div>
              <p className="eyebrow">YOUR OVERVIEW</p>
              <h2 id="tasks-heading">Your tasks</h2>
            </div>
            <p className="task-count">
              {tasks.filter((task) => task.completed).length} of {tasks.length}{" "}
              complete
            </p>
          </div>
          <TaskList
            tasks={tasks}
            onToggleTaskCompletion={handleToggleTaskCompletion}
          />
        </section>
        <TaskForm onAddTask={handleAddTask} />
      </main>
    </div>
  );
}

export default App;
