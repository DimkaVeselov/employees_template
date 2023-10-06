import EmployeesListItem from '../employees-list-item/employees-list-item';
import './style.css'


function EmployeesList({ data }) {
	const elem = data.map((item) => {
		const {id, ...itemProps} = item
		return <EmployeesListItem key={id} {...itemProps} />
	})

	return (
		<ul className='app-list list-group'>
			{elem}
		</ul>
	);
}

export default EmployeesList;