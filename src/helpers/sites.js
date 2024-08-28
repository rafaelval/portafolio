import weather from "../images/weather.png";
import labirinth from "../images/labyrinth.png";
import gifsearch from '../images/gifsearch.png'

export const sites = [
  {
    url: "https://actual-weather.web.app/",
    description: {
      es: "Es una SPA diseñada en React.Js, que muestra en tiempo real el clima en cualquier ciudad consumiendo datos de una api externa, también muestra la hora actual en las ciudades principales.",
      en: "This is a SPA designed in React.Js, which shows the weather in any city in real time consuming data from an external API, it also shows the current time in the main cities.",
    },
    title: "ACTUAL WEATHER",
    image: weather,
    github:"https://github.com/rafaelval/actual-weather"
  },
  {
    url: "https://a-maze-labyrinth.web.app/",
    description: {
      es: "Este es un SPA de un laberinto sencillo, creado en react, el cual almacena el puntaje del jugador, ha sido creado usando el estilo recursive backtracker agorithm, para crear un laberinto aleatorio siempre.",
      en: "This is a simple maze SPA, created in react, which stores the player's score, it has been created using the recursive backtracker agorithm style, to create a random maze always.",
    },
    title: "A-MAZE LABYRINTH",
    image: labirinth,
    github:"https://github.com/rafaelval/laberinto"
  },
  {
      url: "https://gifsearch-rafa.web.app/",
      description: {
        es: "Un buscador de imagenes gif, el cual consume la api de tenor.com, la interfaz permite copiar los gif para pegarlos directamente en redes sociales o sitios web",
        en: "A gif image search engine, which consumes the tenor.com API, the interface allows you to copy the gifs to paste them directly into social networks or websites.",
      },
      title: "GIF SEARCH",
      image: gifsearch,
      github:"https://github.com/rafaelval/gifsearch"
    },
];
