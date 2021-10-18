import MeetupItem from "./MeetupItem";

import styles from './meetupList.module.css';

const MeetupList = ({data}) => {
    return (
        <ul className={styles.list}>
            {data.map((meetup) => {
                return <MeetupItem key={meetup.id} data={meetup}/>
            })}
        </ul>
    )
}

export default MeetupList;
