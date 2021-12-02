import React from 'react';

export default function CardDetail(props) {
    const { data } = props;

    return (
        <div className="flex justify-center items-center">
            <div className=" w-10/12 md:w-6/12 sm:6/12 lg:w-4/12 bg-white rounded-2xl shadow-2xl">
                <div className="flex flex-col items-center justify-center mt-22 pt-10">
                    <img src={data.avatar} alt="Profile" className="rounded-full border-4 bg-white border-white" />
                    <h1 className="font-bold mt-5 mb-1">
                        {`${data.first_name} ${data.last_name}`}
                    </h1>
                    <div className="flex justify-center items-center">
                        <h2 className="text-sm font-light italic text-green-700">{data.email}</h2>
                    </div>
                </div>
                <div className="flex justify-evenly mt-6 py-6 border border-r-0 border-b-0 border-l-0">
                    <div className="text-center">
                        <h3 className="font-bold text-gray-800">Source</h3>
                        <p className="text-xs text-gray-500">https://reqres.in/api</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
