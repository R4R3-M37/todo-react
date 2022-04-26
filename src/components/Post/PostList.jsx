import React from 'react'
import PostItem from './PostItem'

const PostList = ({ title, posts, remove }) => {
	if (!posts.length) {
		return <h2 className='text-center'>Нет задач</h2>
	}

	return (
		<div>
			<h1 className='text-center my-3'>{title}</h1>
			{posts.map((post, index) => (
				<PostItem
					number={index + 1}
					post={post}
					remove={remove}
					key={post.id}
				/>
			))}
		</div>
	)
}

export default PostList
