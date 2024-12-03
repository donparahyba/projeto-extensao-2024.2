import React, { useState } from 'react';

function EventCreate() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');

  const handleCreateEvent = () => {
    const events = JSON.parse(localStorage.getItem('events')) || [];
    const newEvent = { name, date, location };
    events.push(newEvent);
    localStorage.setItem('events', JSON.stringify(events));
    alert('Event created successfully!');
  };

  return (
    <div>
      <h2>Criar evento</h2>
      <input
        type="text"
        placeholder="Nome do Evento"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="text"
        placeholder="Localização"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={handleCreateEvent}>Criar Evento</button>
    </div>
  );
}

export default EventCreate;