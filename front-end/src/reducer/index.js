import { combineReducers } from 'redux';
import {registerUser, loginUser} from './user.reducer'


const rootReducer = combineReducers({
  registerUser,
  loginUser
});

export default rootReducer;