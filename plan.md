# Plan for Todo lab

## App.js

- [x] Routes "/" that switches between sign in/sign up according to user status
- [ ] Route "/todo" that shows the todo list view once user has signed in

## services

user.js

- [x] getUser
- [x] signInUser
- [x] signUpUser
- [x] logout
      todo.js
- [x] createToDo
- [ ] complete todos
- [ ] update todos
- [ ] view todos
- [ ] delete tasks (stretch goal)

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
  - add
  - complete
  - delete (stretch)

### Views

- [ ] Todo.js that shows list of tasks added, has option to add, complete and delete tasks

### Components

- [ ] List.js that renders list added -> events submit form = add new task
  - click to complete = delete task, update task as completed
- [ ] update task = click to update (stretch)
