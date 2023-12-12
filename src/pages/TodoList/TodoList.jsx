import { useRef } from "react";
import { useGlobalState } from "../../hooks";
import {
  addTodo,
  changeTodo,
  changeTypeTodo,
  deleteTodo,
  deleteTodoCompleted,
  editTodo,
  toggleChecked,
} from "../../store";
import TodoItem from "../../components/TodoItem";
import { DownOutlined } from "@ant-design/icons";
import { Button } from "antd";

const TodoList = () => {
  const [globalState, dispatch] = useGlobalState();
  const { todoString, todoList, typeTodo } = globalState;
  const inputRef = useRef(null);
  const buttons = ["All", "Active", "Completed"];

  const handleChangeTodo = async (e) => {
    const todoInput = e.target.value
      ? e.target.value.trim()
      : e.currentTarget.textContent.trim();
    dispatch(changeTodo(todoInput));
  };

  const handleAddTodo = (event) => {
    if (!todoString) return;
    if (event.key && event.key !== "Enter") return;
    if (event.key === "Enter") {
      event.preventDefault();
    }
    dispatch(
      addTodo({
        value: todoString,
        checked: false,
      })
    );
    inputRef?.current?.focus();
    clearTodo();
  };

  const handleEditTodo = (e, id) => {
    if (e.charCode !== 13) return;
    e.preventDefault();
    dispatch(editTodo({ id, value: todoString }));
    e.target.blur();
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const clearTodo = () => {
    dispatch(changeTodo(""));
    inputRef.current.value = "";
  };

  const handleToggleCheckedAll = () => {
    if (todoList.every((item) => item.checked === true)) {
      const newArr = todoList.map((item) => ({ ...item, checked: false }));
      dispatch(toggleChecked(newArr));
    } else {
      const newArr = todoList.map((item) => {
        if (item.checked === false) {
          return {
            ...item,
            checked: true,
          };
        }
        return item;
      });
      dispatch(toggleChecked(newArr));
    }
  };

  const handleClearCompleted = () => {
    dispatch(deleteTodoCompleted());
  };

  const handleTypeTodo = (type) => {
    dispatch(changeTypeTodo(type));
  };

  const getTodoByType = () => {
    switch (typeTodo) {
      case "All": {
        return todoList;
      }
      case "Active": {
        const newArr = todoList.filter((item) => !item.checked);
        return newArr;
      }
      case "Completed": {
        const newArr = todoList.filter((item) => item.checked);
        return newArr;
      }
      default:
        return todoList;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-red-200 my-6 text-8xl">todos</h1>
      <div className="shadow-2xl max-w-2xl">
        <div className="mb-6 flex items-center justify-between gap-4 p-4">
          <span onClick={handleToggleCheckedAll}>
            <DownOutlined />
          </span>
          <input
            type="text"
            id="success"
            className="w-68 p-3 outline-none placeholder-gray-500::placeholder placeholder:italic text-2xl font-semibold text-gray-900"
            placeholder="What need to be done?"
            ref={inputRef}
            value={todoString}
            onChange={handleChangeTodo}
            onKeyDown={handleAddTodo}
          />
          <button
            className="bg-red-200 rounded-lg py-2 px-5"
            onClick={handleAddTodo}
          >
            Add
          </button>
        </div>
        <TodoItem
          data={getTodoByType()}
          onChangeTodo={handleChangeTodo}
          onEditTodo={handleEditTodo}
          onDeleteTodo={handleDeleteTodo}
          dispatch={dispatch}
        />
        <div className="flex items-center mt-5 gap-3">
          <span>
            {todoList.filter((item) => !item.checked).length} item left
          </span>
          <div>
            {buttons.map((item, index) => {
              const props = item !== typeTodo && { type: "text" };
              return (
                <Button
                  key={index}
                  {...props}
                  onClick={() => handleTypeTodo(item)}
                >
                  {item}
                </Button>
              );
            })}
          </div>
          <Button type="text" onClick={handleClearCompleted}>
            Clear completed
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
