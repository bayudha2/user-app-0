import React from 'react';
import { useNavigate } from 'react-router';

export default function CardUsers(props) {
    const navigate = useNavigate();
    const { data } = props;
    return (
        <li className="px-4">
            <div
                className="inline-block w-full my-3 overflow-hidden align-middle border rounded-md hover:shadow-md transition duration-200 ease-in-out bg-white cursor-pointer"
                onKeyPress={() => ''}
                aria-hidden="true"
                onClick={() => { navigate(`/users/${data.id}`); }}
            >
                <div className="p-6 flex justify-center items-center">
                    <div>
                        <img src={data.avatar} alt="avatar" className="rounded-full " />
                        <p className="text-center mt-6 text-gray-700">{`${data.first_name} ${data.last_name}`}</p>
                        <p className="text-center text-gray-400 text-sm">{data.email}</p>
                        <div className="flex justify-center items-center mt-4">
                            <p className="text-center text-xs p-1 px-2 bg-green-100 rounded-2xl text-green-700">User</p>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}
