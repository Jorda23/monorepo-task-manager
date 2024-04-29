import { configureStore, Middleware } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { api } from '../services/ElementList.services'; 
import tasksReducer from "./tasks/slice";

const persistenceMiddleware: Middleware = (store) => (next) => (action) => {
	next(action);
	AsyncStorage.setItem("__redux__state__", JSON.stringify(store.getState()));
};

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    tasks: tasksReducer
  },
  middleware:  (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware, persistenceMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
