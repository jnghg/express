import React, { Fragment } from 'react';
import { observer, inject } from 'mobx-react';
import { autobind } from 'core-decorators';

import LoginView from '../views/LoginView';

@inject('instarStore')
@observer
@autobind
class InstarMainContaner extends React.Component {

    render() {

        const { user } = this.props.instarStore;

        return (
            <Fragment>
                <LoginView />
            </Fragment>
        )
    }
}

export default InstarMainContaner;