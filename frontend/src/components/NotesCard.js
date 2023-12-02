
import React from 'react';
import './NotesCard.css';

const NotesCard = ({notesCardData}) => {
    return ( 
        <div className="notes-card-box" >
                
            <h3 className="heading">
                {notesCardData.heading} 
            </h3> 
            
            <p className="content">
                {notesCardData.content} 
            </p>
            <p className=" update">{"Updated "+ notesCardData.days +" days ago"}</p>
                </div>
        
    );
}

export default NotesCard;