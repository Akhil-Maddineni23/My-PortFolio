export const skills = {
  pl: ["C", "C++", "Python", "JavaScript", "SQL", "Typescript"],
  fl: [
    "Data Structures and Algorithms", 
    "Design and Analysis of Algorithms", 
    "OOPs", 
    "Operating Systems concepts",
    "Monolithic Architecture",
    "Microservices Architecture",
    "Image Processing", 
    "Computer Vision"
  ],
  misl: [
    "React", 
    "HTML5", 
    "CSS3", 
    "Bootstrap", 
    "Node", 
    "Express",
    "MongoDB", 
    "Mongoose", 
    "REST API’s", 
    "GraphQL Api",
    "Docker", 
    "Kubernetes", 
    "Jest", 
    "NATS"
  ],
};

export const projects = [
  {
    title : 'Cricket Live Score Panel',
    description : `It is a web application made specifically for keeping track of cricket matches in real time.
    All of the batter, bowler, and match statistics have been presented, and both innings of the
    game may be played.`,
    tools : `HTML, CSS, Bootstrap, Node.js, EJS, MongoDB, Mongoose, Cyclic`,
    appLink : 'https://busy-lime-hedgehog-cuff.cyclic.app'
  },
  {
    title : ' Cattle Identification using Muzzle Pattern',
    description : `Research on the identification of cattle using their muzzle patterns. To extract muzzles from
    the image, I worked on a number of deep learning techniques. To get rid of the noise in
    the image, I worked on a few image processing approaches. Additionally, a great deal of
    feature extraction methods were developed, and they were then implemented using Python
    and OpenCV.`,
    tools : `Opencv, Matplotlib, Pandas , JSON`,
    appLink : ''
  }, 
  {
    title : 'Password Notes App',
    description : `It is a web application for writing down and storing password notes. On the notes, any
    CRUD action may be carried out. Additionally, we have the option of sharing password
    notes with other users and setting a note expiration date. Additionally, users are informed
    via notification every time they get a password note.`,
    tools : `MongoDB, Express, React, Node, Socket-io, HTML, CSS`,
    appLink : 'https://password-notes-app.netlify.app/'
  },
  {
    title : 'Rooks Move Game',
    description : `It's a multiplayer game. Players were connected to the server using sockets. Moving Rook from start position to 
    target position. Alternative turns were taken by the players to reach the destination.`,
    tools : `Phaser, Express, Socket-io`,
    appLink : 'https://github.com/Akhil-Maddineni23/Rook-s-Move'
  },
  {
    title : 'BackEnd for an tickets booking app',
    description : `Designed backend for an tickets booking app using MicroServices. Different services were
    created to handle the tasks of the application like Authentication, Tickets creation, Order
    creation, Order expiration, Payment. And I have created a npm module to share the common
    code between services.`,
    tools : `Nodejs, TypeScript, Express, MongoDB, jest, Docker, Kubernetes, NATS`,
    appLink : 'https://github.com/Akhil-Maddineni23/ticketing'
  },
  {
    title : 'FrontEnd - UI Challenges',
    description : `Rather of importing straight functionality, a few UI components were implemented using
    solely React, HTML and CSS.`,
    tools : `React, HTML, CSS, Netlify`,
    appLink : 'https://frontend-ui-challenges.netlify.app'
  },
  {
    title : 'Fetching data using API’s and Rendering using React',
    description : `Fetched data of different websites using API’s from Rapid Api Hub. Data Fetched - Weather
    and Forecast data from Open Weather website, Cricket international teams and players from
    Cricbuzz website, Movies data from IMDB website.`,
    tools : ` React, RESTApi, JavaScript`,
    appLink : 'https://github.com/Akhil-Maddineni23/Data-Fetching-Using-Api-s'
  },
 
]

export const activities = [
  ` Use to work on Programming, Drawing and Sports at my leisure time.`,
  `Represented my Institute Cricket team from 2019 to 2023.`,
  `Lead CSE department Cricket team.`,
  ` NSO’s (National Sports Organisation) fast bowling coordinator for cricket.`,
  `One of the Organizers in Intra college HowZZATT Cricket League 2022.`,
  `Won Gold medal in ACE Volleyball Tournament.`
]
