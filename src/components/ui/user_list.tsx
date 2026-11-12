
interface User {
    id: number;
    first_name: string;
    last_name: string;
    balance: any;
    building: any;
    house: any;
    residence: any;
}

interface UserListProps {
	users: User[];
}

export default function UserList({ users }: UserListProps) {
	return (
		<ul className="user-list" aria-label="Users">
			{users.map((user) => (
				<li className="user-list__item" key={user.id}>
					<div className="user-list__details">
						<span className="user-list__name">{user.first_name} {user.last_name}</span>
						<span className="user-list__email">Balance: {user.balance}</span>
						<span className="user-list__email">Building: {user.building}</span>
						<span className="user-list__email">House: {user.house}</span>
						<span className="user-list__email">Residence: {user.residence}</span>
					</div>
				</li>
			))}
			{users.length === 0 && <li className="user-list__empty">No users found.</li>}
		</ul>
	);
}
