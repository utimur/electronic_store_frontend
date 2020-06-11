import React from "react";
import "./comment.css";
import logo from '../../../../assets/img/notebook.jpg'
import purpleStar from '../../../../assets/img/star.png'
import grayStar from '../../../../assets/img/gray-star.png'
import like from '../../../../assets/img/like.png'
import dislike from '../../../../assets/img/dislike.png';

const Comment = (props) => {

    const comment = props.comment

    const stars = []
    for (let i = 1; i <= 5; i++) {
        stars.push(i)
    }


    return (
        <div className="comment">
            <img className="comment-avatar" src={`data:image/jpeg;base64,${comment.user.avatar}`} alt=""/>
            <div className="comment-flex">
                <div className="comment-flex-top">
                    <div className="comment-flex-top-name">{comment.user.username}</div>
                    <div className="comment-flex-top-date">{comment.created}</div>
                </div>
                <div className="comment-flex-stars">
                    {stars.map(star => {
                        { return star <= comment.rating ?
                            <img src={purpleStar} alt=""/>
                              :
                            <img src={grayStar} alt=""/>}
                    })}
                </div>
                <div className="comment-flex-text">{comment.text}</div>
                <div className="comment-flex-likes">
                    <img src={like} alt=""/>
                    <span>{comment.likeCount}</span>
                    <img src={dislike} alt=""/>
                    <span>{comment.dislikeCount}</span>
                </div>
            </div>
        </div>
    )
}

export default Comment;