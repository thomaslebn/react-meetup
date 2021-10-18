import {useContext} from "react";

import {Link} from "react-router-dom";

import styles from './MainNavigation.module.css';
import FavoritesContext from "../../store/favorites-context";

const MainNavigation = () => {
    const favoriteCtx = useContext(FavoritesContext);

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                React Meetups
            </div>
            <nav>
                <ul>
                    <li><Link to='/'> All Meetups </Link></li>
                    <li><Link to='/new-meetup'> Add New Meetup </Link></li>
                    <li><Link to='/favorites'> My Favorites <span
                        className={styles.badge}>{favoriteCtx.totalFavorites}</span> </Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;
