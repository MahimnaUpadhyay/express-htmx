import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import Todo_struct from './todo_struct';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../../client/views"));

let todos: Todo_struct[] = [];

// Show Todos
app.get('/', (_req: Request, _res: Response): void => {
    _res.render("index", { todo: todos });
});

// Add Todos
app.post("/post-todo", (_req: Request, _res: Response): void => {
    try {
        const task = _req.body.task;
        const isCompleted = _req.body.isCompleted || false;
      
        const id = todos.length + 1;
      
        const newTodo: Todo_struct = {
          id,
          task,
          isCompleted
        };
        todos.push(newTodo);
      
        _res.render('../../client/components/list-items.ejs', { data: newTodo });
    } catch (error) {
        console.log("There has been an error while adding task", error)
        _res.status(500).send("Interal Server Error")
    }
});

// Start the server
app.listen(9090, (): void => {
    console.log('Server is running on port 8080');
});