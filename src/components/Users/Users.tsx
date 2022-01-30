import React from 'react';
import {UsersType} from "../../types/Types";
import ava from '../../assets/ava.jpg'
import users from './User.module.css'
import {NavLink} from "react-router-dom";

type UsersTypes = {
    users: Array<UsersType>,
    fallowFn: (id: number) => void
    unfallowFn: (id: number) => void
}


const Users = (props: UsersTypes) => {
    return (
        <div className={users.cart}>
            {
                props.users.map((user) => {
                    return (
                        <div className={users.s}>
                            <div>
                                <NavLink to={`/profile/${user.id}`}>
                                    <img src={user.photos.small === null ? ava : user.photos.small} alt=""/>
                                </NavLink>
                                <h3>{user.name}</h3>
                                <h4>{user.status}</h4>
                            </div>

                            <button
                                onClick={user.followed === true ? () => props.unfallowFn(user.id) : () => props.fallowFn(user.id)}>
                                {user.followed === true ? 'Отписаться' : 'Подписаться'}
                            </button>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default Users;