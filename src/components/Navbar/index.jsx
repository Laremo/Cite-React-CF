import { useState, forwardRef, useImperativeHandle } from 'react';
import { Link } from 'react-router-dom';

const Navbar = forwardRef(({ onSearch }, ref) => {
  const [search, setSearch] = useState('');

  useImperativeHandle(ref, () => ({
    search,
    setSearch,
  }));

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleInputKeyDow = (e) => {
    if (e.key === 'Enter') onSearch(search);
  };
  return (
    <div
      ref={ref}
      style={{
        marginBottom: 14,
        width: '100%',
        display: 'flex',
      }}>
      <div style={{ flex: 1, display: 'flex' }}>
        <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Mi boletera</p>
      </div>
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        <input
          placeholder='Busca un evento'
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDow}
          value={search}
          style={{
            fontSize: '14px',
            padding: '6px 12px',
            borderRadius: '8px',
            border: 'None',
            width: '200px',
          }}
        />
        <Link
          to='/profile/my-info'
          style={{ margin: '24px', color: '#fff', textDecoration: 'none' }}>
          Mi perfil
        </Link>
      </div>
    </div>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;
