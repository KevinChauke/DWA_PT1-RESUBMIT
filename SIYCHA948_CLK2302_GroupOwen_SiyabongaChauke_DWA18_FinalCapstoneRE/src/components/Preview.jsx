import React from "react";
import { Link } from "react-router-dom";
import getdate from "../utilities/get.date.js";
import { GENRES } from "../utilities/genres.js";


/*
This is the preview that the user is going to see when browsing on the website. 
This is an arrow function that is going to fetch the data that will be displayed on each show on the browsing menu 
*/
const Preview = ({ data }) => {
    const date = new Date(data.updated);
    const updatedDate = getdate(date);
    const genre = data.genres.map((item) => GENRES[item - 1]); // Fetching the data from an array using ,map

    return (
        <Link to={`show/${data.id}`} state={data}>
            <div className="preview">
                <img src={data.image} className="preview--image" />
                <p className="preview--title">{data.title}</p>
                <div className="preview--details">
                    <p>Seasons: {data.seasons}</p>
                    <p>last updated: {updatedDate}</p>
                    <p>genres: {genre}</p>
                </div>
            </div>
        </Link>
    );
};

export default Preview;
