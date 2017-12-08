export function SaveUserInfo(state) {
	return {
		type: "SaveUserInfo",
		state
	}
}

// export const CHANGE_TEXT = 'CHANGE_TEXT';
// export const BUTTON_CLICK = 'BUTTON_CLICK';

export const changeTextAction = () => {
	return {
		type: "ChangeTextAction",
		// data:data,
	}
}

export const buttonClickAction = () => {
	return {
		type: "ButtonClickAction",
		// id:id,
	}
}
// export function addTodo() {
//   return {
//     type: ADD_TODO,
//   };
// }
// export const buttonClickAction = {
// 	type: 'BUTTON_CLICK'
// }


// export const ADD_TODO = 'ADD_TODO';
// export const COMPLETE_TODO = 'COMPLETE_TODO';
// export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

// export function addTodo() {
//   return {
//     type: ADD_TODO,
//   };
// }

// export function completeTodo(index) {
//   return {
//     type: COMPLETE_TODO,
//     index
//   };
// }

// export function setVisibilityFilter(filter) {
//   return {
//     type: SET_VISIBILITY_FILTER,
//     filter
//   };
// }