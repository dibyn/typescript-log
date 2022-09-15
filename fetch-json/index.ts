import axios from 'axios';
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
const url = 'https://jsonplaceholder.typicode.com/todos/1';
axios
  .get(url)
  .then((response) => {
    const todo = response.data as Todo;
    const id = todo.id;
    const title = todo.title;
    const finished = todo.completed;
    logTodo(id, title, finished);
  })
  .catch((error) => error);
const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
  The todo with ID: ${id}
  Has a title of: ${title}
  Is it finished? ${completed}
`);
};
