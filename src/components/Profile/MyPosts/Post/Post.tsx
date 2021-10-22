import React from 'react';
import p from './Posts.module.css'

type PostTypes={
    postText:string
    like:number
    dislike:number
}

const Post = (props:PostTypes) => {
    return (
        <div className={p.post}>
            <img src="https://i0.wp.com/jasonstatham.org/wp-content/uploads/2021/08/1.jpg?resize=800%2C400&ssl=1" alt=""/>
            <p>{props.postText}</p>
            <div className={p.reaction}>
                <span><i className="far fa-thumbs-up"></i> {props.like}</span>
                <span><i className="far fa-thumbs-down"></i> {props.dislike}</span>
            </div>
        </div>
    );
};

export default Post;