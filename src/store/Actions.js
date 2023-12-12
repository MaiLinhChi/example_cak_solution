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

export const addMenu = (payload) => ({
  type: ADD_MENU,
  payload,
});

export const addSetting = (payload) => ({
  type: ADD_SETTING,
  payload,
});

export const changeTodo = (payload) => ({
  type: CHANGE_TODO,
  payload,
});

export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload,
});

export const editTodo = (payload) => ({
  type: EDIT_TODO,
  payload,
});

export const deleteTodo = (payload) => ({
  type: DELETE_TODO,
  payload,
});

export const toggleChecked = (payload) => ({
  type: TOGGLE_CHECKED,
  payload,
});

export const deleteTodoCompleted = () => ({
  type: DELETE_TODO_COMPLETED,
});

export const changeTypeTodo = (payload) => ({
  type: CHANGE_TYPE_TODO,
  payload,
});
