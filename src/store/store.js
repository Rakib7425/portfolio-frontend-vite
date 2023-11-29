import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "./adminSlice";
import configSlice from "./configSlice";

export const store = configureStore({
	reducer: {
		admin: adminSlice,
		config: configSlice,
	},
});
