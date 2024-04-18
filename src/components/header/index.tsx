import React from 'react';
import './style.css';
import { memo } from 'react';

function Header({ text }: { text: string; }) {

    console.log('Header');

    return (
        <div className='Header'>
            <a href='#'>{text}</a>
        </div>
    )
}

export default memo(Header);