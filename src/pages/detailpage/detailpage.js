import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleNotch,
} from '@fortawesome/free-solid-svg-icons';

import { getCookie, AUTH_KEY } from '../../helpers/cookie';
import { getUserData } from './action';

import User from '../../components/partials/User';

function DetailPage() {
    const { userid } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const state = useSelector((reducer) => reducer.userdata);
    const { isError, isLoading, user } = state;

    useEffect(() => {
        dispatch(getUserData(userid));
    }, []); //eslint-disable-line

    const isLoggedIn = () => {
        const authCookie = getCookie(AUTH_KEY);
        if (!authCookie) return false;
        return true;
    };

    const isLogged = isLoggedIn();

    useEffect(() => {
        if (!isLogged) {
            navigate('/');
        }
    }, [isLogged, navigate]);

    return (
        <>
            {
                // eslint-disable-next-line no-nested-ternary
                isLoading ? (
                    <div className="h-screen w-full flex justify-center items-center">
                        <FontAwesomeIcon size="5x" icon={faCircleNotch} spin />
                    </div>
                ) : isError ? (
                    <div className="h-screen w-full flex justify-center items-center">
                        <div>
                            <div className="flex justify-center">
                                <img src={`${process.env.PUBLIC_URL}/not-found.svg`} alt="404" className="h-60 lg:h-96" />
                            </div>
                            <h1 className="text-center mt-20 text-xl md:text-2xl lg:text-5xl font-bold">Sorry User Not Found</h1>
                        </div>
                    </div>
                ) : (
                    <User data={user.data || {}} />
                )
            }
        </>
    );
}

export default DetailPage;
