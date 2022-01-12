import React from 'react';
import './Todo.css';

export default function List({ list, handleClick }) {
  return (
    <>
      {list.map((item) => (
        <div className="tasks" key={item.id}>
          <label>
            <li className="list-item">
              <input
                type="checkbox"
                checked={item.is_complete}
                onChange={() => {
                  handleClick(item);
                }}
              />
            </li>
            {item.task}
          </label>
        </div>
      ))}
    </>
  );
}
