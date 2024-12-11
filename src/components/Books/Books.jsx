import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('booksData.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <>
        <h2 className='text-5xl font-bold text-center mt-20'>Books</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-20 '>
            
            {
                books.map((book) => <Book key={book.bookId} book={book}></Book>)
            }
        </div>
        </>
    );
};

export default Books;