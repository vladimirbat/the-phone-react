import { Observable, Subject } from 'rxjs';
import { SessionRegistry } from './session-registry';
export class SessionData {
  public static subjects: { [key: string]: Subject<unknown> } = {};

  public static getObservable(name: SessionRegistry): Observable<unknown> {
    if (!this.subjects[name]) {
      this.subjects[name] = new Subject<unknown>();
    }
    return this.subjects[name];
  }

  public static setString(name: SessionRegistry, value: string) {
    window.sessionStorage.setItem(name, value);
    if (SessionData.subjects[name]) {
      SessionData.subjects[name].next(value);
    }
  }
  public static setObject(name: SessionRegistry, value: object) {
    if (value !== null) {
      window.sessionStorage.setItem(name, JSON.stringify(value));
    } else {
      window.sessionStorage.removeItem(name);
    }
    if (SessionData.subjects[name]) {
      SessionData.subjects[name].next(value);
    }
  }

  public static getString(name: SessionRegistry): string | null {
    return window.sessionStorage.getItem(name);
  }

  public static getObject<T>(name: SessionRegistry): T | null {
    const strObject = window.sessionStorage.getItem(name);
    return strObject ? JSON.parse(strObject) : null;
  }
}
