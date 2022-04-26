import React from 'react'
import Select from '../UI/select/Select'

const PostFilter = ({ filter, setFilter }) => {
	return (
		<div>
			<input
				type='text'
				className='form-control my-3'
				placeholder='Поиск...'
				value={filter.query}
				onChange={(e) =>
					setFilter({ ...filter, query: e.target.value })
				}
			/>
			<Select
				defaultValue={'Сортировка по: '}
				value={filter.sort}
				onChange={(sort) => setFilter({ ...filter, sort: sort })}
				option={[
					{ name: 'Сортировка по названию', value: 'title' },
					{ name: 'Сортировка по описанию', value: 'body' },
				]}
			/>
		</div>
	)
}

export default PostFilter
