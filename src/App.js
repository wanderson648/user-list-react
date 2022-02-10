import { useState } from 'react';
import { User } from './components/User';
import { UsersList } from './components/UsersList';

import './index.css';

export function App() {
  const [userList, setUserList] = useState([]);


  const addUserHandler = (userName, userAge)=> {
    
    setUserList(prevUserList => {
      return [
        ...prevUserList, 
        { name: userName, age: userAge, id: Math.random().toString() }
      ]
    })
  }

  return (
    <>
      <User onAddUser={addUserHandler} />
      <UsersList users={userList} />
    </>
  );
}


