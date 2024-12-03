import React, { useState } from 'react';

function EventSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [events] = useState(JSON.parse(localStorage.getItem('events')) || []);

  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2>Procurar eventos</h2>
      <input
        type="text"
        placeholder="Procurar por nome"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div>
        {filteredEvents.map((event, index) => (
          <div key={index} className="event-card">
            <h3>{event.name}</h3>
            <p>{event.date} - {event.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventSearch;
