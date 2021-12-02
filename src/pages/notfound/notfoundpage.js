import React from 'react';

function NotFoundPage() {
    return (
        <div className="h-screen w-full flex justify-center items-center">
            <div>
                <div className="flex justify-center">
                    <img src={`${process.env.PUBLIC_URL}/not-found.svg`} alt="404" className="h-60 lg:h-96" />
                </div>
                <h1 className="text-center mt-20 text-xl md:text-2xl lg:text-5xl font-bold">Sorry Page Not Found</h1>
            </div>
        </div>
    );
}

export default NotFoundPage;
