import { combineReducers } from "redux";
import salesReducer from './sales';

const rootReducer = combineReducers({
    sales: salesReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;