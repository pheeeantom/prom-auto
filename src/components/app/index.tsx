import React from 'react';
import './style.css';
import { memo } from 'react';
import { userAPI } from '../../services/user-service';
import { IUser } from '../../types/iuser';
import SelectFilter from '../select-filter';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addUserToList, clearActiveId, clearAll, removeUserFromList, setActiveId } from '../../store/reducers/user-slice';
import ControlsFilter from '../controls-filter';
import Header from '../header';
import Content from '../content';
import UsersGrid from '../users-grid';

function App() {

  console.log('App');

  const { data: users, error: errorUsers, isLoading: isLoadingUsers } =  userAPI.useFetchAllUsersQuery()

  const dispatch = useAppDispatch();

  const remove = (id: number) => {dispatch(removeUserFromList(id));if(id===activeId)dispatch(clearActiveId());}
  const add = (id: number) => dispatch(addUserToList(id));

  const clear = () => {dispatch(clearAll());dispatch(clearActiveId());}

  const listFiltered = useAppSelector(state => state.userReducer.list);
  const activeId = useAppSelector(state => state.userReducer.activeId);

  const setActive = (id: number) => {if(id!==activeId){dispatch(setActiveId(id));}else{dispatch(clearActiveId());}}

  return (
    <div className='App'>
      <Header text={'User list'}/>
      {isLoadingUsers ? <div>Loading...</div> : errorUsers ? <div>Error!</div> :
        <Content>
          <SelectFilter list={users} listFiltered={listFiltered} remove={remove} add={add}/>
          <ControlsFilter list={users} listFiltered={listFiltered} clear={clear}/>
          <UsersGrid list={listFiltered.map((id: number) => users.find((user: IUser) => user.id === id))}
            activeId={activeId} setActive={setActive}/>
        </Content>}
    </div>
  );
}

export default memo(App);