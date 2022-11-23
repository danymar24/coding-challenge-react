import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { combineReducers } from '@reduxjs/toolkit'
import { foodSlice } from './features/food';
import storage from 'redux-persist/lib/storage'
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
const persistConfig = {
    key: 'root',
    storage: storage,
    blacklist: ['apiProductSlice'],
}
export const rootReducers = combineReducers({
    food: foodSlice.reducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducers)

/**
 * Redux store
 * Used to store all the saved data, this will save it to the local storage
 */
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})
setupListeners(store.dispatch)
export default store