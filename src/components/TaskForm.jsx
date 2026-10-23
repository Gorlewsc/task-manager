import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTask({ title, description });
      setTitle("");
      setDescription("");
    }
  }; // make description optional, so we don't need to check if it's empty

  return (
    <section className="form-section" aria-labelledby="add-task-heading">
      <p className="eyebrow">MAKE A PLAN</p>
      <h2 id="add-task-heading">Add a task</h2>
      <form className="task-form" onSubmit={handleSubmit}>
        <label htmlFor="task-title">Task name</label>
        <input
          id="task-title"
          type="text"
          placeholder="e.g. Plan the week"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label htmlFor="task-description">Description</label>
        <textarea
          id="task-description"
          placeholder="Add a few details (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="3"
        />
        <button type="submit">Add task <span aria-hidden="true">+</span></button>
      </form>
    </section>
  );
}

export default TaskForm;
