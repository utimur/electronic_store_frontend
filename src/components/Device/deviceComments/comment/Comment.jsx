import React, {useState} from "react";
import "./comment.css";
import logo from '../../../../assets/img/notebook.jpg'
import purpleStar from '../../../../assets/img/star.png'
import grayStar from '../../../../assets/img/gray-star.png'
import like from '../../../../assets/img/like.png'
import activeLike from '../../../../assets/img/active-like.png'
import dislike from '../../../../assets/img/dislike.png';
import {useDispatch, useSelector} from "react-redux";
import {setLike} from "../../../../actions/device";

const Comment = (props) => {

    const comment = props.comment
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.userReducer.currentUser)
    const isAuth = useSelector(state => state.userReducer.isAuth)
    const [likes, setLikes] = useState(comment.likeCount)
    const [isLiked, setIsLiked] = useState(comment.isLiked)

    const stars = []
    for (let i = 1; i <= 5; i++) {
        stars.push(i)
    }

    function likeClick() {
        setLike(currentUser.id, comment.id, setLikes, setIsLiked)
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
                    <img onClick={isAuth ? ()=>likeClick() : ()=>window.scrollTo(0, document.body.scrollHeight)} src={isLiked ? activeLike : like } alt=""/>
                    <span>{likes}</span>
                </div>
            </div>
        </div>
    )
}

export default Comment;