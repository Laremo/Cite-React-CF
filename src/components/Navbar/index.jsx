import { useState } from 'react';

export default function Navbar({ onSearch }) {
  const [search, setSearch] = useState('');

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleInputKeyDow = (e) => {
    if (e.key === 'Enter') onSearch(search);
  };

  return (
    <div>
      <p>Mi boletera</p>
      <input
        placeholder='Busca un evento'
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDow}
        value={search}
      />
    </div>
  );
}
