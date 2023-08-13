import { useState } from 'react';

import EventItem from './components/eventItem/EventItem';
import eventsJSON from '../../data/events.json';

const Events = ({ searchValue }) => {
  const [data] = useState(eventsJSON);
  const { events } = data._embedded;

  const handleEventItemClick = (id) => {
    console.log('evento clickeado', id);
  };

  const renderEvents = () => {
    let filteredEvents = events;
    if (searchValue.length > 0) {
      filteredEvents = events.filter((eventItem) =>
        eventItem.name.includes(searchValue)
      );
    }

    return filteredEvents.length > 0 ? (
      filteredEvents.map((eventItem) => (
        <EventItem
          key={`event-item-${eventItem.id}`}
          id={eventItem.id}
          name={eventItem.name}
          info={eventItem.info}
          image={eventItem.images[0].url}
          onClickEvent={handleEventItemClick}
        />
      ))
    ) : (
      <p>Oops!, no encontramos ningún evento que conicida con tu búsqueda</p>
    );
  };

  return (
    <>
      <p>EVENT LIST</p>
      {renderEvents()}
    </>
  );
};

export default Events;
