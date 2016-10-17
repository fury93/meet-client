import React, { Component } from 'react';
import userActions from '../../actions/user/user';

class UsersList extends Component {

    render() {
        console.log('render userList');
        const {users} = this.props;

        return (
            <div className="container-fluid">

                {users.length === 0 &&
                <div className="alert alert-warning">Oops, nothing to show.</div>
                }

                {users.length > 0 &&
                <div>
                    {users.map((item, index) => {
                        return (
                            <li key={index}>{item.email}</li>
                            )
                    })}
                </div>
                }
            </div>
        );
    }
}

UsersList.propTypes = {
    users: React.PropTypes.array.isRequired
};

export default UsersList;
