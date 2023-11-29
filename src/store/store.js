import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "./adminSlice";
import configSlice from "./configSlice";
import singleProjectSlice from "./singleProjectSlice";

export const store = configureStore({
	reducer: {
		admin: adminSlice,
		config: configSlice,
		singleProject: singleProjectSlice,
	},
});
