//File này sẽ chứa toàn bộ state của ứng dụng
import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './reducers/favoritesSlice';


export const store = configureStore({
    reducer: {
        favorites: favoritesReducer,
    }
})