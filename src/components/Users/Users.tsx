import React, { memo } from 'react';
import style from './Users.module.css';
import image from '../Users/imgAva/user.png';
import { UsersStatePT } from './UsersContainer';
import { NavLink } from 'react-router-dom';

type UsersFuncPT = {
  setPage: (pageID: number) => void
  // followAC: (userID: number) => void
  unFollow: (userID: number) => void
  follow: (userID: number) => void
}

export const Users = memo((props: UsersStatePT & UsersFuncPT) => {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let pagesCount = Math.ceil(props.totalCount / props.pageSize);

  let pages: number[] = [];

  for (let i = 1; i <= 10; i++) {  // 10 hardcore
    pages.push(i);
  }

  const localCB = (id: number, followed: boolean) => {
    followed ? props.unFollow(id) : props.follow(id);
  };

  return <div>
    <div className={style.buttons_pages}>
      {pages.map(pageID => <span key={pageID}
                                 onClick={() => props.setPage(pageID)}
                                 className={props.currentPage === pageID ? style.current : ''}>{pageID}</span>)}

    </div>
    {props.items.map((user) => <div id={String(user.id)} key={user.id}
                                    className={style.main_div}>
        <div>
          <NavLink to={'/profile/' + user.id}>
            <img alt={'ava'} src={user.photos.small || image} />
          </NavLink>
        </div>
        <div>{user.name}</div>
        <div>{user.status}</div>
        {/*<div>{user.location.country}</div>*/}
        {/*<div>{user.location.city}</div>*/}

        {user.followed ? 'followed' : 'unFollowed'}

        <button disabled={user.isFetchingUser}
                onClick={() => localCB(user.id, user.followed)}>
          {user.followed ? 'unFollowed' : 'followed'}
        </button>
      </div>,
    )}
  </div>;

});







