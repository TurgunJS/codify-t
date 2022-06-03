import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { BookAuthor } from "../book-author";
import { BookBuy } from "../book-buy";
import { BookCover } from "../book-cover/book-cover";
import { setCurrentBook } from "../../store/books/reducer";
import "./book-item.css"; 

export const BookItem = ({ book:book }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setCurrentBook(book));
    history.push(`/app/${book.title}`);
  };

  return (
    <div className="book-item" onClick={handleClick}>
      <BookCover image={book.image} />
      <div className="book-item__details">
        <span className="book-item__title">{book.title}</span>
        <div className="book-item__author">
          {book.authors.map((author) => (
            <BookAuthor author={author} key={author} />
          ))}
        </div>
        <div className="book-item__buy">
          <BookBuy book={book} />
        </div>
      </div>
    </div>
  );
};
