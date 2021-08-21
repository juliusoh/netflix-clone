import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import React from "react";
import "./Featured.scss";

const Featured = ({type}) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "TV Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"></img>
      <div className="info">
        <img src="https://occ-0-37-3997.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABep0NjoVU9WhGEoaHUM4_eSWSKYIe875G1ryVR7pxjtPyaK4zzIJken8NLLogOQ_QRok9T11TRfUwqcHOzMIrERLKZj__ibqqzM.webp?r=432" alt="" />
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita iure
          fugiat quidem quam quod ea dolores eligendi sint, dolor voluptate!
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow></PlayArrow>
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
