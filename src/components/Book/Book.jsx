import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { author, bookName, bookId, image, tags, rating, category,totalPages } = book;
    return (
        <Link to={`books/${bookId}`}>
            <div className="card bg-base-100 w-96 border border-[rgba(19,19,19,0.15)] p-4">
                <figure className='bg-[#F3F3F3] rounded-2xl py-6'>
                    <img
                        src={image}
                        className='h-[166px]'
                        alt={bookName} />
                </figure>
                <div className="card-body">
                    <div className='flex justify-center gap-4'>
                        {
                            tags.map((tag, idx) => <button key={idx} className="btn btn-xs bg-[rgba(34,190,10,0.05)] text-[#23BE0A]">{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>By: {author}</p>
                    <div className='border-t-2 border-dashed my-2'></div>
                    <div className="card-actions justify-between items-center">
                        <div className="badge badge-outline">{category}</div>
                        <div>{rating}</div>
                        <div>{totalPages}</div>
                        <div className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;