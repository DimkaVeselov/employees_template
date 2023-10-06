import './style.css'

function AppFilter(props) {
	const btnsData = [
		{ name: 'all', label: 'Все сотрудники' },
		{ name: 'rise', label: 'На повышение' },
		{ name: 'more', label: '	З/П больше 60000₽' }
	]

	const btns = btnsData.map(({ name, label }) => {
		const active = props.filter === name;

		const classActive = active ? 'btn-light' : 'btn-outline-light'

		return (
			<button
				type='button'
				className={`btn ${classActive}`}
				key={name}
				onClick={() => props.onFilterSelect(name)}
			>
				{label}
			</button>
		)
	})

	return (
		<div className='btn-group'>
			{btns}
		</div>
	);
}

export default AppFilter;