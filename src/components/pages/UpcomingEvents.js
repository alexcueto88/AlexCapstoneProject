import React, { useState, useEffect } from "react";
// import { EventCard } from "./EventCard";
import "./UpcomingEvents.css";
import { Link, useNavigate } from "react-router-dom";

export const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  const localProjectUser = localStorage.getItem("capstone_user");
  const projectUserObject = localProjectUser ? JSON.parse(localProjectUser) : {staff:null}; 
  const navigate = useNavigate()
  
  useEffect (() => {
    fetch (`http://localhost:8088/events`)
    .then((response) => response.json())
    .then((eventArray) => {
      setEvents(eventArray);
      console.log(projectUserObject)
    });
  }, []);
 
  // const formattedDate = new Date(events.eventDate).toLocaleDateString(“en-US”, { year: “numeric”, month: “long”, day: “numeric” });

  const editButton = (eventId) => {
    return (
      <Link to={`/editEvent/${eventId}`}>
        <button className="editEvent">Edit Event</button>                                       
      </Link>
    );
};
const deleteButton = (eventId) => {
    return (
         <button 
         onClick={() => {
          const deleteEvent = async () => {
              const options = {
              method: "DELETE",
              };
              await fetch(`http://localhost:8088/events/${eventId}`, options);
              setEvents();
          };
          deleteEvent();
          window.location.reload(false)
          }}
        className="eventDeleteButton"
        >
        Delete Event
        </button>
    );
};

  return (
    <>
      <div className="background">
        <h2 className="UpcomingEvents">Upcoming Events Page</h2>

        <p className="upcoming-events-paragraph">
          This is text page for Upcoming Events.
          </p>

          {
                projectUserObject.staff

                    ? <>   
                        <Link to={`/addEvent`} className="addEvent">
                            <button className="addEventButton">Add New Event</button>
                        
                        </Link>

                    </>
                    : <>
                    </>
            }

          <div className="cardContainer">
          {events.map((event) => {
            return (
              <div className="container" key={`event--${event.id}`}>
                <div className="header"> 
                <h2>{event.eventName}</h2>
                </div>

                <div className="editButtons">
                  {projectUserObject.staff ? (
                  <>{editButton(event.id)}</>
                   ) : (
                  <></>
                  )}
                  {projectUserObject.staff ? (
                      <>{deleteButton(event.id)}</>
                      
                  ) : (
                  <></>
                  )}
                  </div>

                <div className="body">
                  <div className="EventName">Date: {event.eventDate}</div>
                  <div className="">Starts @ {event.eventStartTime}</div>
                  <div className="">Open until {event.eventEndTime}</div>
                  <div className="">{event.eventLocation}</div>
                  <div className="">Price: {event.eventPrice}</div>
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
