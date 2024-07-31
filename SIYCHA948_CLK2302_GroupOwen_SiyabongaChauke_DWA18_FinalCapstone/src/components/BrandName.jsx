import React from "react";
import { Link } from "react-router-dom";

const BrandName = () => {
    return (
        <Link to="/">
            <h1 className="app-name">
                Audio<span>SORCERER</span>
            </h1>
        </Link>
    );
};

export default BrandName;
