import React from 'react';
import { observer, inject } from 'mobx-react';
import { autobind } from 'core-decorators';

@inject('instarStore')
@observer
@autobind
class InstarMainContaner extends React.Component {

    // api 호출
    callSayHello() {
        this.props.instarStore.callSayHello();
    }

    render() {

        const { user } = this.props.instarStore;

        return (
            <div>
                <button onClick = {this.callSayHello}> 클릭하자 </button>
                <br />
                <label> 이름 : </label>
                    {user.name}
                <br />
                <label> 나이 : </label>
                {user.age}
            </div>
        )
    }
}

export default InstarMainContaner;