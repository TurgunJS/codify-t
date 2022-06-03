import React from "react";
import { useSelector} from 'react-redux';
import { BookBuy } from "../../components/book-buy";
import { BookCover } from "../../components/book-cover/book-cover";
import { BookAuthor } from "../../components/book-author";
import "./book-page.css"; 

export const BookPage = () => {
  const book = useSelector(state => state.books.currentBook);

  if(!book) return null

  return (
    <div className="book-page">
      <h1 className="book-page__title">{ book.title }</h1>
      <div className="book-page__content">
        <div className="book-page__left">
          <iframe
            width="90%"
            height="400px"
            src={book.video}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className="book-page__right">
          <BookCover image={book.image} />
          <p>{book.description}</p>
          <p className="secondary-text">Популярные метки для этого продукта:</p>
          {book.authors.map((author) => (
            <BookAuthor author={author} key={author} />
          ))}
          <div className="book-page__buy-book">
            <BookBuy book={book} />
          </div>
        </div>
      </div>
    </div>
  );
};
