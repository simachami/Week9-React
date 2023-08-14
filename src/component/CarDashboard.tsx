import { useState } from 'react';
import CarList from './CarList';
import UserSelector from '../contexts/UserSelector';

const users = ['Michael', 'Jerry', 'Kelly'];

function CarDashboard() {
  const [selectedUser, setSelectedUser] = useState<string>('');

  const handleUserSelect = (user: string) => {
    setSelectedUser(user);
  };

  return (
    <div>
      <h2>Car Dashboard</h2>
      <UserSelector users={users} onSelectUser={handleUserSelect} />
      {selectedUser && <CarList user={selectedUser} />}
    </div>
  );
}

export default CarDashboard;
