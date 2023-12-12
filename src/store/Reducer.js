import {
  ADD_MENU,
  ADD_SETTING,
  ADD_TODO,
  CHANGE_TODO,
  CHANGE_TYPE_TODO,
  DELETE_TODO,
  DELETE_TODO_COMPLETED,
  EDIT_TODO,
  TOGGLE_CHECKED,
} from "./Contants";

const menu = localStorage.getItem("menu");
const setting = localStorage.getItem("setting");
const todoString = JSON.parse(localStorage.getItem("todoString"));
const todoList = JSON.parse(localStorage.getItem("todoList"));
const typeTodo = JSON.parse(localStorage.getItem("typeTodo"));
export const initState = {
  menu: menu ? JSON.parse(menu) : [],
  setting: setting ? JSON.parse(setting) : {},
  todoString: todoString ? todoString : "",
  todoList: todoList ? todoList : [],
  typeTodo: typeTodo ? typeTodo : "All",
};

export const reducer = (state, action) => {
  // console.log(state, action, action.type, action.payload, "state, action");
  switch (action.type) {
    case ADD_MENU:
      return {
        ...state,
        menu: action.payload,
      };
    case ADD_SETTING:
      return {
        ...state,
        setting: action.payload,
      };
    case CHANGE_TODO:
      localStorage.setItem("todoString", JSON.stringify(action.payload));
      return {
        ...state,
        todoString: action.payload,
      };
    case ADD_TODO: {
      const newTodo = state.todoList.slice();
      newTodo.push(action.payload);
      localStorage.setItem("todoList", JSON.stringify(newTodo));
      return {
        ...state,
        todoList: newTodo,
      };
    }
    case EDIT_TODO: {
      const id = action.payload.id;
      const value = action.payload.value;
      const newTodo = state.todoList.slice();
      newTodo.splice(id, 1, { ...newTodo[id], value });
      localStorage.setItem("todoList", JSON.stringify(newTodo));
      return {
        ...state,
        todoList: newTodo,
      };
    }
    case DELETE_TODO: {
      const id = action.payload;
      const newTodo = state.todoList.slice();
      newTodo.splice(id, 1);
      localStorage.setItem("todoList", JSON.stringify(newTodo));
      return {
        ...state,
        todoList: newTodo,
      };
    }
    case TOGGLE_CHECKED: {
      localStorage.setItem("todoList", JSON.stringify(action.payload));
      return {
        ...state,
        todoList: action.payload,
      };
    }
    case DELETE_TODO_COMPLETED: {
      const newArr = state.todoList.filter((item) => !item.checked);

      localStorage.setItem("todoList", JSON.stringify(newArr));
      return {
        ...state,
        todoList: newArr,
      };
    }
    case CHANGE_TYPE_TODO: {
      localStorage.setItem("typeTodo", JSON.stringify(action.payload));
      return {
        ...state,
        typeTodo: action.payload,
      };
    }
    default:
      return state;
  }
};
