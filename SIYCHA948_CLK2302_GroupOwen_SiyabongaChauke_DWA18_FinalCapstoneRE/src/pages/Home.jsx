import React from "react";
import Banner from "../components/Banner.jsx";
import PreviewDisplay from "../components/PreviewDisplay.jsx";


function Home() {
    return (
        <div>
            <Banner />
            <PreviewDisplay
                key="2"
                size="small"
                title="Just for you..."
            />
            <PreviewDisplay key="3" title="Browse" />
        </div>
    );
}

export default Home;
