import React, { useState, useEffect } from 'react';
import CardDetail from '../../elements/CardDetail';

const initialData = {
    data: {},
};
function User(props) {
    const { data } = props;
    const [userData, setUserData] = useState(initialData);

    useEffect(() => {
        if (Object.keys(data).length > 0) {
            setUserData(data);
        }
    }, [data]);

    console.log(userData);

    return (
        <section className="w-8/12 mx-auto mt-16 ">
            <CardDetail data={userData} />
        </section>
    );
}

export default User;
