import { EventsRegistry } from "./events-registry";

export class EventReceiver<T> {
  protected static singletonReceivers: {[key:string]: EventReceiver<unknown>} = {}
  private windowInstance: Window = window;
  private subscribedCallbacks:{[key:string]:EventHandler<T>} = {};
  private subscribed = false;

  private constructor(private name: EventsRegistry) {
    this.emmitToSubscribers = this.emmitToSubscribers.bind(this);
  }

  public subscribe(eventHandler: EventHandler<T>):string {
    const hash = Math.round(1e10 * Math.random()).toString();
    console.log('subscribe ', this.name, hash);
    this.subscribedCallbacks[hash] = eventHandler;
    this.subscribeToCustomEventIfNeeded();
    // this.logSubscribers();
    return hash;
  }
  
  private subscribeToCustomEventIfNeeded(){
    if(!this.subscribed){
      this.subscribed = true;
      this.windowInstance.addEventListener(this.name, (event: Event)=>{
        console.log('Window.addEventListener', this.name);
        const CustomEvent = event as CustomEvent<T>;
        this.emmitToSubscribers(CustomEvent.detail);
      })
    }
  }

  private emmitToSubscribers(data: T){
    for (const key in this.subscribedCallbacks) {
      const callback = this.subscribedCallbacks[key];
      callback(data);
    }
  }

  public static eventReceiverFactory<T>(name:EventsRegistry): EventReceiver<T> {
    EventReceiver.singletonReceivers[name] = EventReceiver.singletonReceivers[name] ?? new EventReceiver(name);
    return EventReceiver.singletonReceivers[name] as EventReceiver<T> ;
  }

  public unsubscribe(hash: string): boolean {
    if(this.subscribedCallbacks[hash]){
      delete this.subscribedCallbacks[hash];
      return true;
    }
    return false;
  }

  private logSubscribers(){
    console.log('----- Current subscritpors -----');
    Object.keys(this.subscribedCallbacks).forEach((key)=> console.log('-->', key))
  }
}

export type EventHandler<T> = (data: T) => void;
