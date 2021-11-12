import React, { useEffect, useState } from "react"
import { getEvents, joinEvent } from "./EventManager";
import { useHistory } from "react-router-dom";


export const EventList = () => {

    const [events, setEvents] = useState([])
    const history = useHistory()
    

    const eventFetcher = () => {
        getEvents().then(data => setEvents(data))
    }

    useEffect(() => {
        eventFetcher()
    }, [])

    return (
        <article className="events">
            <header className="events__header">
                <h1>Level Up Game Events</h1>
                <button className="btn btn-2 btn-sep icon-create"
                    onClick={() => {
                        history.push({ pathname: "/events/new" })
                    }}
                >Schedule New Event</button>
            </header>
            {
                events.map(event => {
                    return <section key={`event--${event.id}`} className="event">
                    
                        <div className="registration__game">{event.game.title}</div>
                        <p>Event Description: {event.description}</p>
                        <div>
                            {event.date} @ {event.time}
                        </div>
                        <button className="btn btn-2"
                            onClick={
                                () => {
                                    joinEvent(event.id)
                                        .then(eventFetcher)
                                }
                            }
                        >Join</button>
                    </section>
                })
            }
        </article>
    )

}