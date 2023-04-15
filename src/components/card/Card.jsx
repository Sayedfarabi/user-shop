import React from 'react';


const Card = ({ user }) => {

    const { avatar, first_name, last_name, email, gender, domain, available } = user;
    return (
        <div className="group relative item-center justify-center overflow-hidden cursor-default hover:shadow-xl hover:shadow-black/30 trans transition-shadow mx-auto">
            <div className="h-96 w-72">
                <img className='h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500' src={avatar} alt="Product" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">

            </div>
            <div className="absolute inset-0 flex justify-end mt-2 mr-2 ">
                <div className=''>
                    <p>
                        <span className={`badge ${available ? "bg-fuchsia-500" : "bg-gray-500"} badge-md`}>{available ? "Available" : "Unavailable"}</span>
                    </p>
                </div>

            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[70%] md:translate-y-[70%] group-hover:translate-y-0 transition-all">

                <div>
                    <h1 className='text-2xl md:text-3xl text-green-400 font-bold mb-12'>{domain}</h1>
                </div>
                <div>
                    <h1 className='text-xl font-bold text-blue-400 mb-4'>{`${first_name} ${last_name}`}</h1>
                </div>
                <div>
                    <p className='text-lg italic text-gray-200 mb-3 opacity-100 transition-opacity duration-300'>
                        {email}
                    </p>
                    <p className='text-lg italic text-white mb-3 opacity-100 transition-opacity duration-300 font-bold'>

                        <span className='text-amber-500'>
                            {gender}
                        </span>
                    </p>
                </div>
                <div className='mt-12'>

                    {

                        <div className='w-full'>
                            {
                                available &&
                                <button
                                    className=' btn btn-md bg-yellow-500 hover:bg-red-500 text-xl capitalize text-black hover:text-white py-2' >Add to team
                                </button>
                            }

                        </div>
                    }

                </div>
            </div>

        </div>
    );
};

export default Card;