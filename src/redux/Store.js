import { createStore,applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import logger from 'redux-logger'
import { persistReducer,persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from "redux-thunk";
const persistConfig={
    key:'root',
    storage
}
const persistedReducer=persistReducer(persistConfig,rootReducer)
const store=createStore(persistedReducer ,composeWithDevTools(applyMiddleware(logger,thunk)));
export const persistor=persistStore(store)
export default store;