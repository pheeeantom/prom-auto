import React, { useState } from 'react';
import './style.css';
import { memo } from 'react';
import { IUser } from '../../types/iuser';
import UserCard from '../user-card';

function UsersGrid({ list, activeId, setActive }: { list: IUser[], activeId: number,
    setActive: (id: number) => void }) {
    
    console.log('UsersGrid');

    return (
        <div className='UsersGrid'>
            {list.map((user: IUser) => <UserCard user={user} active={user.id === activeId} setActive={() => setActive(user.id)}/>)}
        </div>
    )

}

export default memo(UsersGrid);