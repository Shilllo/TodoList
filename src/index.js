import './style.css';
import { Storage } from './storage'
import { startEvents } from './eventController'
import { compareAsc, format } from "date-fns";

let storage = new Storage()

startEvents(storage)

