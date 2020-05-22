import persistState from "redux-localstorage";
import { configureStore } from "@reduxjs/toolkit";
import { contacts, filter } from "./contactReducer";

const store = configureStore({
	reducer: {
		contacts,
		filter,
	},
	enhancers: [persistState()],
});

export default store;
