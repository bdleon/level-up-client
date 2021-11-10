import React, { useEffect, useState } from "react"
import { getEvents } from "./EventManager";


export const EventList = () => {

    const [events, setEvents] = useState([])

    useEffect(() => {
        getEvents().then(eventsData => setEvents(eventsData))
    }, [])


    return (
        <article className="events">
            <h2>Current Events</h2>
            {
                events.map(event => {
                    return <section key={`event--${event.id}`} className="event">
                        <p>Event Description: {event.description}</p>
                        <p>Event Date: {event.date}</p>
                        <p>Event Time: {event.time}</p>
                    </section>
                })
            }
        </article>
    )

}