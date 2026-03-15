import { writeFile } from "fs/promises";
import { render, renderEachEvent } from "./renderFullEvents.js";
import { loadEvents } from "./events.js";

const events = await loadEvents(60);
const html_events = render(events);
await writeFile('index.html', html_events);

for (const event of events) {
  await writeFile(`event-${event.id}.html`, renderEachEvent(event));
}



    