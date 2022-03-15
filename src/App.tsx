import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Block, CardVariant } from './components/Block';
import { UserList } from './components/UserList';
import { UserInterface } from './types/types';

export const App = () => {

  const [users, setUsers] = useState<UserInterface[]>([]);

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      const response = await axios.get<UserInterface[]>('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (e) {
      alert(e)
    }
    
  }

  return (
    <>
      <Block
        height="200px"
        width="200px"
        variant={CardVariant.primary}
        onFunc={(value) => console.log('click', value)}
        >
        <button>Click</button>
      </Block>
      <UserList users={users}/>
    </>
  );
}