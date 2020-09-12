import { observable, action, toJS, computed, runInAction, instance } from 'mobx';
import { autobind } from 'core-decorators';
import InstarRepository from '../repository/InstarRepository';

@autobind
class InstarStore {

    @observable
    user = {
        myName: '',
        myAge: '',
        jimonName: '',
        jimonAge: '',
    };

    // 내정보
    @action
    async findMySelf() {

        const result = await InstarRepository.findMySelf();

        console.log('내정보 :', result);

        runInAction(() => {
            this.user = {
                ...this.user,
                name: result.name || '',
                age: result.age || '',
            };
        });
    }

    // 지몬이정보
    @action
    async findJimonInfo() {
        const result = await InstarRepository.findJimonInfo();

        console.log('지몬이 정보: ', result);

        runInAction(() => {
            this.user = {
                ...this.user,
                jimonName: result.name || '',
                jimonAge: result.age || '',
            };
        });
    }

    // 초기화
    @action
    clear() {
        this.user = {
            myName: '',
            myAge: '',
            jimonName: '',
            jimonAge: '',
        };
    }

}

export default new InstarStore();