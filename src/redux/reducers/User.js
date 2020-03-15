import { USERID } from './../actions/UserInfo';

let initialState = {
    userID:""
}


function userReducer(state=initialState, action){
    switch(action.type){
        case USERID:{
            initialState.userID = action.userID
            return initialState
        }
        default :
            return initialState
    }
}

const UserReducer = {
    user:userReducer
}
export default UserReducer