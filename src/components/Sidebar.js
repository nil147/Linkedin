import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import "../styles/Sidebar.css";

function Sidebar() {
  const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar-recentItem">
            <span className="sidebar-hash">#</span>
            <p>{topic}</p>
        </div>
    )



  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <img
          src="https://www.freecodecamp.org/news/content/images/2020/04/w-qjCHPZbeXCQ-unsplash.jpg"
          alt=""
        />
        <Avatar src={user.photoUrl} className="sidebar-avatar" >
          {user.email[0].toUpperCase()}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar-stats">
        <div className="sidebar-stat">
          <p>Who viewed you</p>
          <p className="sidebar-statNumber">2,521</p>
        </div>
        <div className="sidebar-stat">
          <p>Views on post</p>
          <p className="sidebar-statNumber">2,053</p>
        </div>
      </div>
      <div className="sidebar-bottom">
          <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('programming')}
            {recentItem('design')}
            {recentItem('develover')}
      </div>
    </div>
  );
}

export default Sidebar;
