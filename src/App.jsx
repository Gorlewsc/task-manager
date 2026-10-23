import Header from "./components/Header";
import TaskList from "./components/TaskList";
import "./App.css";

const tasks = [
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
];

function App() {
  return (
    <>
      <Header
        title="My Task Manager"
        subtitle="Organize your day, one task at a time."
      />
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
