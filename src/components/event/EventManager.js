
export const getEvents = () => {
    return fetch("http://localhost:8000/events", {
        headers: {
            "Authorization": ` Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(res => res.json())
}


export const createEvent = (event)=>{
    return fetch("http://localhost:8000/events",{
        method:"POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "Content-Type": "application/json"

        },
        body: JSON.stringify(event)
    })
    
}