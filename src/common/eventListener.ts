
export interface IEventListener {
  listeners: { [event: string]: (() => void)[] };
  addListener(event: string, listener: () => void):void;
  removeListener(event: string, listener: () => void):void;
  on(event: string):void;
}

// export abstract class EventListener implements IEventListener {
//   listeners: { [event: string]: (() => void)[] } = {};

//   addListener(event: string, listener: () => void) {
//     if (!this.listeners[event]) {
//       this.listeners[event] = [];
//     }
//     this.listeners[event].push(listener);
//   }

//   removeListener(event: string, listener: () => void) {
//     if (!this.listeners[event]) return;
//     this.listeners[event] = this.listeners[event].filter(l => l !== listener);
//   }

//   on(event: string) {
//     if (!this.listeners[event]) return;
//     this.listeners[event].forEach(listener => listener());
//   }
// }
