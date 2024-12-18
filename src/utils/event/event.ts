import { EventEmitter } from "events";
import { EventNames } from "./eventNames";

export type Events = {
  message: string;
};

export const eventEmitter = new EventEmitter();

export const sendMessage = () => {
  eventEmitter.emit(EventNames.MESSAGE, "Hello from Sender");
};

export const receiveMessage = () => {
  let message = "default";
  eventEmitter.on(EventNames.MESSAGE, (_message) => {
    console.log(`${EventNames.MESSAGE} :: `, _message);

    message = _message;
  });

  return message;
};

export const unsubscribe = () => {
  eventEmitter.removeAllListeners();
};
