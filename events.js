export class Events{
    constructor(id,name, url, location, sale, date, classification, image){
        this.id = id,
        this.name = name;
        this.url = url;
        this.location = location;
        this.sale = sale;
        this.date = date;
        this.classification = classification;
        this.image = image;
    }
}

export const loadEvents = async (n) => {
    const response = await fetch('https://app.ticketmaster.com/discovery/v2/events.json?apikey=IY15m5Po8rivnx1OIfoiX8lYZcYyTgVY&size=2');
    const data = await response.json();

    const events = data._embedded.events.map(event =>
        new Events(
            event.id,
            event.name,
            event.url,
            event._embedded.venues[0].name,
            event.sales.public.startDateTime,
            event.dates.start.localDate,
            event.classifications[0].segment.name,
            event.images[0].url
        )
    );

    return events;

};
