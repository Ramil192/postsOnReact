import React from 'react'

export default ({ post }) => {
	return (<div>
		<div className="card mt-1">
			<div className="card-body">
				<div className="card-title">{post.title}</div>
			</div>
		</div>
	</div>)
}