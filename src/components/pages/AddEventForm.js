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

  useEffect (() => {
    fetch (`http://localhost:8088/danceStyle`)
    .then((response) => response.json())
    .then((danceStyleArray) => {
      setDanceStyle(danceStyleArray);
    });
  }, []);

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
      <h3 className="eventForm__title">Add Event</h3>
      <div className="formContainer">
        
        <fieldset>
          <div className="form-group">
            <label>Dance Style:</label>
            <select 
              className="danceStyle-selector"
              defaultValue={event.danceStyle[0]}
              onChange={(e) => setDanceStyle(e.target.value)}
              > 
              <option value=""> Select Dance Style</option>
            {danceStyle.map((type) => {
              return (
                <option key={type.id} value={type.id}>
                  {type.danceStyle}
                </option>
            )}
            )}
             </select>
          </div>
        </fieldset>

        <fieldset>
          <div className="form-group">
            <label htmlFor="eventName">Event Name:</label>
            <input
              required
              autoFocus
              type="text"
              className="form-control"
              placeholder="Enter Event Name Here"
              value={event.description}
              onChange={(evt) => {
                const copy = { ...event };
                copy.eventName = evt.target.value;
                setEvent(copy);
              }}
            />
          </div>
        </fieldset>

        <fieldset>
          <div className="form-group">
            <label htmlFor="event-date">Event Date:</label>
            <input
              required
              autoFocus
              type="date"
              className="form-control"
              value={event.date}
              onChange={(evt) => {
                const copy = { ...event };
                copy.eventDate = evt.target.value;
                setEvent(copy);
              }}
            />
          </div>
        </fieldset>

        <fieldset>
          <div className="form-group">
            <label htmlFor="event-start-time">Start Time:</label>
            <input
              required
              autoFocus
              type="time"
              className="form-control"
              value={event.eventStartTime}
              onChange={(evt) => {
                const copy = { ...event };
                copy.eventStartTime = evt.target.value;
                setEvent(copy);
              }}
            />
          </div>
        </fieldset>

        <fieldset>
          <div className="form-group">
            <label htmlFor="event-end-time">End Time:</label>
            <input
              required
              autoFocus
              type="time"
              className="form-control"
              value={event.eventEndTime}
              onChange={(evt) => {
                const copy = { ...event };
                copy.eventEndTime = evt.target.value;
                setEvent(copy);
              }}
            />
          </div>
        </fieldset>

        <fieldset>
          <div className="form-group">
            <label htmlFor="event-location">Location:</label>
            <input
              required
              autoFocus
              type="text"
              className="form-control"
              placeholder="Enter Address Here"
              value={event.eventLocation}
              onChange={(evt) => {
                const copy = { ...event };
                copy.eventLocation = evt.target.value;
                setEvent(copy);
              }}
            />
          </div>
        </fieldset>

        <fieldset>
          <div className="form-group">
            <label htmlFor="event-price">Price:</label>
            <input
              required
              autoFocus
              type="text" 
              className="form-control"
              value={event.eventPrice}
              onChange={(evt) => {
                const copy = { ...event };
                copy.eventPrice = evt.target.value;
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
