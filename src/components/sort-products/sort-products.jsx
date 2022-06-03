
import {BOOKS} from "../../pages/home-page/home-page"
import { BookItem } from '../../components/book-item';


import React, { useState, useEffect } from 'react';

function SortProduct() {

  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState('albums');


  useEffect(() => {
    const sortArray = type => {
      const types = {
        title: 'title',
        authors: 'authors',
      };
      const sortProperty = types[type];
      const sorted = [...BOOKS].sort((a, b) => b[sortProperty] - a[sortProperty]);
      setData(sorted);
    };
    sortArray(sortType);
  }, [sortType]);
  
  
  return (
    <div className="App">
      <select onChange={(e) => setSortType(e.target.value)}> 
        <option value="title">Title</option>
        <option value="authors">Authors</option>
      </select>

      <div className="home-page">
            { data.map(book => <BookItem book={book} key={book.id}/>) }

        </div>
    </div>
  );
}
export default SortProduct;




 