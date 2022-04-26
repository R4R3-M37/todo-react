import React from 'react'

const Modal = ({
	children,
	createPost,
	post,
	setPost,
	visibleModal,
	setVisibleModal,
}) => {
	if (!visibleModal) {
		return null
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (post.title && post.body) {
			createPost({ ...post, id: Date.now() })
			setPost({ title: '', body: '' })
			setVisibleModal(false)
		}
	}

	return (
		<div
			className='modal fade show'
			onClick={() => setVisibleModal(false)}
			style={{ display: 'block', background: 'rgba(0,0,0,0.5)' }}
		>
			<div className='modal-dialog' onClick={(e) => e.stopPropagation()}>
				<div className='modal-content'>
					<div className='modal-header'>
						<h5 className='modal-title' id='exampleModalLabel'>
							Новая задача
						</h5>
						<button
							type='button'
							className='btn-close'
							onClick={() => setVisibleModal(false)}
						/>
					</div>
					<div className='modal-body'>{children}</div>
					<div className='modal-footer'>
						<button
							type='button'
							className='btn btn-secondary'
							onClick={() => setVisibleModal(false)}
						>
							Закрыть
						</button>
						<button
							type='button'
							className='btn btn-primary'
							onClick={handleSubmit}
						>
							Добавить задачу
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Modal
