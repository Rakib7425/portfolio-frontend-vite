import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
	name: "config",
	initialState: {
		isEditModalOpen: false,
	},

	reducers: {
		toggleModalTo: (state, action) => {
			state.isEditModalOpen = action.payload;
		},
	},
});

export const { toggleModalTo } = configSlice.actions;

export default configSlice.reducer;
