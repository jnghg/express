import axios from 'axios';

class InstarRepository {

    //
    callSayHello() {
        return axios.post(`/api`)
            .then(response => response && response.data || null);
    }
}

export default new InstarRepository();