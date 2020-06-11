import React from "react";
import "./deviceComments.css";
import Rating from "./rating/rating";
import Comment from "./comment/Comment";
import CommentCreator from "./commentCreator/CommentCreator";
import {useSelector} from "react-redux";

const DeviceComments = (props) => {

    const comments = useSelector(state => state.deviceReducer.currentDevice.comments);

    return (
        <div className="comments">
            <Rating/>
            <div className="header">Отзывы</div>
            {comments.map(comment =>
                <Comment comment={comment}/>
            )}
            <CommentCreator history={props.history}/>
        </div>
    )
}

export default DeviceComments;