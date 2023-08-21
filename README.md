# TODO Web Application

This is a simple TODO Application which talks to backend API, renders ToDo-list and has basic TODO CRUD operations.

It uses [Redux-toolkit](https://redux-toolkit.js.org/) for state management, [Material UI](https://mui.com/) as UI/UX library and [json-server](https://github.com/typicode/json-server) for mocking the API

You task is to find all the places with `// TODO:` comments in the code and fill it with an appropriate code.

## Prerequisites

NodeJS >= 14.x

## Build Scripts

- Install dependencies

  ```bash
  $ npm install
  ```

- Start REST API server

  ```bash
  $ npm run server
  ```

- Start development server

  ```bash
  $ npm run dev
  ```

## Starting the Application

Running `npm run server` will start the REST API server that you will use for this project.
This is a sample back-end server that will help you mock or prototype sending API requests.

You can verify that it's working by visiting http://localhost:3000/todos
It should respond with JSON-list of objects (todos)

Executing `npm run dev` will start your React front-end.
You can open the frontend by visiting http://localhost:5173/

## TODO API

Below is a description of API, using which, you can complete the missing parts of the Application.

### Create a todo

> POST /todos
>
> body (JSON): {"title": "New todo", "text": "todo text", "state": "new" / "in progress" / "done"}

### READ

> GET /todos

### UPDATE

> PUT /todos/:id
>
> body (JSON): {"title": "New title", "text": "new text", "state": "new" / "in progress" / "done"}

### DELETE

> GET /todos/:id
