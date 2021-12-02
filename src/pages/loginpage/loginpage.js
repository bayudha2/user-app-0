import React from 'react';
import { useSelector } from 'react-redux';

import Login from '../../components/partials/Login';

function LoginPage() {
    const state = useSelector((reducer) => reducer.userdata);
    const { isLoading, isError } = state;

    return (
        <>
            <Login isLoading={isLoading} isError={isError} />
        </>
    );
}

export default LoginPage;
