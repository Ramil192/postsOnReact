import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Loading } from './Loading'
import Post from './Post'
import { fetchPosts } from '../Redux/Action/actions'

export default () => {

	const dispatch = useDispatch()

	const posts = useSelector((state) => state.posts.fetchPosts);
	const loading = useSelector((state) => state.app.loading);

	if (loading) {
		return <Loading />
	}

	if (!posts.length) {
		return <button
			className='btn btn-primary'
			onClick={() => dispatch(fetchPosts())}
		>Dowonload Posts</button>
	}
	
	return (posts.map(post => <Post post={post} key={post.id} />))
}