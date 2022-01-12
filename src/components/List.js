import React from 'react';
import './Todo.css';

export default function List({ list, handleClick, handleDelete }) {
  return (
    <>
      <h3>To Do:</h3>
      {list.map((item) => (
        <ul className="tasks" key={item.id}>
          <label>
            <li className="list-item">
              <input
                type="checkbox"
                checked={item.is_complete}
                onChange={() => {
                  handleClick(item);
                }}
              />
              {item.task}
            </li>
          </label>
          <button onClick={handleDelete}>Delete</button>
        </ul>
      ))}
    </>
  );
}
