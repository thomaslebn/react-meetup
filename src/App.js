import {Route, Switch} from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
    return (
        <div>
            <Layout>
                <Switch>
                    <Route path='/' component={AllMeetupsPage} exact/>
                    <Route path='/new-meetup' component={NewMeetupPage} exact/>
                    <Route path='/favorites' component={FavoritesPage} exact/>
                </Switch>
            </Layout>
        </div>
    );
}

export default App;
