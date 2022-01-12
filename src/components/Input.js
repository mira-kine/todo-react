import React from 'react';
import './Todo.css';

export default function Input({ handleSubmit, setTask, task }) {
  return (
    <form>
      <div className="form-input">
        <label>Add task here:</label>
        <input
          placeholder="add task!"
          name="task"
          type="text"
          value={task}
          onInput={(e) => setTask(e.target.value)}
        />
        <button className="add-task-button" onClick={handleSubmit}>
          Add task
        </button>
      </div>
    </form>
  );
}
