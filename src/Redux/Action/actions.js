import { CREATEP_POST, FETCH_POSTS, HIDE_ALERT, HIDE_LOADER, SHOW_ALERT, SHOW_LOADER,REQUEST__POSTS } from '../Type/types'

export function createPost(post) {
	return {
		type: CREATEP_POST,
		payload: post
	}
}

export function showLoader() {
	return {
		type: SHOW_LOADER
	}
}

export function hideLoader() {
	return {
		type: HIDE_LOADER
	}
}

export function showAlert(text) {
	return dispatch => {
		dispatch({
			type: SHOW_ALERT,
			payload: text
		})

		setTimeout(() => {
			dispatch(hideAlet())
		}, 2000)
	}
}

export function hideAlet() {
	return {
		type: HIDE_ALERT
	}
}

export function fetchPosts() {

	return{
		type:REQUEST__POSTS
	}

	// return async dispatch => {
	// 	try {
	// 		dispatch(showLoader())
	// 		const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
	// 		const json = await response.json();
	// 		setTimeout(() => {
	// 			dispatch({ type: FETCH_POSTS, payload: json })
	// 			dispatch(hideLoader())
	// 		}, 500)
	// 	} catch (error) {
	// 		dispatch(showAlert('Ошибка при обращении к серверу '))
	// 		dispatch(hideLoader())
	// 	}
	// }
}