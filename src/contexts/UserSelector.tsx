import { useState } from 'react';

interface UserSelectorProps {
  users: string[];
  onSelectUser: (user: string) => void;
}

export default function UserSelector({ users, onSelectUser }: UserSelectorProps) {
  const [selectedUser, setSelectedUser] = useState<string>('');

  const handleUserSelect = () => {
    onSelectUser(selectedUser);
  };

  return (
    <div>
      <select value={selectedUser} onChange={e => setSelectedUser(e.target.value)}>
        <option value="">Select User</option>
        {users.map(user => (
          <option key={user} value={user}>
            {user}
          </option>
        ))}
      </select>
      <button onClick={handleUserSelect}>View Collection</button>
    </div>
  );
}

