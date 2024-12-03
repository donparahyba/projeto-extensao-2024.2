import React from 'react';

function EventCalendar() {
  const events = JSON.parse(localStorage.getItem('events')) || [];

  return (
    <div>
      <h2>Seu calendário</h2>
      {events.map((event, index) => (
        <div key={index} className="event-card">
          <h3>{event.name}</h3>
          <p>{event.date} - {event.location}</p>
        </div>
      ))}
    </div>
  );
}

export default EventCalendar;
