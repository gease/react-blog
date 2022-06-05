import React from "react";
import {connect} from "react-redux";

class UserName extends React.Component {

    // componentDidMount() {
    //     this.props.fetchUser(this.props.userId);
    // }

    render () {
        //const user = this.props.users.find(user => user.id === this.props.userId)
        if (!this.props.user) return null;
        return <div className="ui header">{this.props.user.name}</div>
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.users.find(user => user.id === ownProps.userId)
    };
}

export default connect(mapStateToProps)(UserName);
