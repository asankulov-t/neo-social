import {combineReducers, createStore} from "redux";
import ProfileReducer from "./ProfileReducer";
import DialogReducer from "./DialogReducer";

let reducers = combineReducers({
    profileReducer: ProfileReducer,
    dialogReducer: DialogReducer
})
let store = createStore(reducers)

export default store