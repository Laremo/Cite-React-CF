import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LIKED_ENVETS_STORAGE_KEY } from '../../../../utils/constants';
import EventItem from '../../../../components/Events/components/eventItem/EventItem';

const getLikedEvents = () => {
  return JSON.parse(localStorage.getItem(LIKED_ENVETS_STORAGE_KEY)) || [];
};

export default function LikedEvents() {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        setIsLoading(true);
        const likedEvents = getLikedEvents();
        const events = [];

        for (const eventId of likedEvents) {
          const response = await fetch(
            `${import.meta.env.VITE_BASE_URL}/${eventId}?apikey=${
              import.meta.env.VITE_TM_API_KEY
            }`
          );
          const data = await response.json();
          events.push(data);
        }
        setEvents(events);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEventDetails();
  }, []);

  const handleEventItemClick = (eventId) => {
    navigate(`/detail/${eventId}`);
  };

  console.log(events);

  if (Object.keys(error) > 0) return <div>Ha ocurrido un error!</div>;

  if (isLoading) return <div>Cargando eventos...</div>;

  return (
    <div>
      {events.map((event) => {
        return (
          <EventItem
            key={`event-item-${event.id}`}
            id={event.id}
            name={event.name}
            info={event.info}
            image={event.images[0].url}
            onClickEvent={handleEventItemClick}
          />
        );
      })}
    </div>
  );
}
