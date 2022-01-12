# Plan for Todo lab

## App.js

- [x] Routes "/" that switches between sign in/sign up according to user status
<!-- - [ ] Route "/todo" that shows the todo list view once user has signed in -->

## services

user.js

- [x] getUser
- [x] signInUser
- [x] signUpUser
- [x] logout
      todo.js
- [x] createToDo
- [x] complete todos - is_complete boolean true or false
- [ ] update todos - fetch Tasks and then reupdate them using .update
- [x] view todos (fetchTasks)
- [ ] delete tasks (stretch goal) - using .delete

## Authorization/Authentication

### States:

- [x] email
- [x] password
- [x] error message
- [x] type (of user state, aka sign in or sign up)

### Views

- [x] Auth.js that toggles between sign up and sign in depending on userstatus

### Components

- [x] AuthForm.js

## To-do page

### States

- tasks
  - [x] add
  - [x] complete
  - [ ] delete (stretch)

### Views

- [x] Todo.js that shows list of tasks added, has option to add, complete and delete tasks

### Components

- [x] List.js that renders list added
- [x] Input.js-> events submit form = add new task
  - click to complete = delete task, update task as completed
- [ ] update task = click to update (stretch)
