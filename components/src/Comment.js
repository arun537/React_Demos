import React from 'react'

const Comment = (props) => {
    return (
        <div className = "comment">
            <a href='/' className="avatar">
                <img alt="avatar" src={props.imageSource}/>
            </a>
            <div className="content">
                <a href="/" className="author">{props.authorName}</a>
                <div className="metadata">
                    <span className="date">{props.date}</span>
                </div>
                <div className="text">{props.text}</div>
            </div>
        </div>
    );
};

export default Comment;