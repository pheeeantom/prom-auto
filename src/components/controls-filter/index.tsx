import React from 'react';
import './style.css';
import { memo } from 'react';
import { IUser } from '../../types/iuser';

function ControlsFilter({list, listFiltered, clear}: {list: IUser[], listFiltered: number[], clear: () => void}) {

    console.log('ControlsFilter');

    return (
        <div className='ControlsFilter'>
            <div className='ControlsFilter-row'>
                <span className='ControlsFilter_muted'>Filter: {listFiltered.length}</span>
                <span className='ControlsFilter-clear ControlsFilter_white' onClick={clear}>Clear all</span>
            </div>
            <div className='ControlsFilter-row'>
                <span className='ControlsFilter_white'>Name: </span>
                <span className='ControlsFilter_muted'>{listFiltered.map(id => list.find(user => user.id === id).name.split(' ')[0]).join(', ')}</span>
            </div>
        </div>
    )
}

export default memo(ControlsFilter);