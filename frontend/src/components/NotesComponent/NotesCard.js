
import React from 'react';
import './NotesCard.css';
import { Link } from 'react-router-dom';

const NotesCard = ({notesCardData}) => {
    return ( 
        <Link to={`/Notes?id=${notesCardData.id}`} className="notes-card-box">
        <div>
            <h1 className="heading">
                {notesCardData.title} 
            </h1> 
            
            <p className="content">
                {notesCardData.description.slice(0,130)+(notesCardData.description.length>130?"...":"")} 
            </p>
            <p className=" update">{"Updated "+ notesCardData.days +" days ago"}</p>
        </div>
        </Link>
        
    );
}

export default NotesCard;