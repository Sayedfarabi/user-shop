import React, { useContext, useState } from 'react';
import { DataProvider } from '../../layout/Root';



const Home = () => {
    const { users } = useContext(DataProvider);
    // console.log(users);

    const [pageNumber, setPageNumber] = useState(1)
    const dataShow = 20;
    const length = users?.length;
    const pages = Math.ceil(length / dataShow);
    const [limitUsers, setLimitUsers] = useState([])


    const previousHandle = () => {
        const currentPage = pageNumber - 1;


        if (currentPage > 0) {
            setPageNumber(currentPage)
            const endIndex = currentPage * dataShow;
            const startIndex = endIndex - dataShow;
            const data = users?.slice(startIndex, endIndex)
            setLimitUsers(data)
            console.log(startIndex, " - ", endIndex);
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
                console.log(startIndex, " - ", length);
            } else {
                const startIndex = endIndex - dataShow;
                const data = users?.slice(startIndex, endIndex)
                setLimitUsers(data)
                console.log(startIndex, " - ", endIndex);
            }
        } else {
            return
        }
    }

    return (
        <section>

            <div>

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