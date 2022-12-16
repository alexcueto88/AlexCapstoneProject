import React, { useState, useEffect } from "react";
// import { EventCard } from "./EventCard";
import "./UpcomingEvents.css";

export const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  
  useEffect (() => {
    fetch (`http://localhost:8088/events`)
    .then((response) => response.json())
    .then((eventArray) => {
      setEvents(eventArray);
    });
  }, []);
 
  return (
    <>
      <div className="background">
        <h2 className="UpcomingEvents">Upcoming Events Page</h2>

        <p className="upcoming-events-paragraph">
          This is text page for Upcoming Events.
          </p>
          <div className="cardContainer">
          {events.map((event) => {
            return (
              <div class="container" key={`event--${event.id}`}>
                <div className="header"> 
                <h2>{event.eventName}</h2>
                </div>
                <div className="body">
                  <div className="">{event.eventDate}</div>
                  <div className="">{event.eventStartTime}</div>
                  <div className="">{event.eventEndTime}</div>
                  <div className="">{event.eventLocation}</div>
                  <div className="">{event.eventPrice}</div>
                </div>
     
              </div>
            )
          })
          }
          </div>
 
      </div>
    </>
  );
};
