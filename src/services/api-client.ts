import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '92e7a2916ef84f5ab2a7bfbca4e17476'
    }
});