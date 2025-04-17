import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { updateLocalStorageItem } from "../../utils/utils";

const initialState: UserState = {
  user: undefined,
  credits: 0,
  websites: [],
  purchaseHistory: [],
  burgerBttnIsOpen: false,
  lang: "GB_ENG",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState["user"]>) => {
      const val = action.payload;
      state.user = val;
      // state.credits = 8000;
    },
    handleBurgerBttnClick: (
      state,
      action: PayloadAction<UserState["burgerBttnIsOpen"]>
    ) => {
      const val = action.payload;
      state.burgerBttnIsOpen = val;
      // state.credits = 8000;
    },
    addToHistory: (state, action: PayloadAction<number>) => {
      state.purchaseHistory.push(action.payload);
    },
    updateCredits: (state, action: PayloadAction<number>) => {
      const updatedCredits = action.payload;
      state.credits = updatedCredits;
      //update locals
      updateLocalStorageItem("credits", String(updatedCredits));
    },
    addCredits: (state, action: PayloadAction<number>) => {
      const newCredits = action.payload;
      const updatedCredits = Number(state.credits) + Number(newCredits);
      //update locals
      state.credits = updatedCredits;
      updateLocalStorageItem("credits", String(updatedCredits));
    },
    removeCredits: (state, action: PayloadAction<number>) => {
      const newCredits = action.payload;
      const updatedCredits = Number(state.credits) - Number(newCredits);
      //update locals
      state.credits = updatedCredits;
      updateLocalStorageItem("credits", String(updatedCredits));
    },
    updateWebsites: (state, action: PayloadAction<AllWebsites>) => {
      const websites = action.payload;

      state.websites = websites;
    },
    setLang: (state, action: PayloadAction<Lang>) => {
      state.lang = action.payload;
    },
    addWebsite: (state, action: PayloadAction<Website>) => {
      const website = action.payload;
      const id = state.websites.length;
      const createdAt = String(Date.now());
      const finalWebsite = { ...website, id, createdAt };
      const websites = state.websites;

      const updatedWebsites = [...websites, finalWebsite];

      localStorage.setItem("websites", JSON.stringify(updatedWebsites));
      state.websites = updatedWebsites;
    },
  },
});

export const {
  setLang,
  setUser,
  updateWebsites,
  addWebsite,
  addToHistory,
  removeCredits,
  addCredits,
  updateCredits,
  handleBurgerBttnClick,
} = userSlice.actions;

export default userSlice.reducer;
