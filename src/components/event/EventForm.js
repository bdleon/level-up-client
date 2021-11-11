import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { getGames } from "../game/GameManager"
import { createEvent } from "./EventManager"


export const EventForm = () => {
    const history = useHistory()
    const [games, setGame] = useState([])
    const [currentEvent, setEvent] = useState({})

    useEffect(() => {
        getGames().then(data => setGame(data))
    },[])

    const changeEventState = (domEvent) => {
        // TODO: Complete the onChange function
        const copyCurrentEvent = { ...currentEvent }
        copyCurrentEvent[domEvent.target.name] = domEvent.target.value
        setEvent(copyCurrentEvent)
    }

    return (
        <form className="gameForm">
            <h2 className="gameForm__title">Schedule New Event</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="gameId">Game: </label>
                    <select name="gameId" className="form-control"
                        value={currentEvent.gameId}
                        onChange={changeEventState}>
                        <option value="0">Select a game...</option>
                        {
                            games.map(game => (
                                <option value={game.id}>{game.title}</option>
                            ))
                        }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description: </label>
                    <input value={currentEvent.description} type="text" onChange={changeEventState} name="description"></input>

                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="time">Time: </label>
                    <input value={currentEvent.time} type="time" onChange={changeEventState} name="time"></input>

                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Date: </label>
                    <input value={currentEvent.date} type="date" onChange={changeEventState} name="date"></input>

                </div>
            </fieldset>

            {/* TODO: Create the rest of the input fields */}

            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()

                    // TODO: Call the createEvent function and pass it the event object
                    createEvent(currentEvent).then(()=> history.push("/events"))

                    // TODO: Once event is created, redirect user to event list
                }}
                className="btn btn-primary">Create Event</button>
        </form>
    )
}


