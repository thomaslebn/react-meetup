import {useContext} from "react";

import MeetupList from "../components/meetups/MeetupList";

import FavoritesContext from "../store/favorites-context";

const FavoritesPage = () => {
    const favoriteCtx = useContext(FavoritesContext);

    let content;
    if (favoriteCtx.favorites.length === 0) {
        content = <p> You got no favorites yet. Start adding some? </p>
    } else {
        content = <MeetupList data={favoriteCtx.favorites}/>
    }

    return (
        <section>
            <h1> My Favorites </h1>
            {content}
        </section>
    )
}

export default FavoritesPage;
