import { ToastWaring } from "../utils";
import { ADD_MENU, ADD_SETTING } from "./Contants";

const menu = localStorage.getItem("menu");
const setting = localStorage.getItem("setting");
export const initState = {
  menu: menu ? JSON.parse(menu) : [],
  setting: setting ? JSON.parse(setting) : {},
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
    default:
      return state;
  }
};
