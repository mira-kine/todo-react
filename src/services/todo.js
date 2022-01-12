import { checkError, client } from './client';

export async function createToDo(task) {
  const resp = await client.from('todos').insert([{ task: task, user_id: client.auth.user().id }]);
  return checkError(resp);
}

export async function fetchTasks() {
  const resp = await client.from('todos').select('*');
  return checkError(resp);
}

export async function updateTask(task) {
  const resp = await client.from('todos').update(task).eq('id', task.id);
  return checkError(resp);
}

export async function completedTask(id, is_complete) {
  const resp = await client.from('todos').update({ is_complete: is_complete }).eq('id', id);
  return checkError(resp);
}
