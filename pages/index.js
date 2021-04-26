import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/eventList';

export default function HomePage() {
    const featuredEvents = getFeaturedEvents();
    return (
        <div className={styles.container}>
            <h1>Next Js</h1>
            <EventList items={featuredEvents} />
        </div>
    );
}
