import weather from "../images/weather.png";
import labirinth from "../images/labyrinth.png";
import gifsearch from "../images/gifsearch.png";
import cotizador from '../images/cotizador.png'
import integrar from '../images/integrar.png'
import cibertech from '../images/cibertech.png'
import auth_dashboard from '../images/auth_dashboard.png'
import ecommerce from '../images/e-shop.png'

export const sites = [
  {
    url: "https://integrarcctv.com/",
    description: {
      es: "Esta página fue creada en contrato freelancer, hecha en Wordpress, enfocada en posicionamiento SEO para un distribuidor de circuitos cerrados de seguridad.",
      en: "This page was created as a freelancer contract, made in Wordpress, focused on SEO positioning for a closed circuit security distributor.",
    },
    title: "Integrar CCTV",
    image: integrar,
    github: "",
    available:"inactive"
  },
  {
    url: "https://cotizador.integrarcctv.com/",
    description: {
      es: "Es un cotizador online hecho en next.Js que hace las peticiones directamente al Wordpress de la pagina 'integrar CCTV' para consultar disponibilidad, permite registro de usuarios y creacion en pdf del pedido.",
      en: "It is an online quote made in next.Js that makes requests directly to Wordpress from the 'integrar CCTV' page to check availability, allows user registration and creation of the order in PDF.",
    },
    title: "Cotizador Online",
    image: cotizador,
    github: "",
    available:"inactive"
  },
  {
    url: "https://cibertechsolucion.com.co/",
    description: {
      es: "Esta página ha sido creada para un cliente en WordPress con elementor para un sitio que brinda servicios de seguridad informática, con opciones para envío de correos o comunicacion via whatsapp",
      en: "This page was created for a client in WordPress with Elementor for a site that provides computer security services, with options for sending emails or communicating via WhatsApp.",
    },
    title: "CIBERTECH",
    image: cibertech,
    github: "",
    available:"inactive"
  },
  {
    url: "https://auth-dashboard-rafael.vercel.app/login",
    description: {
      es: "Panel administrativo desarrollado en React + TypeScript con autenticación real, rutas protegidas y gestión de usuarios (CRUD). Incluye persistencia de sesión, configuración global de tema e idioma y estado manejado con Zustand, el stack usado: React · TypeScript · Zustand · Tailwind · React Router · i18n",
      en: "Administrative panel developed in React and TypeScript with real authentication, protected routes, and user management (CRUD). Includes session persistence, global theme and language settings, and state management with Zustand. The stack used is: React, TypeScript, Zustand, Tailwind, React Router, and i18n.",
    },
    title: "AUTH-DASHBOARD",
    image: auth_dashboard,
    github: "https://github.com/rafaelval/auth-dashboard",
    available:"active"
  },
  {
    url: "https://villabuena-e-shop.vercel.app/?page=1",
    description: {
      es: "Aplicación de comercio electrónico desarrollada en React que permite explorar productos, filtrarlos por categorías y gestionar un carrito de compras interactivo con flujo completo de checkout. Incluye autenticación de usuarios y manejo global del estado para mantener la persistencia de datos.",
      en: "An e-commerce application developed in React that allows users to browse products, filter them by category, and manage an interactive shopping cart with a complete checkout flow. It includes user authentication and global state management to maintain data persistence.",
    },
    title: "E-COMMERCE",
    image: ecommerce,
    github: "https://github.com/rafaelval/Villa-buena-ecommerce",
    available:"active"
  },
  {
    url: "https://actual-weather.web.app/",
    description: {
      es: "Es una SPA diseñada en React.Js, que muestra en tiempo real el clima en cualquier ciudad consumiendo datos de una api externa, también muestra la hora actual en las ciudades principales.",
      en: "This is a SPA designed in React.Js, which shows the weather in any city in real time consuming data from an external API, it also shows the current time in the main cities.",
    },
    title: "ACTUAL WEATHER",
    image: weather,
    github: "https://github.com/rafaelval/actual-weather",
    available:"active"
  },
  {
    url: "https://a-maze-labyrinth.web.app/",
    description: {
      es: "Este es un SPA de un laberinto sencillo, creado en react, el cual almacena el puntaje del jugador, ha sido creado usando el estilo recursive backtracker agorithm, para crear un laberinto aleatorio siempre.",
      en: "This is a simple maze SPA, created in react, which stores the player's score, it has been created using the recursive backtracker agorithm style, to create a random maze always.",
    },
    title: "A-MAZE LABYRINTH",
    image: labirinth,
    github: "https://github.com/rafaelval/laberinto",
    available:"active"
  },
  {
    url: "https://gifsearch-rafa.web.app/",
    description: {
      es: "Un buscador de imagenes gif, el cual consume la api de tenor.com, la interfaz permite copiar los gif para pegarlos directamente en redes sociales o sitios web",
      en: "A gif image search engine, which consumes the tenor.com API, the interface allows you to copy the gifs to paste them directly into social networks or websites.",
    },
    title: "GIF SEARCH",
    image: gifsearch,
    github: "https://github.com/rafaelval/gifsearch",
    available:"active"
  },
];
