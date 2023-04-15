import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../../components/card/Card';

const Teams = () => {
    const members = useSelector(store => store?.team)
    console.log(members);
    return (
        <section>
            <div>
                {
                    members.length ?
                        <div
                            className='grid grid-cols-1 md:grid-cols-4 gap-3 my-8 md:my-12 mx-2 md:mx-4 border rounded-md p-2'>

                            {
                                members.map(member => {
                                    return <Card
                                        key={member?.id}
                                        user={member}
                                    >
                                    </Card>
                                })
                            }
                        </div>
                        :
                        <div>
                            <p className='text-2xl text-center text-yellow-600 my-8 md:my-12 py-8 md:py-12 border rounded-md'>Team Member is Unavailable</p>
                        </div>
                }
            </div>

        </section>
    );
};

export default Teams;