import React, { Fragment } from 'react';
import { observer, inject } from 'mobx-react';
import { autobind } from 'core-decorators';
import MainView from '../views/MainView';

@inject('instarStore')
@observer
@autobind
class InstarMainContaner extends React.Component {

    componentDidMount() {
        alert('로그인 성공!');
    }
    
    render() {
        return (
            <Fragment>
                <MainView />
            </Fragment>
        )
    }
}

export default InstarMainContaner;