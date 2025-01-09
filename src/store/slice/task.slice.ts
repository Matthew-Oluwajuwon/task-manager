import { TaskState } from "@/types/tasks.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: TaskState = {
  showAddTaskModal: false,
  showMoreModal: false,
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    // add reducers here
    onShowAddTaskModal: (state, action: PayloadAction<boolean>) => {
      state.showAddTaskModal = action.payload;
    },
    onShowMoreModal: (state, action: PayloadAction<boolean>) => {
      state.showAddTaskModal = action.payload;
    },
  },
});

export const { onShowAddTaskModal, onShowMoreModal } = taskSlice.actions;
export const taskReducer = taskSlice.reducer;
