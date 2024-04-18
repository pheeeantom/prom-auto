import React, { useCallback, useEffect, useRef, useState } from 'react';
import './style.css';
import { memo } from 'react';
import { IUser } from '../../types/iuser';
import debounce from 'lodash.debounce';

function SelectFilter({list, listFiltered, remove, add}: {list: IUser[], listFiltered: number[], remove: (id: number) => void, add: (id: number) => void}) {

  console.log('SelectFilter');

  const [searchText, setSearchText] = useState('')
  const [filterText, setFilterText] = useState('')
  
  const [listVisible, setListVisible] = useState(false)
  //const [overFilter, setOverFilter] = useState(false)
  //const [overList, setOverList] = useState(false)
  const [overInput, setOverInput] = useState(false)

  const [focusInput, setFocusInput] = useState(false)
  
  const filterRef = useRef(null)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
    onChangeDebounce(event.target.value);
  };

  const onChangeDebounce = useCallback(
    debounce(value => setFilterText(value), 600), []
  );

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest('.SelectFilter')) setListVisible(false);
    }

    const clickHandler = (e: MouseEvent) => handleClick(e);

    window.addEventListener('click', clickHandler);

    return () => {
      window.removeEventListener('click', clickHandler);
    };
  }, []);

  return (
    <div ref={filterRef} className='SelectFilter'>
        <input type="text" className='SelectFilter-input' value={searchText} onChange={onChange} onFocus={() => {
            setListVisible(true);setFocusInput(true);
          }} onBlur={() => setFocusInput(false)}
          placeholder={focusInput ? '' : overInput ? 'Enter a name' : 'Select name'}
          onTouchEnd={() => setOverInput(false)} onTouchStart={() => {setListVisible(true);setOverInput(true)}}
          onMouseOut={() => setOverInput(false)} onMouseOver={() => setOverInput(true)}/>
        <div className='SelectFilter-wrapper'>
          <div className='SelectFilter-list' style={{display: listVisible ? 'block' : 'none'}}>
              {list.filter(item => item.name.includes(filterText)).
                  map((item: IUser) => <div key={item.id} onClick={(e) => {
                    listFiltered.includes(item.id) ? remove(item.id) : add(item.id);
                  }}><img alt='checkbox' src={listFiltered.includes(item.id) ? '/checked.svg' : '/unchecked.svg'}/>{item.name}</div>)}
          </div>
        </div>
    </div>
  );
}

export default memo(SelectFilter);