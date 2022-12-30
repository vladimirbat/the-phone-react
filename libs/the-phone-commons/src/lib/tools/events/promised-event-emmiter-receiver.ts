import { EventEmitter } from "./events-emiter";
import { EventReceiver } from "./events-receiver";
import { EventsRegistry } from "./events-registry";

export function emmitAndWaitForResponse<T,R>(requestEventName: EventsRegistry, responseEventName: EventsRegistry, requestData:T): Promise<R> {
    return new Promise<R>((resolve,reject)=>{
        const eventReceiver = EventReceiver.eventReceiverFactory<R>(responseEventName)
        const hash = eventReceiver.subscribe((data)=> {
            data ? resolve(data) : reject('Empty');
            eventReceiver.unsubscribe(hash);
        });
        EventEmitter.eventEmmiterFactory(requestEventName).emitEvent(requestData);
    });
}

