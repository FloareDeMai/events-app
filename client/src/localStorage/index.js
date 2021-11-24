const addEventToLocalStorage = (event, showToastSuccess) => {
    let existingEvents = JSON.parse(localStorage.getItem("data"));
    if (existingEvents === null) existingEvents = [];
    localStorage.setItem("event", JSON.stringify(event))
    existingEvents.push(event)
    localStorage.setItem("data", JSON.stringify(existingEvents));
    showToastSuccess("Event added successfuly!")
}

const getEventsFromLocalStorage = () => {
    let events = JSON.parse(localStorage.getItem("data"));
    if (events === null) events = [];
    return events;
}

const removeAllEventsFromLocalStorage = () => {
    return localStorage.removeItem("data");
}

const LocalStorageService = {
    addEventToLocalStorage,
    getEventsFromLocalStorage,
    removeAllEventsFromLocalStorage
}

export default LocalStorageService;