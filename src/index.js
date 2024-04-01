import './style.css';
import { Storage } from './storage'
import { startEvents } from './eventController'

let storage = new Storage()

startEvents(storage)