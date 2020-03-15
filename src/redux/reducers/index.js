import {combineReducers} from "redux"
import UserReducer from './User';

const reducers = combineReducers({
    ...UserReducer
})

export default reducers;