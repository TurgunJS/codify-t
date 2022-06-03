import React from 'react';
import './book-author.css';

export const BookAuthor = ({ author = '' }) => {
    return <span className="book-author">{author}</span>
}
