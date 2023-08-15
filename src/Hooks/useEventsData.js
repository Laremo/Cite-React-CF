import { useState } from 'react';
import eventsJSON from '../data/events.json';

const useEventsData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({});

  const fetchEvents = async (term) => {
    try {
      const events = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events.json?apikey=bmV250Hm1UOr4hsKaG91kf8SFF1lDfuT&countryCode=MX${
          term?.length ? term : ''
        }`
      );
      const data = await events.json();
      setData(data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    }
    // const data = eventsJSON;
    // setData(data);
    // setIsLoading(false);
  };

  return {
    events: data?._embedded?.events || [],
    isLoading,
    error,
    fetchEvents,
    page: data?.page || {}, //it migth be null at first, when it´s loading, so...)
  };
};

export default useEventsData;
