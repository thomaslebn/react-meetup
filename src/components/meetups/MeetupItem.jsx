import {useContext} from "react";

import Card from "../UI/Card";

import styles from './MeetupItem.module.css';

import FavoritesContext from "../../store/favorites-context";

const MeetupItem = ({data}) => {
    const favoriteCtx = useContext(FavoritesContext);

    const itemIsFavorite = favoriteCtx.itemIsFavorite(data.id);

    const toggleFavoriteStatusHandler = () => {
        if (itemIsFavorite) {
            favoriteCtx.removeFavorite(data.id)
        } else {
            favoriteCtx.addFavorite({
                id: data.id,
                title: data.title,
                description: data.description,
                image: data.image,
                address: data.address
            })
        }
    }

    return (
        <li className={styles.item}>
            <Card>
                <div className={styles.image}>
                    <img src={data.image} alt={data.title}/>
                </div>
                <div className={styles.content}>
                    <h3>{data.title}</h3>
                    <address>{data.address}</address>
                    <p>{data.description}</p>
                </div>
                <div className={styles.actions}>
                    <button
                        onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove From Favorites' : 'Add To Favorites'}</button>
                </div>
            </Card>
        </li>
    )
}

export default MeetupItem;
