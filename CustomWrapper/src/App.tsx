import { useState } from 'react';
import { useUsers,useAddUser } from './API/requestHandler';
import { User } from './Modal/ModalType';

const App: React.FC = () => {
    const { data=[], error, isLoading } = useUsers();
    const { mutate: addUser, isLoading: isAdding } = useAddUser();

    const [newUser, setNewUser] = useState<User>({
        id: 100,
        name: '',
        email: ''
    });

    const handleAddUser = () => {
        addUser(newUser, {
            onSuccess: () => {
                console.log('User added successfully');
            },
        });
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error fetching users</div>;

    return (
        <div>
            <ul>
                {data?.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
            <input
                type="text"
                value={newUser.name}
                onChange={e => setNewUser({ ...newUser, name: e.target.value })}
                placeholder="Name"
            />
            <input
                type="email"
                value={newUser.email}
                onChange={e => setNewUser({ ...newUser, email: e.target.value })}
                placeholder="Email"
            />
            <button onClick={handleAddUser} disabled={isAdding}>
                Add User
            </button>
        </div>
    );
};

export default App;
