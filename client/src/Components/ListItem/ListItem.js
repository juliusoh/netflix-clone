import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbsUpDownOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import React, { useState } from "react";
import "./ListItem.scss";

const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = "";
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="data:image/jpeg;base64,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"
        alt=""
      />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop></video>
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon"/>
              <Add className="icon"/>
              <ThumbUpAltOutlined className="icon"/>
              <ThumbDownAltOutlined className="icon"/>
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 minutes</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
