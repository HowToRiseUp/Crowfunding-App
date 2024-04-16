import { useReducer, useRef } from "react";
import { v4 } from "uuid";
type ActionType =
  | { type: "ADD"; text: string }
  | { type: "REMOVE"; id: string };

interface Todo {
  id: string;
  text: string;
}

const todoReducer = (state: Todo[], action: ActionType) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: v4(),
          text: action.text,
        },
      ];
    case "REMOVE":
      return state.filter((todo: Todo) => todo.id !== action.id);
    default:
      throw new Error("Unknown action type");
  }
};

const initialValue: Todo[] = [];

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialValue);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleRemoveTodo = (id: string): void => {
    dispatch({ type: "REMOVE", id });
  };
  const handleAddTodo = (): void => {
    if (inputRef.current) {
      dispatch({ type: "ADD", text: inputRef.current.value });
      inputRef.current.value = "";
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-center gap-5">
        <input
          type="text"
          className="border border-gray-400 px-5  py-3 rounded-lg focus:outline-none"
          placeholder="Enter your Todo ..."
          ref={inputRef}
        />
        <button
          className="bg-blue-400 rounded-lg py-3 px-5"
          onClick={handleAddTodo}
        >
          To do Today
        </button>
      </div>
      <div className="list flex flex-col gap-1  mt-5">
        {todos.map((todo: Todo) => (
          <div
            className="item flex gap-2 items-center justify-center"
            key={todo.id}
          >
            <span className="text-xl ">
              {todo.text}\\ {todo.id}
            </span>
            <button
              className="text-sm font-semibold bg-red-500 rounded-lg p-2 flex items-center justify-center text-white"
              onClick={() => handleRemoveTodo(todo.id)}
            >
              remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
