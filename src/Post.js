import { Avatar } from '@material-ui/core';
import React from 'react';
import InputOption from './InputOption';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import './Post.css';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

function Post({ name, description, message, photoUrl }) {
    return (
        <div className="post">
            <div clssName="post__header">
                <Avatar />
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className="post__body">
                <p>{message}</p>
                {/* <img src={photoUrl} alt="" /> */}
            </div>
            <div className="post__buttons">
                <InputOption 
                Icon={ThumbUpAltOutlinedIcon} 
                title="Like" 
                color="gray"
                 />
                 <InputOption 
                Icon={ChatOutlinedIcon} 
                title="Comment" 
                color="gray"
                 />

                <InputOption 
                Icon={ShareOutlinedIcon} 
                title="Share" 
                color="gray"
                 />
                 <InputOption 
                Icon={SendOutlinedIcon} 
                title="Send" 
                color="gray"
                 />


            </div>
        </div>
    )
}

export default Post;
