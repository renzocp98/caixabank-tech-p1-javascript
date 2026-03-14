//import { writeFile } from "fs/promises";
//import { render } from "./render.js";
//import { loadUsers } from "./users.js";
//
//const users = await loadUsers(100);
//const html = render(users);
//await writeFile('users.html', html);

const response = await fetch('https://app.ticketmaster.com/discovery/v2/events.json?apikey=IY15m5Po8rivnx1OIfoiX8lYZcYyTgVY&size=2');
const data = await response.json();

console.log(data._embedded.events);
    