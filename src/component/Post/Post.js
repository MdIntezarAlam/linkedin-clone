import { Avatar } from "@material-ui/core";
import React from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import "../../css/post.css";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import ShareIcon from "@material-ui/icons/Share";
import SendIcon from "@material-ui/icons/Send";

const Post = ({ name, description, message, photoURL }) => {
  return (
    <div className="post">
      <div className="post_header">
        <div className="post__header_left">
          <Avatar src={photoURL} />
          <div className="post_profile_details">
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
        </div>
        <MoreVertIcon />
      </div>
      {/* post body */}
      <div className="post__body">
        <p>{message}</p>
      </div>

      {/* post footer */}
      <div className="post_footer">
        <div className="post__footer__option">
          <ThumbUpAltIcon />
          <span>Like</span>
        </div>
        <div className="post__footer__option">
          <InsertCommentIcon />
          <span>Comment</span>
        </div>
        <div className="post__footer__option">
          <ShareIcon />
          <span>Share</span>
        </div>
        <div className="post__footer__option">
          <SendIcon />
          <span>Send</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
