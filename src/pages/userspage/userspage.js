import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserList from '../../components/partials/UserList';

import { getData } from './action';

function UsersPage() {
    const dispatch = useDispatch();
    const state = useSelector((reducer) => reducer.userdata);

    useEffect(() => {
        dispatch(getData());
    }, []); //eslint-disable-line

    return (
        <div>
            <UserList usersData={state.items.data || {}} />
            <div className="mt-10 py-4">
                <p className="text-center">© 2021. All rights reserved.</p>
            </div>
        </div>
    );
}

export default UsersPage;
