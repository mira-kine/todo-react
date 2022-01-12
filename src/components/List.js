import React from 'react';

export default function List({ list, checked, handleChange }) {
  return (
    <div>
      {list.map((item) => (
        <div className="tasks" key={item.id}>
          <label>
            <input type="checkbox" checked={checked} onChange={handleChange} />
            {item.task}
          </label>
        </div>
      ))}
    </div>
  );
}
