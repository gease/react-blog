import {combineReducers} from "redux";
import fetchPosts from "./fetchPosts";
import fetchUser from "./fetchUser";

export default combineReducers({
        posts: fetchPosts,
        users: fetchUser
    }
);
