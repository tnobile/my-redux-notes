import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid'

const { actions, reducer } = createSlice({
  name: "todos",
  initialState: {
    list: [
      {
        itemId: nanoid(),
        task: "Add the delete functionality",
        completed: false
      }
    ],
    deleted: []
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = {
        itemId: nanoid(),
        task: action.payload.todoItem,
        completed: false
      };
      state.list.push(newItem);
    },
    deleteDone: (state, action) => {
      state.deleted = [...state.deleted,...state.list.filter(item => item.completed)]
      const updateList = state.list.filter(item => !item.completed);
      state.list = updateList;
    },
    updateList: (state, action) => {
      const { itemIndex } = action.payload;
      const updatedList = state.list.map(item => {
        if (item.itemId === itemIndex) {
          item.completed = !item.completed;
        }
        return item;
      });
      state.list = updatedList;
    },
    removeItem: state => state
  }
});

export const { addItem, deleteDone, updateList } = actions;

export default reducer;