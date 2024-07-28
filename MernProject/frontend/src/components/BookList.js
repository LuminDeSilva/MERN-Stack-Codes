import React, {useEffect,useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './main.css'

//() => {} is a arrow function. It is a short hand way of writing a function. ES6 feature. function(){} is the old way of writing a function.
//() => {} is the same as function(){} but with a different syntax.
//function BookList(){} is the old way of writing a function. const BookList = () => {} is the new way of writing a function.

const BookList = () => {
    const [books, setBooks] = useState([]); //state variable to store books
    useEffect(() => {
        axios.get('http://localhost:5000/api/books').then((response) => {
            setBooks(response.data);
        });
    }, []); 

    return (
        <div>
            <h1 className='heading'>Book List</h1>
            <ul className='list'>
                
                {books.map(book => (
                    <li key={book._id}>
                        <Link to={`/edit/${book._id}`}>{book.title}</Link>
                    </li>
                ))}
            </ul>
            <Link to="/add" className='second'>Add Book</Link>
        </div>
    );
}
//map function is used to iterate through the books array and display the title of each book
//book is a variable that stores each book object in the books array
//book._id is the id of the book
//link to the edit page of the book with the id of the book

export default BookList;