import React, { ReactElement, ReactNode } from 'react';
import './style.css';
import { memo } from 'react';

function Content({children}: {children: Array<ReactNode>}) {

    console.log('Content');

    return (
        <div className='Content'>
            {children}
        </div>
    )
}

export default memo(Content);