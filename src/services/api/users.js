import { post, get } from '../../helpers/api';

export const Users = {
    postLogin: (body) => post('/login', body),
    getUsers: () => get('/users?page=1'),
    getUser: (id) => get(`/users/${id}`),
};

export default Users;
