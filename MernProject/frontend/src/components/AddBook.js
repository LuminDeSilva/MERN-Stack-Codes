import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom';   //useNavigate is a hook that is used to navigate to a different page in the application

const AddBook = () => {
    //state variables to store the form data
    const [title, setTitle] = useState(''); //state variable to store title
    const [author, setAuthor] = useState(''); //state variable to store author
    const [description, setDescription] = useState(''); //state variable to store description
    const [publishedYear, setPublishedYear] = useState(''); //state variable to store published year
    const [publisher, setPublisher] = useState(''); //state variable to store publisher

    const navigate = useNavigate(); //useNavigate hook

    //onSubmit function to handle form submission. This function will be called when the form is submitted
    const onSubmit = e => {
        e.preventDefault(); //prevent the default form submission
        const newBook = { //creating a new book object
            title,
            author,
            description,
            published_year: publishedYear,
            publisher,
        };
        axios.post('http://localhost:5000/api/books/add', newBook)
            .then(res => {
                console.log(res.data);
                navigate('/'); //navigate to the home page
        });
    }

    return (
        <div>
            <h1>Add New Book</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Title: </label>
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)} /> 
                </div>
                <div>
                    <label>Author: </label>
                    <input type="text" value={author} onChange={e => setAuthor(e.target.value)} />
                </div>
                <div>
                    <label>Description: </label>
                    <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
                </div>
                <div>
                    <label>Published Year: </label>
                    <input type="number" value={publishedYear} onChange={e => setPublishedYear(e.target.value)} />
                </div>
                <div>
                    <label>Publisher: </label>
                    <input type="text" value={publisher} onChange={e => setPublisher(e.target.value)} />
                </div>
                <button type="submit">Add Book</button>
            </form>
        </div>
    );
}

//onChange event handler to update the title state variable. This function will be called whenever the input field value changes

export default AddBook