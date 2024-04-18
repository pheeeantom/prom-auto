import React, { useState } from 'react';
import './style.css';
import { memo } from 'react';
import { IUser } from '../../types/iuser';

function UserCard({ user, active, setActive }: { user: IUser, active: boolean, setActive: () => void }) {
    
    console.log('UserCard');

    return (
        <div className={'UserCard' + (active ? ' UserCard_active' : '')} onClick={setActive}>
            <div className='UserCard-row'>
                <div className='UserCard-avatar'>{user.name.split(' ').map(name1 => name1.charAt(0).toUpperCase()).join('')}</div>
                <div className='UserCard-details'>
                    <span className='UserCard-name'>{user.name}</span>
                    <span className='UserCard-username'>{user.username}</span>
                </div>
            </div>
            <div className='UserCard-field'><img alt="email" src="/email.svg"/>email: {user.email}</div>
            <div className='UserCard-field'><img alt="website" src="/web.svg"/>website: {user.website}</div>
            <div className='UserCard-field'><img alt="phone" src="/phone.svg"/>phone: {user.phone}</div>
            {active ?
                <>
                    <div className='UserCard-field'><img alt="phone" src="/street.svg"/>street: {user.address.street}</div> 
                    <div className='UserCard-field'><img alt="phone" src="/suite.svg"/>suite: {user.address.suite}</div>
                    <div className='UserCard-field'><img alt="phone" src="/city.svg"/>city: {user.address.city}</div> 
                    <div className='UserCard-field'><img alt="phone" src="/zipcode.svg"/>zipcode: {user.address.zipcode}</div>
                    <div className='UserCard-field'><img alt="phone" src="/name-company.svg"/>name company: {user.company.name}</div> 
                    <div className='UserCard-field'><img alt="phone" src="/catchPhrase.svg"/>catchPhrase: {user.company.catchPhrase}</div>
                    <div className='UserCard-field'><img alt="phone" src="/bs.svg"/>bs: {user.company.bs}</div>
                </> : null
            }
        </div>
    )

}

export default memo(UserCard);