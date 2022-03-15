import React, { FC } from 'react';
import { UserInterface } from '../types/types';
import { UserItem } from './UserItem';

interface UserListProps {
  users: Array<UserInterface>
}

export const UserList: FC<UserListProps> = ({users}) => {
  return (
    <>
      {users.map(user => (
        <UserItem key={user.id} user={user}/>
      ))}
    </>
  )
}