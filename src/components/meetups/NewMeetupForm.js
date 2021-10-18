import {useRef} from "react";

import Card from "../UI/Card";

import styles from './NewMeetupForm.module.css';

const NewMeetupForm = (props) => {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        }

        props.onAddMeetup(meetupData);
    }

    return (
        <Card>
            <form className={styles.form} onSubmit={submitHandler}>
                <div className={styles.control}>
                    <label htmlFor="title"> Meetup Title </label>
                    <input type="text" id='title' required ref={titleInputRef}/>
                </div>
                <div className={styles.control}>
                    <label htmlFor="image"> Meetup Image </label>
                    <input type="url" id='image' required ref={imageInputRef}/>
                </div>
                <div className={styles.control}>
                    <label htmlFor="address"> Meetup Address </label>
                    <input type="text" id='address' required ref={addressInputRef}/>
                </div>
                <div className={styles.control}>
                    <label htmlFor="description"> Meetup Description </label>
                    <textarea id='description' rows='5' required ref={descriptionInputRef}/>
                </div>
                <div className={styles.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    )
}

export default NewMeetupForm;
