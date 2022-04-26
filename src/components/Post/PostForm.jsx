import React from 'react'

const PostForm = ({ post, setPost }) => {
	return (
		<form className='container-lg my-3'>
			<div className='mb-3'>
				<label className='form-label'>Название задачи</label>
				<input
					type='text'
					className='form-control'
					value={post.title}
					onChange={(e) =>
						setPost({ ...post, title: e.target.value })
					}
				/>
			</div>
			<div className='mb-3'>
				<label className='form-label'>Описание задачи</label>
				<input
					type='text'
					className='form-control'
					value={post.body}
					onChange={(e) => setPost({ ...post, body: e.target.value })}
				/>
			</div>
			{/*<button className='btn btn-primary' onClick={handleSubmit}>*/}
			{/*	Добавить задачу */}
			{/*</button>*/}
		</form>
	)
}

export default PostForm
