export default class EventManager{
    constructor(execEvents) {
        this.execEvents = execEvents
    }
    run() {
        this.execEvents()
        console.log("RUNNING");
    }
};