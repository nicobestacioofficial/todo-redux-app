import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { todoAPI } from "../../api";

export const fetchTodos = createAsyncThunk("todos/fetchAll", () =>
  todoAPI.fetchAll()
);

export const deleteTodo = createAsyncThunk("todo/delete", async (id) => {
  await todoAPI.deleteOne(id); // Call the corresponding API method to delete
  return id; // Return the ID to be used in the reducer
});

export const updateTodo = createAsyncThunk("todo/update", async (payload) => {
  const response = await todoAPI.updateOne(payload); // Call the corresponding API method to update
  return response; // Return the updated todo object
});

export const addTodo = createAsyncThunk("todo/add", async (todo) => {
  const response = await todoAPI.createOne(todo); // Call the corresponding API method to create
  return response; // Return the newly created todo object
});

const initialState = [];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state = action.payload; // Assign the fetched data directly to the state
    });

    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.meta.arg);
      if (index !== -1) state.splice(index, 1);
    });

    builder.addCase(addTodo.fulfilled, (state, action) => {
      state.push(action.payload); // Add the new todo to the state
    });

    builder.addCase(updateTodo.fulfilled, (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.meta.arg.id);
      if (index !== -1) {
        state[index] = action.payload; // Update the todo in the state
      }
    });
  },
});

export default todosSlice.reducer;
