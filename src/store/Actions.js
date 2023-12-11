import { ADD_MENU, ADD_SETTING } from "./Contants";

export const addMenu = (payload) => ({
  type: ADD_MENU,
  payload,
});

export const addSetting = (payload) => ({
  type: ADD_SETTING,
  payload,
});
