import React from 'react';
import { useState, useEffect } from 'react';
import { createToDo, fetchTasks, updateTask } from '../../services/todo.js';
import Input from '../../components/Input.js';
import List from '../../components/List.js';

export default function Todo() {
  const [task, setTask] = useState([]);
  const [list, setList] = useState([]);
  const [complete, setComplete] = useState(false);
  // const [selectedTask, setSelectedTask] = useState([]);
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTasks();
      setList(data);
      setLoading(false);
    };
    fetchData();
  }, [loading]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await updateTask(task);
  //     setSelectedTask(data);
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, [task, loading]);

  if (loading) {
    return <h1>Loading</h1>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createToDo(task);
      alert('You added a task!');
    } catch (e) {
      alert('failed to create');
    }
  };

  const handleChange = async (e) => {
    e.preventDefault();
    try {
      setChecked(!checked);
      setComplete(true);
      updateTask(complete);
      alert('Good job completing your task!');
    } catch (e) {
      alert('failed to update');
    }
  };

  return (
    <div>
      <List list={list} />
      <Input
        handleSubmit={handleSubmit}
        setTask={setTask}
        checked={checked}
        setChecked={setChecked}
        handleChange={handleChange}
      />
    </div>
  );
}
