import React from 'react';
import './Sidebar.css';
import { Avatar } from '@material-ui/core';

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img 
                src="https://source.unsplash.com/collection/190727/500x200" 
                alt=""  

                />
                <Avatar className="sidebar__avatar" />
                <h2>Sahil</h2>
                <h4>ramugoswami027@gmail.com</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>who views you</p>
                    <p className="sidebar__statNumber">2,578</p>
                </div>

                <div className="sidebar__stat">
                    <p>views and Post</p>
                    <p className="sidebar__statNumber">2,689</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('react js')}
                {recentItem(' js')}
                {recentItem('java')}
                {recentItem('Firebase')}
                {recentItem('Vue Js')}
            </div>
        </div>
    );
}

export default Sidebar;
 