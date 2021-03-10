import React, { useState } from "react";
import PropTypes from "prop-types";

//include images into your bundle

function Todo({ todo, index, completeTodo, deleteTodo }) {
	return (
		<div
			style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
			className="todo">
			{todo.text}
			<div>
				<button onClick={() => completeTodo(index)}> Done</button>
				<button onClick={() => deleteTodo(index)}> X</button>
			</div>
		</div>
	);
}

function TodoForm({ addTodo }) {
	const [value, setValue] = useState("");

	const handleSubmit = e => {
		e.preventDefault();
		if (!value) return;
		addTodo(value);
		setValue("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				className="input"
				value={value}
				placeholder="Add Todo..."
				onChange={e => setValue(e.target.value)}
			/>
		</form>
	);
}

//create your first component
export function Home() {
	const [todos, setTodos] = useState([]);

	const addTodo = text => {
		const NewTodos = [...todos, { text }];
		setTodos(NewTodos);
	};

	const completeTodo = index => {
		const NewTodos = [...todos];
		NewTodos[index].isCompleted = true;
		setTodos(NewTodos);
	};

	const deleteTodo = index => {
		const NewTodos = [...todos];
		NewTodos.splice(index, 1);
		setTodos(NewTodos);
	};

	return (
		<div className="app">
			<div className="tittle">
				<h1>Todo List</h1>
			</div>
			<div className="todo-list container mt-5 text-center">
				<TodoForm addTodo={addTodo} />
				{todos.map((todo, index) => (
					<Todo
						key={index}
						index={index}
						todo={todo}
						completeTodo={completeTodo}
						deleteTodo={deleteTodo}
					/>
				))}
			</div>
		</div>
	);
}
