import React from "react";
import BrandName from "./BrandName.jsx";
import SearchBar from "./SearchBar.jsx";

const Header = ({ openSearchHandler, searchBar }) => {
    const header = searchBar.isOpen ? (
        <SearchBar
            openSearchHandler={openSearchHandler}
            searchBar={searchBar}
        />
    ) : (
        <header className="header">
            <BrandName />
            <ion-icon name="search" onClick={openSearchHandler}></ion-icon>
        </header>
    );
    return <>{header}</>;
};

export default Header;
