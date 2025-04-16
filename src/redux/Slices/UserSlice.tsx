import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: UserState = {
  user: {
    email: "",
    password: "",
  },
  credits: 0,
  websites: {},
  purchaseHistory: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{
        email: string;
        password: string;
        credits: number;
      }>
    ) => {
      state.user.email = action.payload.email;
      state.user.password = action.payload.password;
      state.credits = 8000;
    },
    addToHistory: (state, action: PayloadAction<number>) => {
      state.purchaseHistory.push(action.payload);
    },
    updateCredits: (state, action: PayloadAction<number>) => {
      state.credits = action.payload;
    },
    updateWebsites: (state, action: PayloadAction<Website>) => {
      const website = action.payload;
      state.websites[website.id!] = website;
    },
  },
});

export const { setUser, updateWebsites, addToHistory, updateCredits } =
  userSlice.actions;

export default userSlice.reducer;
