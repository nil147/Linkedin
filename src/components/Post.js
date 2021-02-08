import { Avatar } from "@material-ui/core";
import React, { forwardRef } from "react";
import "../styles/Post.css";
import InputOption from "./InputOption";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post-header">
        <Avatar src={photoUrl} >
          {name[0].toUpperCase()}
        </Avatar>
        <div className="post-info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post-body">
        <p>{message}</p>
      </div>
      <div className="post-buttons">
        <InputOption color="gray" title="Like" Icon={ThumbUpAltOutlinedIcon} />
        <InputOption color="gray" title="Comment" Icon={ChatOutlinedIcon} />
        <InputOption color="gray" title="Share" Icon={ShareOutlinedIcon} />
        <InputOption color="gray" title="Send" Icon={SendOutlinedIcon} />
      </div>
    </div>
  );
})

export default Post;
