import {actionPT} from "./store_redux";
// import {usersPT, usersStatePT} from "../components/Users/Users";
// import axios from "axios";
import {UserPT, UsersPT} from "../components/Users/Users";


export type followATPT = ReturnType<typeof followAC>
export type setUsersATPT = ReturnType<typeof setUsersAC>

export const FOLLOW = 'FOLLOW'
export const SET_USERS = 'SET_USERS'

export const followAC = (userId: number) => ({type: FOLLOW, userId: userId} as const)
export const setUsersAC = (users: UserPT[]) => ({type: SET_USERS, usersFromAPI: users} as const)


// const initialUsersState: usersStatePT = {
//     users: [
//         {
//             id: 1,
//             photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScFYVbjlgLDY0iVoBVcAqWrMZmCs2iflo3rbglT_h6S1lklhJIAuwaSEXAbvnwbFjcibM&usqp=CAU',
//             followed: false,
//             fullName: 'Andrew',
//             status: 'I am a Hero',
//             location: {city: 'Minsk', country: 'BY'}
//         },
//         {
//             id: 2,
//             photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScFYVbjlgLDY0iVoBVcAqWrMZmCs2iflo3rbglT_h6S1lklhJIAuwaSEXAbvnwbFjcibM&usqp=CAU',
//             followed: true,
//             fullName: 'Nero',
//             status: 'I am a Bad',
//             location: {city: 'Kiev', country: 'UK'}
//         },
//         {
//             id: 3,
//             photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScFYVbjlgLDY0iVoBVcAqWrMZmCs2iflo3rbglT_h6S1lklhJIAuwaSEXAbvnwbFjcibM&usqp=CAU',
//             followed: true,
//             fullName: 'Dante',
//             status: 'I am a Demon',
//             location: {city: 'Paris', country: 'FR'}
//         }
//     ]
// }



let newInitialState: UsersPT = {
    users: [],
    totalCount: 10,
    error: 'Error'
}

export const users_reducer = (state: UsersPT = newInitialState, action: actionPT): UsersPT => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => user.id === action.userId ? {...user, followed: !user.followed} : user)
            }
        case SET_USERS:
            return {
                ...state,
                users: action.usersFromAPI
            }
        default:
            return state
    }
}