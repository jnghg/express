import { observable, action, toJS, computed, runInAction, instance } from 'mobx';
import { autobind } from 'core-decorators';
import InstarRepository from '../repository/InstarRepository';

@autobind
class InstarStore {

    @observable
    user = {
        name: '',
        age: '',
    };

    // api 호출
    @action
    async callSayHello() {

        const result = await InstarRepository.callSayHello();

        console.log('return :', result);

        runInAction(() => {
            this.user = {
                ...this.user,
                name: result.name || '',
                age: result.age || '',
            };
        });
    }

}

export default new InstarStore();