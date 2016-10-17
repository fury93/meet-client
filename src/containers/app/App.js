import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { logout } from '../../actions/auth';

import './app.css';

class App extends Component {

    render() {
        return (
            <div className="container-fluid">
                <Header/>

                <div className="appContent">
                    {this.props.children}
                </div>
                <Footer/>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.node.isRequired,
    dispatch: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired
};

App.contextTypes = {
    router: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    //todo
    const { app } = state;

    return {
        app
    };
};

export default connect(
    mapStateToProps
)(App);
