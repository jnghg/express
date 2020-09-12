import axios from 'axios';

class InstarRepository {

    // 내정보
    findMySelf() {
        return axios.post(`/api`)
            .then(response => response && response.data || null);
    }

    // 지몬이정보
    findJimonInfo() {
        return axios.post(`/api/true`)
            .then(response => response && response.data || null);
    }
}

export default new InstarRepository();