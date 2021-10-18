import {useHistory} from "react-router-dom";

import NewMeetupForm from '../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {
    const history = useHistory();

    const onAddMeetupHandler = (data) => {
        fetch('https://react-meetup-38427-default-rtdb.europe-west1.firebasedatabase.app/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json'
                }
            }
        ).then(() => {
            history.replace('/');
        })
    }

    return <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={onAddMeetupHandler}/>
    </section>
}

export default NewMeetupPage;

