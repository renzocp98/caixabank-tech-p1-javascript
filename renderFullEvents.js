const header = (title) => `
<head>
  <link rel="stylesheet" href="styles.css">
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
</head>`;

const renderEvents = ( events ) =>{

    let eventsHtml = "";
    for(let event of events){
      eventsHtml = eventsHtml + `<div class ="event">
      <img src="${event.image}"/>
      <div  class="name">${event.name}</div>
      </div>`
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