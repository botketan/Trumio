
import React from 'react';
import './NotesCard.css';

const NotesCard = ({notesCardData}) => {
    return ( 
        <div className="notes-card-box" >
                
            <h1 className="heading">
                {notesCardData.title} 
            </h1> 
            
            <p className="content">
                {notesCardData.description.slice(0,130)+"..."} 
            </p>
            <p className=" update">{"Updated "+ notesCardData.days +" days ago"}</p>
                </div>
        
    );
}

export default NotesCard;