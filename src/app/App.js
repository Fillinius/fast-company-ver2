import React, { useState } from 'react';
import Users from "./components/users";

import api from "./api"

function App() {
    const [users, setUsers] = useState(api.users.fetchAll());
    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId));
    };

    return (
        <div>

            <Users onDelete={handleDelete} 
             users={users} 
             />
        </div>
    );
}

export default App;
