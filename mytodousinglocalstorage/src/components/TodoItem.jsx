import React from "react";
import { useTodo } from "../contexts/TodoContext";
import { useState } from "react";

function TodoItem({ todo }) {
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.todo);
    const { updateTodo, deleteTodo, compelettoggle } = useTodo();

    const editTodo = () => {
        updateTodo({ ...todo, todo: todoMsg }, todo.id);
        setIsTodoEditable(false);
    };

    const comptogg = () => {
        compelettoggle(todo.id);
    };

    return (
        <div
            className={`flex items-center border border-black/10 rounded-xl px-4 py-3 gap-x-3 shadow-lg duration-300 transition-transform transform hover:scale-[1.02] hover:shadow-xl text-black ${
                todo.completed ? "bg-gradient-to-r from-green-200 to-green-100" : "bg-gradient-to-r from-purple-200 to-pink-100"
            }`}
            style={{
                boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
                transform: "perspective(1000px)",
            }}
        >
            <input
                type="checkbox"
                className="cursor-pointer scale-125 accent-green-600 transition duration-200"
                checked={todo.completed}
                onChange={comptogg}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg text-lg font-medium transition-all duration-300 ${
                    isTodoEditable ? "border-black/20 px-3 py-1 bg-white/70 backdrop-blur-md" : "border-transparent"
                } ${todo.completed ? "line-through text-gray-500" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            <button
                className="inline-flex w-9 h-9 rounded-full text-base border border-black/10 justify-center items-center bg-white hover:bg-green-100 hover:scale-110 transition-all duration-200 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;
                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "💾" : "✏️"}
            </button>
            <button
                className="inline-flex w-9 h-9 rounded-full text-base border border-black/10 justify-center items-center bg-white hover:bg-red-100 hover:scale-110 transition-all duration-200 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
