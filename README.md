# Todo List App with TypeScript, Express.js, EJS, and HTMX

A simple Todo List app built with **TypeScript**, **Express.js**, **EJS**, and **HTMX**. This project was developed as part of my learning journey to explore **template rendering** in **Express.js**, **EJS**, and **HTMX**.

## Features

- **Add Todos**: Users can add new todo items to the list.
- **View Todos**: Users can view all the todos they have added.

## Tech Stack

- **TypeScript**: Ensures type safety and better developer experience.
- **Express.js**: A minimal web framework for building the backend.
- **EJS**: Embedded JavaScript templates for rendering dynamic HTML views on the server-side.
- **HTMX**: Enhances HTML with attributes to handle interactivity without the need for complex JavaScript frameworks like React.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/todo-list-app.git
   cd todo-list-app

2. Install dependencies:
    ```bash
   npm install

3. Run Application
   ```bash
    npm run dev

## How It Works
- The app allows users to add todos via a form.
- The todo list is dynamically rendered on the server-side using EJS.
HTMX is used to handle form submissions and update the todo list without a full page reload.
- TypeScript is used for type safety throughout the project.

## Why HTMX Over React?
- While React is a popular choice for building interactive UIs, HTMX was used in this project for the following reasons:

- Simplicity: HTMX is simpler to integrate and doesn’t require a complex build process or front-end tooling.

- Server-Side Rendering: HTMX works well with Express.js for rendering content on the server, improving performance and SEO.
Fewer Dependencies: HTMX requires less client-side JavaScript, which leads to a smaller bundle size and faster load times.

- Progressive Enhancement: HTMX allows for gradual enhancement of static HTML, making it easier to add interactivity without rewriting the whole app.

## Contributing
Feel free to fork the repository, open issues, and submit pull requests. Contributions are always welcome!
