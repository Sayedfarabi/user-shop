import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import errorImage from "../../assets/images/error/error.png";

const Error = () => {
    const error = useRouteError();
    return (
        <div className='flex justify-center items-center min-h-screen my-auto'>
            <div className='text-center'>
                <img src={errorImage} alt="errorImage" className='w-3/5 rounded-md mx-auto' />
                <p className='text-3xl'>Oops!</p>
                <p className='text-red-400'>Sorry, an unexpected error has occurred</p>
                <p className='text-red-400'>This Route is not found, status 404.</p>
                <p className='text-red-400'>
                    <i>{error?.statusText || error?.message}</i>
                </p>
                <p>
                    Please Back to <br /> <Link to={"/"}> <button className='btn btn-xs'>Home</button> </Link>
                </p>
            </div>
        </div>
    );
};

export default Error;