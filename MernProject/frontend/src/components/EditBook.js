import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useParams, useNavigate} from 'react-router-dom'

const EditBook = () => {
    const  {id} = useParams(); //useParams hook to get the id parameter from the URL
    const navigate = useNavigate(); //useNavigate hook

    const [title, setTitle] = useState(''); //state variable to store title
    const [author, setAuthor] = useState(''); //state variable to store author
    const [description, setDescription] = useState(''); //state variable to store description
    const [publishedYear, setPublishedYear] = useState(''); //state variable to store published year
    const [publisher, setPublisher] = useState(''); //state variable to store publisher

    useEffect(() => {
        axios.get(`http://localhost:5000/api/books/${id}`).then((response) => {
            setTitle(response.data.title);
            setAuthor(response.data.author);
            setDescription(response.data.description);
            setPublishedYear(response.data.published_year);
            setPublisher(response.data.publisher);
        })
        .catch((err) => {
            console.error("Error fetching data: ", err);
        });
    }, [id]);

    const onSubmit = e => {
        e.preventDefault();
        const updatedBook = {
            title,
            author,
            description,
            published_year: publishedYear,
            publisher,
        };
        axios.put(`http://localhost:5000/api/books/update/${id}`, updatedBook)
            .then(res => {
                console.log(res.data);
                navigate('/');
            });
    };

    return (
        <div>
            <h1>Edit Book</h1>
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
                <button type="submit">Update Book</button>
            </form>
        </div>
    )
}

export default EditBook