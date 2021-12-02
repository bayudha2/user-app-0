import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleNotch,
} from '@fortawesome/free-solid-svg-icons';

import { AUTH_KEY, getCookie } from '../../../helpers/cookie';
import CardLogin from '../../elements/CardLogin';

function Login(props) {
    const { isLoading, isError } = props;

    const navigate = useNavigate();

    const isLoggedIn = () => {
        const authCookie = getCookie(AUTH_KEY);
        if (!authCookie) return false;
        return true;
    };

    const isLogged = isLoggedIn();

    useEffect(() => {
        if (isLogged) {
            navigate('/users');
        } else {
            navigate('/');
        }
    }, [isLogged, navigate]);

    return (
        <>
            {
                isLoading ? (
                    <div className="h-screen w-full flex justify-center items-center">
                        <FontAwesomeIcon size="5x" icon={faCircleNotch} spin />
                    </div>
                ) : (
                    <>
                        <section className="w-8/12 mx-auto mt-44">
                            {
                                isError ? (
                                    <div className="flex justify-center items-center">
                                        <h3 className="transition duration-200 ease-in-out text-lg font-bold border border-red-500 p-2 text-red-500 rounded-md hover:bg-red-500 hover:text-white ">Login Failed</h3>
                                    </div>
                                ) : ''
                            }
                            <div className="flex justify-center items-center">
                                <CardLogin />
                            </div>
                        </section>
                    </>
                )
            }

        </>
    );
}

export default Login;
