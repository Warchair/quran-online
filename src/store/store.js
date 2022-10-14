import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/dist/query"
import { quranApi } from "../api/api"

export const store = configureStore({
	reducer: {
		[quranApi.reducerPath]: quranApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(quranApi.middleware),
})

setupListeners(store.dispatch)
