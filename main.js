import { writeFile } from "fs/promises";
import { render } from "./renderFullEvents.js";
import { loadEvents } from "./events.js";

const events = await loadEvents(100);
const html_events = render(events);
await writeFile('events.html', html_events);



    