import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/UserSlice";
import flowReducer from "./Slices/FlowSlice";
// import templatesReducer from "./Slices/TemplateDict";
import templatesReducer from "./Slices/TemplatesSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    flow: flowReducer,
    templates: templatesReducer,
  },
});

export type RootStoreState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
