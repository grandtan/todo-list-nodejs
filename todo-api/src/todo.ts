import { Router, Request, Response } from "express";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const router = Router();
let todos: Todo[] = [];
let idCounter = 1;

// Get all todos
router.get("/", (req: Request, res: Response) => {
  res.json(todos);
});

// Create a new todo
router.post("/", (req: Request, res: Response) => {
  const newTodo: Todo = {
    id: idCounter++,
    title: req.body.title,
    completed: false,
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

router.put("/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const todo = todos.find((t) => t.id === id);

  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  todo.title = req.body.title !== undefined ? req.body.title : todo.title;
  todo.completed =
    req.body.completed !== undefined ? req.body.completed : todo.completed;

  res.json(todo);
});

// Delete a todo
router.delete("/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  todos = todos.filter((t) => t.id !== id);

  res.status(204).send();
});

export default router;
