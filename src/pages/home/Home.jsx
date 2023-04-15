import React, { useContext, useState } from 'react';
import { DataProvider } from '../../layout/Root';
import Card from '../../components/card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { setAvailability, setDomain, setGender } from '../../redux/action-creators/actionCreators';



const Home = () => {

    // JSON Data 
    const { users } = useContext(DataProvider);
    const [pageNumber, setPageNumber] = useState(1)
    const domains = [];
    const dataShow = 20;
    const length = users?.length;
    const pages = Math.ceil(length / dataShow);
    const [limitUsers, setLimitUsers] = useState([])

    // Redux 
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const domain = state.domain;
    const gender = state.gender;
    const availability = state.available;
    // console.log(domain, gender, availability);

    // CSS Classes 
    const activeDiv = "btn btn-sm bg-blue-800 hover:bg-blue-700 mx-4 my-2";
    const deactivateDiv = "mx-4 p-1 border rounded-md";
    const activeSelect = "bg-blue-800 hover:bg-blue-700";
    const deactivateSelect = "";




    for (const user of users) {
        if (!domains.includes(user?.domain)) {
            domains.push(user?.domain)
        } else {
            continue
        }
    }




    const previousHandle = () => {
        const currentPage = pageNumber - 1;
        if (currentPage > 0) {
            setPageNumber(currentPage)
            const endIndex = currentPage * dataShow;
            const startIndex = endIndex - dataShow;
            const data = users?.slice(startIndex, endIndex)
            setLimitUsers(data)
            // console.log(startIndex, " - ", endIndex);
        } else {
            return
        }
    }

    const nextHandle = () => {
        const currentPage = pageNumber + 1;
        if (currentPage <= pages) {
            setPageNumber(currentPage)
            const endIndex = currentPage * dataShow;
            if (endIndex > length) {
                const startIndex = endIndex - dataShow;
                const data = users?.slice(startIndex, length)
                setLimitUsers(data)
                // console.log(startIndex, " - ", length);
            } else {
                const startIndex = endIndex - dataShow;
                const data = users?.slice(startIndex, endIndex)
                setLimitUsers(data)
                // console.log(startIndex, " - ", endIndex);
            }
        } else {
            return
        }
    }



    return (
        <section>

            <div className='flex flex-col-reverse md:flex-row justify-between items-center mx-4 md:mx-6 my-8 md:my-12'>
                <div className='flex flex-col md:flex-row justify-start items-center'>
                    <div className={`${domain ? activeDiv : deactivateDiv}`}>
                        <form>
                            <div>
                                <label htmlFor="domain"></label>
                                <select onChange={(e) => dispatch(setDomain(e.target.value))} className={`${domain ? activeSelect : deactivateSelect}`} name="domain">
                                    <option className='font-semibold' value={"none"}>Select Domain</option>
                                    {
                                        domains &&
                                        domains.map(domain => {
                                            return <option className='bg-white text-black' key={`${domain}`} value={`${domain}`}>{domain}</option>
                                        })
                                    }
                                </select>
                            </div>
                        </form>
                    </div>
                    <div className={`${gender ? activeDiv : deactivateDiv}`}>
                        <form>
                            <div>
                                <label htmlFor="gender"></label>
                                <select onChange={(e) => dispatch(setGender(e.target.value))} className={`${gender ? activeSelect : deactivateSelect}`}>
                                    <option className='font-semibold' value="none">Select Gender</option>
                                    <option className='bg-white text-black' value="Male">Male</option>
                                    <option className='bg-white text-black' value="Female">Female</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <div className={`${availability ? activeDiv : deactivateDiv}`}>
                        <form>
                            <div>
                                <label htmlFor="availability"></label>
                                <select onChange={(e) => dispatch(setAvailability(e.target.value))} className={`${availability ? activeSelect : deactivateSelect}`}>
                                    <option className='font-semibold' value={"none"}>Select availability</option>
                                    <option className='bg-white text-black' value={true}>Available</option>
                                    <option className='bg-white text-black' value={false}>Unavailable</option>
                                </select>
                            </div>
                        </form>
                    </div>
                </div>

                <div>
                    <form>
                        <input className='border mx-2 text-center py-1' type="text" name="search" id='search' placeholder='Search by user name' />
                        <input className='btn btn-sm btn-primary' type="submit" value="Search" />
                    </form>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-8 md:my-12 mx-2 md:mx-4 border rounded-md p-2'>
                {
                    !limitUsers.length ?
                        users.slice(0, dataShow).map(user => {
                            return <Card
                                key={user?.id}
                                user={user}
                            ></Card>
                        })
                        :
                        limitUsers.map(user => {
                            return <Card
                                key={user?.id}
                                user={user}
                            >
                            </Card>
                        })

                }
            </div>


            {
                users &&
                <div className='flex justify-center items-center my-8'>
                    <div className="btn-group">
                        <button onClick={previousHandle} className="btn">«</button>
                        <button className="btn">Page <span className='mx-2'>{pageNumber}</span>/<span className='mx-2'>{pages}</span></button>
                        <button onClick={nextHandle} className="btn">»</button>
                    </div>
                </div>
            }
        </section>
    );
};

export default Home;