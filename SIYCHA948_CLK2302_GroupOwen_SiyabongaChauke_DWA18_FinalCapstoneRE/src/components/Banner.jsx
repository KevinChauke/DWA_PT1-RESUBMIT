import React from "react";
import { Link } from "react-router-dom";

// The Banner 

const Banner = () => {
    const date = new Date();
    const hours = date.getHours();
    const [timeOfDay, setTimeOfDay] = React.useState("");   
    /*useState is React Hook that allows you to add state to a functional component. 
    It returns an array with two values: the current state and a function to update it
*/

// Arrow function for the time of to display during the time a user accesses the website
    React.useEffect(() => {
        if (hours > 4 && hours < 12) {
            setTimeOfDay("morning");
        } else if (hours >= 12 && hours < 18) {
            setTimeOfDay("afternoon");
        } else {
            setTimeOfDay("evening");
        }
    },
    
);

    //  This will be displayed during the time a user accesses the website
    return (
        <section className="banner">
            <small className="greeting">Good {timeOfDay},</small>
            <div className="account--user">
                <h2 className="user">Welcome To Podcast</h2>

                
            </div>

            
            <small className="notify">
                Sign up to access your favorite shows.
            </small>
        </section>
    );
};

export default Banner;
