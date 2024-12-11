import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../Utility/addToDb';
import Book from '../Book/Book';

const ListedBooks = () => {
    const [readList, setReadList] = useState([]);
    const [sort, setSort] = useState('');
    const allBooks = useLoaderData();

    useEffect(() => {
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id))
        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId))
        // console.log(storedReadList, allBooks, storedReadListInt)
        setReadList(readBookList);
    }, [])

    const handleSort = sortType => {
        setSort(sortType);

        if (sortType === 'no of pages') {
            const sortReadList = [...readList].sort((a, b) => a.totalPages - b.totalPages);
            setReadList(sortReadList);
        }

        if(sortType === 'rating'){
            const sortReadList = [...readList].sort((a, b) => a.rating - b.rating);
            setReadList(sortReadList);
        }
    }
    return (
        <div>
            <h3 className="text-3xl my-8">Listed Books</h3>
            <div className="dropdown items-end">
                <div tabIndex={0} role="button" className="btn m-1 ">
                    {
                        sort ? `Sort by: ${sort}` : 'Sort by'
                    }
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={() => handleSort('rating')}><a>Rating</a></li>
                    <li onClick={() => handleSort('no of pages')}><a>No of pages</a></li>
                </ul>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2>Mark as Read</h2>
                    {
                        readList.map(book => <Book book={book} key={book.bookId}></Book>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2>Add to Wish List</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;