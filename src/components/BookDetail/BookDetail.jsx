import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList } from '../../Utility/addToDb';
import { AddToStoredWishList } from '../../addToWishList/addToWishList';

const BookDetail = () => {
    const { bookId } = useParams();
    const data = useLoaderData();
    const id = parseInt(bookId);
    const book = data.find(book => book.bookId === id);
    const { bookId: currentId, image, bookName, author, review, tags, category, publisher, yearOfPublishing, rating, totalPages, } = book;

    const handleMarkAsRead = (id) => {
        addToStoredReadList(id);
    }

    const handleAddToWishList = (id) => {
        AddToStoredWishList(id);
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src={image}
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold pb-5">{bookName}</h1>
                    <h3>By: {author}</h3>
                    <div className="divider"></div>
                    <p>{category}</p>
                    <div className="divider"></div>
                    <p className="py-3"><span className='text-xl font-bold'>Review: </span>{review}</p>

                    <div className='flex gap-5 items-center'><span className='text-xl font-bold'>Tag </span> {
                        tags.map((tag, idx) => <p key={idx} className='bg-[rgba(34,190,10,0.05)] rounded-lg text-[#23BE0A]'>#{tag}</p>)
                    }
                    </div>
                    <div className="divider"></div>
                    <div className='flex gap-3'>
                        <button onClick={() => handleMarkAsRead(bookId)} className="btn btn-outline btn-success">Mark as Read</button>
                        <button onClick={() => handleAddToWishList(bookId)} className="btn btn-success">Add to Wish list</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;