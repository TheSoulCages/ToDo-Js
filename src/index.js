
import './styles.css';
import { Todo, TodoList }  from './classes';
import { crearTodoHtml }  from './js/componentes';
//import { saludar } from './js/componentes.js';
//import { Todo } from './classes/todo.class.js';
//import { TodoList } from './classes/todo-list.class';
//

export const todoList  = new TodoList();

todoList.todos.forEach( todo => crearTodoHtml( todo )); 

const newTodo = new Todo('aprender Javascript');
//todoList.nuevoTodo( newTodo);
//newTodo.imprimirClase();
console.log( 'todos', todoList.todos );
todoList.todos[0].imprimirClase();


// en este caso se puede dejar asi, pero tambien se puede usar esta opcion:↓

//todoList.todos.forEach( crearTodoHtml ); --> pero esta solo sirve si el argumento que se tiene del 
//callback del foreach del metodo crearTodoHtml es el primero que va a regresar el foreach y es sólo un argumento. en cambio si fuera
//todoList.todos.forEach( crearTodoHtml( a,b ));  aqui ya no se podría


//const tarea = new Todo('aprender javascript');

//todoList.nuevoTodo( tarea );

//console.log( todoList );
//crearTodoHtml( tarea );

//localStorage.setItem('mi-key','abc1234');

