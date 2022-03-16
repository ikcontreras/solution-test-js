import EventManager from './EventManager';
import Event from './Event';

export default class EventManagerFactory{
    static create(events, types) {
        const execEvents = Event.load(events, types)
        return new EventManager(execEvents)
    }
};