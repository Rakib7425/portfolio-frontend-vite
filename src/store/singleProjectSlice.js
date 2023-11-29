import { createSlice } from "@reduxjs/toolkit";

const singleProjectSlice = createSlice({
	name: "singleProject",
	initialState: {
		singleProject: [],
	},

	reducers: {
		setSingleProject: (state, action) => {
			state.singleProject = action.payload;
		},
	},
});

export const { setSingleProject } = singleProjectSlice.actions;

export default singleProjectSlice.reducer;
