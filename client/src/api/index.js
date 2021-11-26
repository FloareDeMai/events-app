import axios from 'axios';

const API = axios.create({baseURL: 'http://localhost:5006/api'});

API.interceptors.request.use((req) => {
    if (localStorage.getItem('user')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('user')).token}`;
    }

    return req;
});

export const fetchEvents = () => axios.get("/events");
export const createEvent = (newPost) => axios.post("/events", newPost);
export const deleteEvent = (eventId) => axios.delete(`/events/${eventId}`)

export const login = (formData) => API.post('/users/login', formData);
export const register = (formData) => API.post('/users/signup', formData);