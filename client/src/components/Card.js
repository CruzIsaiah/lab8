import React, { useState, useEffect } from 'react';
import './Card.css';
import more from './more.png';
import { Link } from 'react-router-dom';
import { supabase } from '../client'; // Import the Supabase client

const Card = (props) => {
    const [count, setCount] = useState(0);
    const [iconUrl, setIconUrl] = useState(null);

    useEffect(() => {
        // Fetch the transformed image URL from Supabase Storage
        const fetchIconUrl = async () => {
            if (props.icon) {
                try {
                    const { data, error } = await supabase
                        .storage
                        .from('iconBuild') // Replace 'iconBuild' with your actual bucket name
                        .getPublicUrl(props.icon, {
                            transform: {
                                width: 100, // Adjust width as needed
                                height: 100, // Adjust height as needed
                            },
                        });

                    if (error) {
                        throw error;
                    }

                    setIconUrl(data.publicUrl);
                } catch (error) {
                    console.error('Error fetching icon URL:', error.message);
                }
            }
        };

        fetchIconUrl();
    }, [props.icon]);

    const updateCount = async () => {
        try {
            // Update bet count in the database
            await supabase
                .from('Posts')
                .update({ betCount: count + 1 })
                .eq('id', props.id);

            // Update the bet count in the UI
            setCount((count) => count + 1);
        } catch (error) {
            console.error('Error updating bet count:', error.message);
            // Handle error, e.g., display error message to the user
        }
    };

    return (
        <div className="Card">
            <Link to={'edit/' + props.id}>
                <img className="moreButton" alt="edit button" src={more} />
            </Link>
            <h2 className="title">{props.title}</h2>
            <h3 className="author">{"by " + props.author}</h3>
            {iconUrl && ( // Check if icon URL is available
                <img className="icon" src={iconUrl} alt="character icon" />
            )}
            <div className="stats">
                <p>Lvl: {props.LVL}</p>
                <p>Attack: {props.ATK}</p>
                <p>Defense: {props.DEF}</p>
            </div>
            <button className="betButton" onClick={updateCount}>
                👍 vote Count: {count}
            </button>
        </div>
    );
};

export default Card;
