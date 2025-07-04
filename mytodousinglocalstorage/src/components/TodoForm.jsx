import { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoForm() {
    const [todo, setTodo] = useState("");
    const { addTodo } = useTodo();

    const add = (e) => {
        e.preventDefault();
        if (!todo.trim()) return;
        addTodo({ todo, completed: false });
        setTodo("");
    };

    return (
        <form
            onSubmit={add}
            className="flex items-center bg-gradient-to-r from-[#ffffff20] to-[#ffffff05] border border-white/10 backdrop-blur-md rounded-xl shadow-xl px-4 py-3 space-x-2 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
        >
            <input
                type="text"
                placeholder="Write Todo..."
                className="flex-grow text-white placeholder-white/70 border-none bg-transparent outline-none px-3 py-2 text-lg rounded-lg focus:ring-2 focus:ring-green-400 transition-all duration-300"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button
                type="submit"
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-md hover:shadow-green-400/50 transition-all duration-200 transform hover:scale-105"
            >
                Add
            </button>
        </form>
    );
}

export default TodoForm;
