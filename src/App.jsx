import { useState } from 'react';
import Navbar from './components/Navbar/';
import Events from './components/Events';
import SignupForm from './components/SignupForm';
import './App.css';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [firstInput, setFirstInput] = useState(false);
  const handleNavbarSearch = (value) => {
    setSearchValue(value);
  };

  return (
    <>
      {/* <Navbar onSearch={handleNavbarSearch} />
      <Events searchValue={searchValue} /> */}
      <SignupForm></SignupForm>
    </>
  );
}

export default App;
