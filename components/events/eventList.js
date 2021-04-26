import EventItem from './eventItem';

const eventList = ({ items }) => {
    return (
        <ul>
            {items.map((item) => (
                <EventItem key={item.id} item={item} />
            ))}
        </ul>
    );
};

export default eventList;
