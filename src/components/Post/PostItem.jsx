import React from 'react'

const PostItem = ({ post, number, remove }) => {
	return (
		<div className='card mt-3'>
			<div className='card-body'>
				<b>
					{number}. {post.title}
				</b>
				<div>{post.body}</div>
			</div>
			<div className='card-footer'>
				<button
					className='btn btn-outline-danger'
					onClick={() => remove(post)}
				>
					Удалить
				</button>
			</div>
		</div>
	)
}

export default PostItem
