import { createStore } from "redux";
import { createAction, createReducer } from "@reduxjs/toolkit";

const TODO_LIST = "TODO_LIST";

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteToDo]: (state, action) =>
    state.filter((toDo) => toDo.id !== action.payload),
});

const initState = JSON.parse(localStorage.getItem(TODO_LIST)) || [];

const store = createStore(reducer, initState);

store.subscribe(() =>
  localStorage.setItem(TODO_LIST, JSON.stringify(store.getState()))
);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
