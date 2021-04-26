import Link from 'next/link';

const eventItem = ({ item }) => {
    const readableDate = new Date(item.date).toLocaleString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const formattedAddress = item.date.replace(', ', '\n');
    return (
        <li>
            <img src={'/' + item.image} alt='' />
            <div>
                <div>
                    <h2>{item.title}</h2>
                    <div>
                        <time>{readableDate}</time>
                    </div>
                    <div className=''>
                        <address>{formattedAddress}</address>
                    </div>
                </div>

                <div className=''>
                    <Link href={`/events/${item.id}`}>Explore more</Link>
                </div>
            </div>
        </li>
    );
};

export default eventItem;
