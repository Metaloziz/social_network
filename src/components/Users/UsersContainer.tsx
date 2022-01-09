import React from "react";
import {connect} from "react-redux";
import {AppStatePT} from "../../redux/store_redux";
import {
    followThunkContainer,
    getUsersThunkContainer,
    sePageThunkContainer,
    unFollowThunkContainer
} from "../../redux/users_reducer";
import {Users} from "./Users";
import {Preloader} from "../comonComponents/Preloader";

export type mapDispatchToPropsPT = {
    // followAC: (userID: number) => void
    // setUsersAC: (users: UserPT[], totalCount: number) => void
    // changePageAC: (pageID: number) => void
    // toggleIsFetchingPageAC: (isFetching: boolean) => void
    // toggleIsFetchingUserAC: (isFetching: boolean, userID: number) => void
    getUsersThunkContainer: (currentPage: number, pageSize: number) => void
    sePageThunkContainer: (pageID: number, pageSize: number) => void
    unFollowThunkContainer: (userID: number) => void
    followThunkContainer: (userID: number) => void
}
export type UsersStatePT = {
    items: UserPT[]
    pageSize: number
    totalCount: number
    error: string
    currentPage: number
    isFetchingPage: boolean
}
export type UserPT = {
    id: number
    name: string
    status: string
    photos: {
        small: string
        large: string
    }
    followed: boolean
    isFetchingUser: boolean
}


export class UsersAPIcontainer extends React.Component<UsersStatePT & mapDispatchToPropsPT> {

    componentDidMount = () => {
        this.props.getUsersThunkContainer(this.props.currentPage, this.props.pageSize)
        // this.props.toggleIsFetchingPageAC(true)
        // setUserDataAPI(this.props.currentPage, this.props.pageSize)
        //     .then((state) => {
        //         console.log('setUserDataAPI')
        //         this.props.setUsersAC(state.items, state.totalCount)
        //     })
        // this.props.toggleIsFetchingPageAC(false)
    }

    setPage = (pageID: number) => {
        this.props.sePageThunkContainer(pageID, this.props.pageSize)
        //
        // this.props.toggleIsFetchingPageAC(true)
        //
        // this.props.changePageAC(pageID)
        // setUserOnPageAPI(pageID, this.props.pageSize)
        //     .then((state) => {
        //         this.props.setUsersAC(state.items, state.totalCount)
        //         this.props.toggleIsFetchingPageAC(false)
        //         console.log('setUserOnPageAPI')
        //     })
    }

    unFollow = (userID: number) => {
        this.props.unFollowThunkContainer(userID)
        // this.props.toggleIsFetchingUserAC(true, userID)
        // setUnFollowAPI(userID)
        //     .then(response => {
        //             if (response.resultCode === 0) {
        //                 this.props.followAC(userID)
        //                 this.props.toggleIsFetchingUserAC(false, userID)
        //                 console.log('unFollow')
        //             }
        //         }
        //     )
    }

    follow = (userID: number) => {
        this.props.followThunkContainer(userID)
        // this.props.toggleIsFetchingUserAC(true, userID)
        // setFollowAPI(userID)
        //     .then(response => {
        //             if (response.resultCode === 0) {
        //                 this.props.followAC(userID)
        //                 this.props.toggleIsFetchingUserAC(false, userID)
        //                 console.log('Follow')
        //             }
        //         }
        //     )
    }


    render() {
        return <div>
            {this.props.isFetchingPage
                ? <Preloader/>
                : <Users items={this.props.items}
                         setPage={this.setPage}
                         unFollow={this.unFollow}
                         follow={this.follow}
                         pageSize={this.props.pageSize}
                         totalCount={this.props.totalCount}
                         currentPage={this.props.currentPage}
                    // followAC={this.props.followAC}
                         error={this.props.error}
                    // isFetchingUser={this.props.isFetchingUser}
                         isFetchingPage={this.props.isFetchingPage}/>}
        </div>
    }
}

const mapStateToProps = (state: AppStatePT): UsersStatePT => state.users

let obj = {
    getUsersThunkContainer,
    sePageThunkContainer,
    unFollowThunkContainer,
    followThunkContainer,
}

export const UsersContainer = connect(mapStateToProps, obj)(UsersAPIcontainer)


// setUsersAC: (props)=> dispatch(setUsersAC(props))






