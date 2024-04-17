import React, { useState } from 'react';
import { supabase } from '../client';

const CreatePost = () => {
    const [post, setPost] = useState({ title: "", author: "", description: "", LVL: 0, ATK: 0, DEF: 0, icon: "" });

    const createPost = async (event) => {
        event.preventDefault();

        try {
            // Insert post data into database
            await supabase
                .from('Posts')
                .insert(post)
                .select();

            window.location = "/";
        } catch (error) {
            console.error('Error creating post:', error.message);
            // Handle error, e.g., display error message to the user
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPost((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleImageChange = (event) => {
        const { value } = event.target;
        setPost((prev) => ({
            ...prev,
            icon: value,
        }));
    };

    return (
        <div>
            <form onSubmit={createPost}>
                <label htmlFor="title">Title</label> <br />
                <input type="text" id="title" name="title" value={post.title} onChange={handleChange} /><br />
                <br />

                <label htmlFor="author">Author</label><br />
                <input type="text" id="author" name="author" value={post.author} onChange={handleChange} /><br />
                <br />

                <label htmlFor="description">Description</label><br />
                <textarea rows="5" cols="50" id="description" name="description" value={post.description} onChange={handleChange}></textarea>
                <br />
                <br />

                <label htmlFor="LVL">Level</label><br />
                <input type="number" id="LVL" name="LVL" value={post.LVL} onChange={handleChange} /><br />
                <br />

                <label htmlFor="ATK">Attack</label><br />
                <input type="number" id="ATK" name="ATK" value={post.ATK} onChange={handleChange} /><br />
                <br />

                <label htmlFor="DEF">Defense</label><br />
                <input type="number" id="DEF" name="DEF" value={post.DEF} onChange={handleChange} /><br />
                <br />
                
                <label htmlFor="icon">Choose Build: </label>
                <select id="icon" name="icon" onChange={handleImageChange}>
                    <option value="">Select an icon</option>
                    <option value="mario.png">Hero</option>
                    <option value="Lu.jpg">Support</option>
                    <option value="wario.jpg">Villain</option>
                    <option value="waluigi.png">Odd Ball</option>
                    <option value="lucas.jpg">Creator</option>
                </select>
                {/* <br />            <label htmlFor="title">Character Model</label> <br /> */}
            {post.icon && (
                <div>
                    <img
                        src={post.icon}
                        alt="Icon"
                        style={{ width: "100px", height: "100px" }}
                    />
                </div>
            )}
                <br />

                <input type="submit" value="Submit" />
            </form>
            
        </div>
    );
};

export default CreatePost;
