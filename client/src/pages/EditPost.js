import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './EditPost.css';
import { supabase } from '../client'; // Importing the Supabase client

const EditPost = () => {
    const { id } = useParams();
    const [post, setPost] = useState({ id: null, title: "", author: "", description: "", LVL: "", ATK: "", DEF: ""  });

    useEffect(() => {
        fetchPost();
    }, []);

    const fetchPost = async () => {
        try {
            const { data, error } = await supabase.from('Posts').select('*').eq('id', id);
            if (error) {
                throw error;
            }
            if (data && data.length > 0) {
                setPost(data[0]);
            }
        } catch (error) {
            console.error('Error fetching post:', error.message);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPost(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const updatePost = async (event) => {
        event.preventDefault();
        try {
            await supabase.from('Posts').update(post).eq('id', id);
            window.location = "/"; // Redirect to home page after successful update
        } catch (error) {
            console.error('Error updating post:', error.message);
        }
    };

    const deletePost = async (event) => {
        event.preventDefault();
        try {
            await supabase.from('Posts').delete().eq('id', id);
            window.location = "/"; // Redirect to home page after successful deletion
        } catch (error) {
            console.error('Error deleting post:', error.message);
        }
    };

    return (
        <div>
            <form onSubmit={updatePost}>
                <label htmlFor="title">Title</label><br />
                <input type="text" id="title" name="title" value={post.title} onChange={handleChange} /><br /><br />

                <label htmlFor="author">Author</label><br />
                <input type="text" id="author" name="author" value={post.author} onChange={handleChange} /><br /><br />

                <label htmlFor="description">Description</label><br />
                <textarea id="description" name="description" value={post.description} onChange={handleChange} rows="5" cols="50"></textarea><br /><br />

                <label htmlFor="LVL">Level</label><br />
                <input type="number" id="LVL" name="LVL" value={post.LVL} onChange={handleChange} /><br />
                <br />

                <label htmlFor="ATK">Attack</label><br />
                <input type="number" id="ATK" name="ATK" value={post.ATK} onChange={handleChange} /><br />
                <br />

                <label htmlFor="DEF">Defense</label><br />
                <input type="number" id="DEF" name="DEF" value={post.DEF} onChange={handleChange} /><br />
                <br />

                <input type="submit" value="Submit" />
                <button className="deleteButton" onClick={deletePost}>Delete</button>
            </form>
        </div>
    );
};

export default EditPost;
