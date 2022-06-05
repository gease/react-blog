import React from "react";
import {connect} from "react-redux";
import {fetchPostsAndUsers} from "../actions";
import UserName from "./UserName";

class PostsList extends React.Component {

    componentDidMount() {
        this.props.fetchPostsAndUsers();
    }

    renderedList() {return this.props.posts.map((post) => {
        return (
            <div className="item" key={post.id}>
                <i className="large middle aligned icon user" />
                <div className="content">
                    <div className="description">
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                    <UserName userId={post.userId} />
                </div>
            </div>
        )
    })};

    render () {
        console.log(this.props.posts);
        return <div className="ui divided list relaxed">{this.renderedList()}</div>
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts,
        users: state.users
    }
}

export default connect(mapStateToProps, {fetchPostsAndUsers})(PostsList);
