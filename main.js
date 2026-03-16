import { writeFile, mkdir } from "fs/promises";
import { render, renderEachEvent } from "./renderFullEvents.js";
import { loadEvents } from "./events.js";

const events = await loadEvents(120);
const html_events = render(events);
await writeFile('index.html', html_events);
 
await mkdir('eventos', {recursive: true});

for (const event of events) {
  await writeFile(`eventos/event-${event.id}.html`, renderEachEvent(event));
}



    