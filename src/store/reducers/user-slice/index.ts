import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IState {
    list: number[];
    activeId: number;
}

const initialState: IState = {
  list: [],
  activeId: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    removeUserFromList(state: IState, action: PayloadAction<number>) {
      state.list = state.list.filter(item => item !== action.payload);
    },
    addUserToList(state: IState, action: PayloadAction<number>) {
      if (!state.list.find(item => item === action.payload)) {
        state.list.push(action.payload);
        state.list.sort((a, b) => a - b);
      }
    },
    clearAll(state: IState, action: PayloadAction<void>) {
      state.list = [];
    },
    setActiveId(state: IState, action: PayloadAction<number>) {
      state.activeId = action.payload;
    },
    clearActiveId(state: IState, action: PayloadAction<void>) {
      state.activeId = null;
    },
  },
});

export const { removeUserFromList, addUserToList, clearAll, setActiveId, clearActiveId } = userSlice.actions;

export default userSlice.reducer;