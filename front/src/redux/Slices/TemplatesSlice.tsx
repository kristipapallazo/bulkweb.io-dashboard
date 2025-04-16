// TemplatesSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TEMPLATE_BY_ID } from "../TempStaticData";

const templateAllIds: TemplateAllIds = Object.keys(TEMPLATE_BY_ID).map((id) =>
  Number(id)
);

interface TemplatesState {
  templateById: TemplateById;
  templateAllIds: TemplateAllIds;
  favorites: TemplateAllIds;
  myTemplates: TemplateAllIds;
}

export type { TemplatesState };

const initialState: TemplatesState = {
  templateById: TEMPLATE_BY_ID,
  templateAllIds,
  favorites: [],
  myTemplates: [],
};

const templatesSlice = createSlice({
  name: "templates",
  initialState,
  reducers: {
    // setTemplates(state, action: PayloadAction<Template[]>) {},
    addFavorite: (state, action: PayloadAction<number>) => {
      if (!state.favorites.includes(action.payload)) {
        state.favorites.push(action.payload);
      }
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter((id) => id !== action.payload);
    },
    addMyTemplates: (state, action: PayloadAction<number>) => {
      if (!state.myTemplates.includes(action.payload)) {
        state.myTemplates.push(action.payload);
      }
    },
    removeMyTemplates: (state, action: PayloadAction<number>) => {
      state.myTemplates = state.myTemplates.filter(
        (id) => id !== action.payload
      );
    },
  },
});

export const {
  /* setTemplates */
  addFavorite,
  removeFavorite,
  addMyTemplates,
  removeMyTemplates,
} = templatesSlice.actions;

export default templatesSlice.reducer;
