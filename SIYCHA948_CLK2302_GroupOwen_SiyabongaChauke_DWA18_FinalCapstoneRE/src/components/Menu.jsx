import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
    const [showMore, setShowMore] = React.useState(false);

    function toggleMenu() {
        setShowMore((showMore) => !showMore);
    }

    return (
        <>
        
            <nav className={showMore ? "menu show" : "menu"}>
                <ul className={showMore ? "menu-nav show" : "menu-nav"}>
                    <li className="account">
                        <div className="account--user">
                            <h2 className="user">
                                <ion-icon name="person-circle-outline"></ion-icon>
                                Welcome
                            </h2>
                            <Link to="login">
                                <button className="li--btn">
                                    Login/Register
                                </button>
                            </Link>
                        </div>

                        <p>
                            Create an account by signing up.
                        </p>
                    </li>
                   
                    <li>
                        <Link to="/favorites" className="nav-item">
                            <ion-icon name="bookmark-outline"></ion-icon>
                            <h4>Favorites</h4>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Menu;
