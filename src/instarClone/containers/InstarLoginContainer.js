import React, { Fragment } from 'react';
import { observer, inject } from 'mobx-react';
import { autobind } from 'core-decorators';

import LoginView from '../views/LoginView';

@inject('instarLoginStore')
@observer
@autobind
class InstarMainContaner extends React.Component {

    /** Login Input onChange */
    onChangeLogin(e, data) {
        this.props.instarLoginStore.onChangeLogin(data);
    }

    /** Send Login */
    sendLogin() {
        const { getUser } = this.props.instarLoginStore;

        console.log('getUser :', getUser);

        this.props.instarLoginStore.sendLogin(getUser);
    }

    render() {

        const { getUser } = this.props.instarLoginStore;

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