const header = (title) => `
<head>
  <link rel="stylesheet" href="styles.css">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet">
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
</head>`;

const renderEvents = ( events ) =>{

    let eventsHtml = "";
    for(let event of events){
      eventsHtml = eventsHtml + `<a href="event-${event.id}.html" class ="event">
      <img src="${event.image}"/>
      <div  class="name">${event.name}</div>
      </a>`
    }
  
  return `<div class="grid">${eventsHtml}</div>`;

}

export const render = (events) => {
    
  return `
      <html>
        ${header("Events")}
        <body>
          ${renderEvents(events)}
        </body>
      </html>`;
};


export const renderEachEvent = (event) => {
  return `
    <html>
      ${header(event.name)}
      <body>
      <a href="index.html" class="back">Volver</a>
        <div class="detail">
          <h1>${event.name}</h1>
          <img src="${event.image}" />
          <p>Fecha: ${event.date}</p>
          <p>Lugar: ${event.location}</p>
          <p>Categoría: ${event.classification}</p>
          <a href="${event.url}" target="_blank">Comprar entradas</a>
        </div>
      </body>
    </html>`;
};