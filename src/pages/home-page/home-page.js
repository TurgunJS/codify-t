import React, { useState, useEffect } from 'react';
import { BookItem } from '../../components/book-item';
import './home-page.css'; 

const BOOKS = [
    {
        image: '/book-covers/bookOne.png',
        title: 'Игра престолов',
        authors: ['Автор:', 'Джордж Рэймонд Ричард Мартин'],
        price: 1200,
        video: 'https://www.youtube.com/embed/k8xVmv3e8Xo',
        id: 1,
        description: "Игра престолов» (англ. A Game of Thrones) — роман в жанре фэнтези американского писателя Джорджа Р. Р. Мартина, первая книга из серии «Песнь льда и огня.",
    },
    {
        image: '/book-covers/bookTwo.png',
        title: 'Гарри Поттер',
        authors: ['Автор:', 'Джоан Роулинг'],
        video: 'https://www.youtube.com/embed/HUa7yKgqdbc',
        price: 1445,
        id: 2,
        description: '«Гарри Поттер» (англ. «Harry Potter») — серия романов, написанная британской писательницей Дж. К. Роулинг. Книги представляют собой хронику приключений юного волшебника Гарри Поттера.'
    },
    {
        image: '/book-covers/bookThree.png',
        title: 'Властелин колец',
        authors: ['Автор:', 'Джон Рональд Руэл Толкин'],
        video: 'https://www.youtube.com/embed/Nydny1SClnA',
        price: 900,
        id: 3,
        description: 'Трилогия "Властелин Колец" - одна из тех великих книг, встреча с которыми становится Событием Эпическая красота повествования, вечная тема борьбы Добра и Зла.'
    },
    {
        image: '/book-covers/bookFour.png',
        title: 'Шерлок Холмс',
        authors: ['Автор:', 'Артур Конан Дойл'],
        video: 'https://www.youtube.com/embed/cg2FNL3Ex1Q',
        price: 789,
        id: 4,
        description: 'Шерлок Холмс - литературный персонаж, созданный талантом английского писателя Артура Конан Дойла (1859-1930). Его произведения, посвященные приключениям знаменитого лондонского частного сыщика.'
    },
    {
        image: '/book-covers/bookFive.png',
        title: 'Чудо',
        video: 'https://www.youtube.com/embed/CAOd2IfIouo',
        authors: ['Автор:','Ракель Паласио'],
        price: 1300,
        id: 5,
        description: 'Есть на свете пятиклассник по имени Август Пуллман. С одной стороны, он такой же как и другие мальчишки его возраста - любит ходить на дни рождения к своим друзьям, играть в компьютерные игры, он фанатеет от "Звездных войн", играет со своей собакой, ссорится и мирится со старшей сестрой. А с другой, он совсем не такой как другие мальчишки его возраста.'
    },
    {
        image: '/book-covers/bookSixth.png',
        title: 'Марсианин',
        authors: ['Автор:', 'Энди Уир'],
        video: 'https://www.youtube.com/embed/tQaGwUpU0fk',
        price: 689,
        id: 6,
        description: 'Я очень гордился тем, что попал в команду для полета на Марс - кто бы отказался прогуляться по чужой планете! Но... меня забыли. Бросили, раненого и растерянного, и корабль улетел.'
    },
]

export const HomePage = () => {
    return (
        <div className="home-page">
            { BOOKS.map(book => <BookItem book={book} key={book.id}/>) }

        </div>
    )
}
