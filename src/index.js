import './style.css';
import { Storage } from './storage'
import { startEvents } from './eventController'
import { addRemoveEvents } from './events';

let storage = new Storage()
addRemoveEvents(storage)
startEvents(storage)