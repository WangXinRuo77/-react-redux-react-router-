import { SaveUserInfo } from '../actions/userinfo';
import { combineReducers } from 'redux';
import Storage from '@utils/storage';
import userStore from '../store/userinfo';

import {	
	// CHANGE_TEXT,
	// BUTTON_CLICK,
	ChangeTextAction,
	ButtonClickAction,
} from '../actions/userinfo';

const user = (state = userStore,action) =>{
	switch (action.type) {
		case 'SaveUserInfo':  
			Storage.set({
				user:action.state
			})
			return action.state;
			break;
		case 'ClearUserInfo':  
			Storage.set({
				user:userStore
			})
			return userStore
			break;			
		default:
			return state;
			break;
	}
}

const initialState = {  
    text: 'Hello',  
}  
const number = (state = initialState,action) => { 
    switch (action.type) {  
        case 'ChangeTextAction':  
            return {  
                text: state.text=='Hello' ? 'world':'Hello',  
			}
			break;  
        case 'ButtonClickAction':  
            return {  
                text: 'Hello world'  
			}
			break;  
        default:  
			return initialState;
			break;  
    }  
}

const Reducer = combineReducers({
	user,
	number,
})
export default Reducer;