import React from "react";
import {ContentHeader} from "./Content/Content_header/ContentHeader";
import {PostsContainer} from "./Content/Posts/PostsContainer";
import {ProfileType} from "../../redux/profile_reducer";

export type ContentHeaderPT = {
    profile: ProfileType
}


export const Profile = (props: ContentHeaderPT) => {

    return (
        <div>
            <ContentHeader profile={props.profile}/>
            <PostsContainer/>
        </div>
    )
}