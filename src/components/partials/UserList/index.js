import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import { logout, getCookie, AUTH_KEY } from '../../../helpers/cookie';
import CardUsers from '../../elements/CardUsers';

const initialUsers = [];

function UserList(props) {
    const { usersData } = props;
    const navigate = useNavigate();
    const [dataUsers, setDataUsers] = useState(initialUsers);

    function Logout() {
        logout();
        navigate('/');
    }

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

    useEffect(() => {
        if (usersData.length > 0) {
            setDataUsers(usersData);
        }
    }, [usersData]);

    return (
        <section className="w-8/12 mx-auto mt-16">
            <div className="flex justify-between">
                <h2 className="my-auto md:text-lg lg:text-2xl  font-bold text-gray-700 ">Here are the users ...</h2>
                <button type="button" onClick={Logout} className="text-white p-1 lg:p-2 bg-red-500 rounded-md active:bg-red-800">
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    {' '}
                    Logout
                </button>
            </div>
            <div className="mt-10">
                <ul className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-md">
                    {
                        dataUsers.map((item, index) => (
                            // eslint-disable-next-line react/no-array-index-key
                            <CardUsers key={index} data={item} />
                        ))
                    }
                </ul>
            </div>
        </section>
    );
}

export default UserList;
