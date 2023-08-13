import { useState, useRef } from 'react';
import Navbar from '../../components/Navbar';
import Events from '../../components/Events';
import SignupForm from '../../components/SignupForm';

const Home = () => {
  const [searchValue, setSearchValue] = useState('');
  const containerRef = useRef();
  const handleNavbarSearch = (value) => {
    console.log(containerRef.current);
    containerRef.current.setSearch('');
    setSearchValue(value);
  };

  return (
    <>
      <Navbar
        onSearch={handleNavbarSearch}
        ref={containerRef}
      />
      <Events searchValue={searchValue} />
      <SignupForm></SignupForm>
    </>
  );
};

export default Home;
