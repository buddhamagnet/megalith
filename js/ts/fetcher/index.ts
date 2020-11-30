import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

let point: { x: number; y: number } = {
  x: 10,
  y: 100,
};

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log({ id, title, completed });
};

axios.get(url).then(({ data }) => {
  const todo = data as Todo;
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;
  logTodo(id, title, completed);
});
