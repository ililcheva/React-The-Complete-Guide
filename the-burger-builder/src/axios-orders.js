import axios from 'axios';

const instance = axios.create({
    baseURL: `https://the-burger-builder-e6dc0-default-rtdb.firebaseio.com/`
});

export default instance;