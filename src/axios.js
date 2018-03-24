import axios from 'axios';


const instance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
});
// overrrides
instance.defaults.headers.common['autorization'] = 'AUTH TOKEN FROM INSTANCE';

export default instance;