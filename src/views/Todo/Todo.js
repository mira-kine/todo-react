import React from 'react';
import { useState, useEffect } from 'react';
import { createToDo, fetchTasks, completedTask } from '../../services/todo.js';
import Input from '../../components/Input.js';
import List from '../../components/List.js';

export default function Todo() {
  const [task, setTask] = useState([]);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  // setNewTask

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTasks();
      setList(data);
      setLoading(false);
    };
    fetchData();
  }, [loading]);

  if (loading) {
    return <h2>Loading</h2>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await createToDo(task);
      setTask('');
      setList((prev) => [...prev, resp[0]]);
      alert('You added a task!');
    } catch (e) {
      alert('failed to create');
    }
  };

  const handleClick = async (task) => {
    await completedTask(task.id, !task.is_complete);
    const resp = await fetchTasks();
    setList(resp);
  };

  return (
    <div>
      <List list={list} handleClick={handleClick} />
      <Input handleSubmit={handleSubmit} setTask={setTask} />
    </div>
  );
}
