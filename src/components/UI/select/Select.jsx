import React from 'react'

const Select = ({ option, defaultValue, value, onChange }) => {
	return (
		<select
			className='form-select ms-auto'
			onChange={(e) => onChange(e.target.value)}
			value={value}
		>
			<option value='' disabled>
				{defaultValue}
			</option>
			{option.map((opt) => (
				<option value={opt.value} key={opt.value}>
					{opt.name}
				</option>
			))}
		</select>
	)
}

export default Select
