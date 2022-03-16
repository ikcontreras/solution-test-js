export default class Event{
    static load(events, types) {
        return () => {
            events.map(e=> {
                const isIt = types.filter( x => x === e.type)
                if (isIt.length !== 0 ) {
                    (function (e) {
                        setTimeout(() => {
                            console.log(`At second ${e.second}: {type: ${e.type}, message: ${e.message}`)
                        }, e.second * 1000)
                    })(e)
                }
            })
        }
    }
};