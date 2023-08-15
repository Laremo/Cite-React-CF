import { useNavigate } from 'react-router-dom';
import EventItem from './components/eventItem/EventItem';

const Events = ({ searchValue, events }) => {
  const navigate = useNavigate();

  const handleEventItemClick = (id) => {
    navigate(`/detail/${id}`);
  };

  const renderEvents = () => {
    let filteredEvents = events;

    if (searchValue.length > 0) {
      filteredEvents = events.filter((eventItem) =>
        eventItem.name.toLowerCase().includes(searchValue)
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
      <div>Oops! no encontramos eventos relacionados con tu búsqueda</div>
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
