import { observable, action, toJS, computed, runInAction } from 'mobx';
import { autobind } from 'core-decorators';
import InstarRepository from '../repository/InstarRepository';

@autobind
class InstarLoginStore {

    @observable
    user = {
        email: '',
        password: '',
    };

    @computed
    get getUser() {
        return toJS(this.user);
    }

    /** Login Input onChange */
    onChangeLogin(data) {
        this.user = {
            ...this.user,
            [data.name]: data.value,
        };
    }

    /** Send Login */
    @action
    async sendLogin(user) {
        const returnLogin = await InstarRepository.sendLogin(user);
        
        runInAction(() => {
            if (returnLogin !== null && returnLogin.length > 0) {
                console.log('return :', returnLogin);
                
            } else {
                alert('계정정보가 없습니다!');
            }
        });
    }

    /** User Info reset */
    @action
    clear() {
        this.user = {
            email: '',
            password: '',
        };
    }

}

export default new InstarLoginStore();