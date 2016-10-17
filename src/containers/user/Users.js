import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import UsersList from '../../components/user/UsersList';
import userActions from '../../actions/user/user'

import './user.css';

class Users extends Component {

    componentDidMount() {
        this.props.fetchUsersAction();
    }

    render() {
        const {users} = this.props;

        return (
            <div id="row">
                <UsersList
                    users= {users}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users || []
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsersAction: bindActionCreators(userActions.fetch, dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users);