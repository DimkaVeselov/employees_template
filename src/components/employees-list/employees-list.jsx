import EmployeesListItem from '../employees-list-item/employees-list-item';
import './style.css'


function EmployeesList({ data, onDelete, onToggleProp }) {
	const elem = data.map((item) => {
		const { id, ...itemProps } = item
		return <EmployeesListItem
			key={id}
			{...itemProps}
			onDelete={() => onDelete(id)}
			onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
		/>
	})

	return (
		<ul className='app-list list-group'>
			{elem}
		</ul>
	);
}

export default EmployeesList;