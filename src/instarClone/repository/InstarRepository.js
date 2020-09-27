import axios from 'axios';

class InstarRepository {

    /** Send Login */
    sendLogin(user) {
        return axios.post(`/api/login`, user)
        .then(res => res ? res.data : null);
    }
}

export default new InstarRepository();