import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./AddEventForm.css";

export const AddEvent = () => {
  const [event, setEvent] = useState({
    danceStyle: "",
    eventName: "",
    eventDate: "",
    eventStartTime: "",
    eventEndTime:"",
    eventLocation: "",
    eventPrice: "",
    eventImage: ""
           
  });

  const navigate = useNavigate();
  const [danceStyle, setDanceStyle] = useState ([])

  const localProjectUser = localStorage.getItem("capstone_user");
  const projectUserObject = JSON.parse(localProjectUser);

  const handleSaveButtonClick = (e) => {
    e.preventDefault();

    const eventToSendToAPI = {
        danceStyle: event.danceStyle,
        eventName: event.eventName,
        eventDate: event.eventDate,
        eventStartTime: event.eventStartTime,
        eventEndTime: event.eventEndTime,
        eventLocation: event.eventLocation,
        eventPrice: event.eventPrice,
        eventImage: event.eventImage
      
    };

    useEffect (() => {
      fetch (`http://localhost:8088/danceStyle`)
      .then((response) => response.json())
      .then((danceStyleArray) => {
        setDanceStyle(danceStyleArray);
      });
    }, []);

    return fetch(`http://localhost:8088/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventToSendToAPI),
    })
      .then((response) => response.json())
      .then(() => {
        navigate("/");
      });
  };

  return (
    <form className="eventForm">
      <h2 className="eventForm__title">Add Event</h2>
      <div className="formContainer">
        <fieldset>
          <div className="form-group">
            <label>Dance Style:</label>
            <select 
              className="danceStyle-selector"
              defaultValue={event.danceStyle}
              onChange={(e) => setTitle(e.target.value)}
            
            >




            </select>
              required
              autoFocus
              type="text"
              className="form-control"
              placeholder="Add event name"
              value={event.attractionName}
              onChange={(evt) => {
                const copy = { ...event };
                copy.attractionName = evt.target.value;
                setEvent(copy);
              }}
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <input
              required
              autoFocus
              type="text"
              className="form-control"
              placeholder="Brief description"
              value={event.description}
              onChange={(evt) => {
                const copy = { ...event };
                copy.description = evt.target.value;
                setEvent(copy);
              }}
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input
              required
              autoFocus
              type="date"
              className="form-control"
              value={event.date}
              onChange={(evt) => {
                const copy = { ...event };
                copy.date = evt.target.value;
                setEvent(copy);
              }}
            />
          </div>
        </fieldset>
        <div className="footer">
          <button
            onClick={(clickEvent) => {
              handleSaveButtonClick(clickEvent);
            }}
            className="addEvent"
          >
            Add Event
          </button>
        </div>
      </div>
    </form>
  );
};
