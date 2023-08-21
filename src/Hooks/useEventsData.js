import { useState } from 'react';
import eventsJSON from '../data/events.json';

//Hook para mantener los datos en un estado local (respecto al comp)

const useEventsData = () => {
  const fetchEvents = async (term) => {
    try {
      const events = await fetch(
        `${import.meta.env.VITE_BASE_URL}.json?apikey=${
          import.meta.env.VITE_TM_API_KEY
        }&countryCode=MX${term?.length ? term : ''}`
      );
      const data = await events.json();
      setData(data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    }
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
