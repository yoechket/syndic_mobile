'use client';
import { useEffect, useState } from 'react';

import UserList from '../ui/user_list';

export default function Users() {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        async function loadUsers() {
            const res = await fetch('http://127.0.0.1:8000/users', { cache: 'no-store' });
            if (!res.ok) throw new Error('Failed to fetch data');
            const data = await res.json();
            setUsers(data);
        }
        loadUsers();
    }, []);

    if (!users || users.length === 0) return <p>No users available</p>;

    return (
        <UserList users={users} />
    )
}