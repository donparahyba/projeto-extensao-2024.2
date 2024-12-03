import React, { useState } from 'react';
import Auth from './componentes/Auth';
import EventSearch from './componentes/EventSearch';
import EventCreate from './componentes/EventCreate';
import EventCalendar from './componentes/EventCalendar';
import './styles.css';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  return (
    <div>
      <header>
        <img src="/Futso7.png" alt="logo da futso7" class="imagis" />
      </header>
      <div className="container">
        {!user ? (
          <Auth onLogin={handleLogin} />
        ) : (
          <>
            <h2>Bem-vindo!</h2>
            <EventSearch />
            <EventCreate />
            <EventCalendar />
          </>
        )}
      </div>
    </div>
  );
}

export default App;