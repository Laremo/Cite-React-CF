import { useState, useRef, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import EventsContainer from '../../components/Events/components/eventsContainer/EventsContainer';
import SignupForm from '../../components/SignupForm';
import useEventsData from '../../Hooks/useEventsData';

const Home = () => {
  const [searchValue, setSearchValue] = useState('');
  const containerRef = useRef();
  const { events, isLoading, error, fetchEvents, page } = useEventsData();

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleNavbarSearch = (term) => {
    containerRef.current.setSearch('');
    setSearchValue(term.toLowerCase());
    fetchEvents(`&keyword=${term}`);
  };

  const handlePageClick = ({ selected }) => {
    fetchEvents(`&keyword=${searchValue}&page=${selected}`);
  };

  return (
    <>
      <Navbar
        onSearch={handleNavbarSearch}
        ref={containerRef}
      />
      <EventsContainer
        searchValue={searchValue}
        events={events}
        renderParams={{ isLoading, error, page }}
        onPageClick={handlePageClick}
      />
      <SignupForm></SignupForm>
    </>
  );
};

export default Home;
