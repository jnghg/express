import React, { Fragment } from 'react';
import { observer, inject } from 'mobx-react';
import { autobind } from 'core-decorators';

import LoginView from '../views/LoginView';

@inject('instarStore')
@observer
@autobind
class InstarMainContaner extends React.Component {

    /** Login Input onChange */
    onChangeLogin(e, data) {
        this.props.instarStore.onChangeLogin(data);
    }

    /** Send Login */
    sendLogin() {
        const { getUser } = this.props.instarStore;

        console.log('getUser :', getUser);

        this.props.instarStore.sendLogin(getUser);
    }

    render() {

        const { getUser } = this.props.instarStore;

        return (
            <Fragment>
                <LoginView 
                    getUser = {getUser}
                    sendLogin = {this.sendLogin}
                    onChangeLogin = {this.onChangeLogin}
                />
            </Fragment>
        )
    }
}

export default InstarMainContaner;