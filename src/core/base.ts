import { IEventListener } from "src/common/eventListener";

export class Base implements IEventListener {
  listeners: { [event: string]: (() => void)[] } = {};

  addListener(event: string, listener: () => void) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(listener);
  }

  removeListener(event: string, listener: () => void) {
    if (!this.listeners[event]) return;
    this.listeners[event] = this.listeners[event].filter(l => l !== listener);
  }

  on(event: string) {
    if (!this.listeners[event]) return;
    this.listeners[event].forEach(listener => listener());
  }
}