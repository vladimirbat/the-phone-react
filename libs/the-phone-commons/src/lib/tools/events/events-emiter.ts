import { EventsRegistry } from "./events-registry";

export class EventEmitter {
  protected static singletonEmitters: {[key:string]: EventEmitter} = {}
  windowInstance: Window = window;
  constructor(private name: EventsRegistry) {}
  emitEvent<T>(data: T, cancelledCallBack?: ()=> void) {
    const options: CustomEventInit<T> = {
      detail: data,
      bubbles: false,
      cancelable: true,
    };
    const event = new CustomEvent(this.name, options);
    const cancelled = this.windowInstance.dispatchEvent(event);
    if(cancelledCallBack && cancelled){
      cancelledCallBack();
    }
  }
  
  public static eventEmmiterFactory(name:EventsRegistry): EventEmitter {
    EventEmitter.singletonEmitters[name] = EventEmitter.singletonEmitters[name] ?? new EventEmitter(name);
    return EventEmitter.singletonEmitters[name];
  }
}

