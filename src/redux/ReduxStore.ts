import {applyMiddleware, combineReducers, createStore} from "redux";
import ProfileReducer from "./ProfileReducer";
import DialogReducer from "./DialogReducer";
import UsersReducer from "./UsersReducer";
import {AuthReducer} from "./AuthReducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    profileReducer: ProfileReducer,
    dialogReducer: DialogReducer,
    userReducer:UsersReducer,
    AuthReducer
})
let store = createStore(reducers,applyMiddleware(thunkMiddleware))
export default store