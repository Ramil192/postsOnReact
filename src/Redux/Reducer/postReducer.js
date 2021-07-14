import { CREATEP_POST, FETCH_POSTS } from '../Type/types'

const initialState = {
	posts: [],
	fetchPosts: []
}

export const postsReducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATEP_POST:
			return { ...state, posts: [...state.posts, action.payload] }
		case FETCH_POSTS:
			return { ...state, fetchPosts: action.payload }
		default: return state
	}
}