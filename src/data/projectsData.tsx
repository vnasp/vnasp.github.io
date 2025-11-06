import { Project } from '../types/portfolioTypes'

export const projectsData: Project[] = [
  {
    title: 'Bigos',
    about:
      'Implementación de e-commerce robusto usando Prestashop, con funciones avanzadas como carga de productos, sistema de facturación electrónica, y pasarelas de pago nacionales (MercadoPago, Webpay, Flow). Personalización de plantillas TPL y correos transaccionales, además de integración directa con MercadoLibre y Google Sheets para sincronización con MySQL.',
    tags: ['Prestashop', 'PHP', 'MySQL', 'HTML5', 'CSS3', 'GoogleSheets'],
    demo: '',
    github: '',
    image: './projects/bigos.webp',
  },
  {
    title: 'La Boquilla',
    about:
      'Desarrollo de un catálogo online en Prestashop, incluyendo integración de addons, sistema de facturación electrónica y personalización extensiva de plantillas TPL. La solución permite una gestión eficiente de productos y ventas, enfocado en una experiencia de usuario optimizada.',
    tags: ['Prestashop', 'PHP', 'MySQL', 'HTML5', 'CSS3'],
    demo: 'https://www.laboquilla.cl',
    github: '',
    image: './projects/laboquilla.webp',
  },
  {
    title: 'NaturalPic',
    about:
      'Galería de imágenes SPA desarrollada en React y Vite con integración de Bootstrap para diseño responsivo. Funciones de lista de favoritos y búsqueda implementadas, con gestión de contenido dinámico a través de un archivo JSON para fácil mantenimiento.',
    tags: ['ReactJS', 'Vite', 'JavaScript', 'JSON', 'Bootstrap'],
    demo: 'https://vnasp.github.io/naturalpic-frontend-user/',
    github: 'https://github.com/vnasp/naturalpic-frontend-user',
    image: './projects/naturalpic.webp',
  },
  {
    title: 'Sintesis de Conocimientos',
    about:
      'Rediseño y migración de plataforma de Joomla a Wordpress, optimizando la funcionalidad y el diseño. Incluye integración de addons, personalización completa y desarrollo de nuevas funcionalidades para mejorar la experiencia del usuario y la eficiencia administrativa.',
    tags: ['Wordpress', 'PHP', 'MySQL', 'HTML5', 'CSS3'],
    demo: 'https://sintesis.med.uchile.cl',
    github: '',
    image: './projects/sintesis.webp',
  },
  {
    title: 'Delta Sport US',
    about:
      'Aplicación SPA en React y Vite con funcionalidades tipo catálogo interactivo donde los usuarios pueden y solicitar cotizaciones para ropa deportiva. Utiliza SwiperJS para una visualización dinámica de los diferentes modelos. El contenido se gestiona a través de archivos JSON para facilitar la actualización. Todo el diseño está implementado con TailwindCSS.',
    tags: ['ReactJS', 'Vite', 'JSON', 'TailwindCSS', 'SwiperJS'],
    demo: 'https://vnasp.github.io/catalog-frontend-react-user',
    github: 'https://github.com/vnasp/catalog-frontend-react-user',
    image: './projects/deltasportus.webp',
  },
  {
    title: 'Marketplace (Frontend)',
    about:
      'Aplicación SPA en React y Vite con funcionalidades completas para gestión de carrito de compras, perfiles de usuario y favoritos. Conectada a través de Axios a una API para contenido dinámico, utilizando React Router para navegación y SwiperJS para carruseles de imágenes. Diseñada con Bootstrap.',
    tags: ['ReactJS', 'Vite', 'JavaScript', 'Axios', 'Bootstrap', 'CSS3', 'SwiperJS', 'REST API'],
    demo: 'https://mimarketlatino.netlify.app',
    github: 'https://github.com/vnasp/marketplace-frontend-react-user',
    image: './projects/marketplace-frontend.webp',
  },
  {
    title: 'Marketplace (Backend)',
    about:
      'Diseño y desarrollo de APIs, documentadas con Swagger, integración con bases de datos PostgreSQL, autenticación mediante Google, manejo de seguridad con JWT y pruebas automatizadas con Jest.',
    tags: ['NodeJS', 'ExpressJS', 'Swagger', 'PostgreSQL', 'REST API'],
    demo: 'https://marketplace-backend-react-user-xwj0.onrender.com/api/v1/docs',
    github: 'https://github.com/vnasp/marketplace-backend-react-user',
    image: './projects/marketplace-backend.webp',
  },
  {
    title: 'Pizzeria Mamma Mia',
    about:
      'Aplicación SPA para pizzería desarrollada en React y Vite, con un diseño de UI basado en skeumorfismo. El contenido se gestiona a través de archivos JSON para facilitar la actualización. Incluye un sistema de pedidos interactivo, mapas con Leaflet y alertas con SweetAlert2, todo integrado en un diseño responsivo y atractivo usando Bootstrap y CSS puro.',
    tags: ['ReactJS', 'Vite', 'JavaScript', 'JSON', 'Leaflet', 'SweetAlert2', 'Bootstrap'],
    demo: 'https://vnasp.github.io/restaurant-frontend-react-user',
    github: 'https://github.com/vnasp/restaurant-frontend-react-user',
    image: './projects/pizzeria.webp',
  },
  {
    title: 'Agencia de Viajes',
    about:
      'Desarrollo de una SPA tipo landing page para una agencia de viajes, implementada con HTML5 y diseñada utilizando Bootstrap y Sass para una estética moderna y responsiva. La página incluye funcionalidades interactivas como un carrusel de imágenes y tooltips informativos, optimizados con las herramientas de Bootstrap para mejorar la experiencia del usuario.',
    tags: ['HTML5', 'Bootstrap', 'Sass'],
    demo: 'https://vnasp.github.io/agencia-frontend-user',
    github: 'https://github.com/vnasp/agencia-frontend-user',
    image: './projects/agencia.webp',
  },
  {
    title: 'Revista SuperHero',
    about:
      'Aplicación SPA informativa sobre superhéroes, desarrollada en HTML con jQuery para la manipulación del DOM y Ajax para el consumo de APIs. Incluye gráficos interactivos con ChartJS y un diseño neumórfico implementado con TailwindCSS.',
    tags: ['HTML', 'jQuery', 'JavaScript', 'TailwindCSS', 'REST API'],
    demo: 'https://vnasp.github.io/superheroes-frontend-user',
    github: 'https://github.com/vnasp/superheroes-frontend-user',
    image: './projects/superhero.webp',
  },
  {
    title: 'Portafolio',
    about:
      'Aplicación SPA de portafolio personal en React y Vite, mostrando proyectos, habilidades y un CV descargable. Utiliza React Router para la navegación y SwiperJS para un carrusel de proyectos, con un diseño en flat design realizado con TailwindCSS.',
    tags: ['ReactJS', 'Vite', 'JavaScript', 'TailwindCSS', 'SwiperJS'],
    demo: 'https://vnasp.github.io',
    github: 'https://github.com/vnasp/vnasp.github.io',
    image: './projects/portafolio.webp',
  },
  {
    title: 'VerdeSapiens',
    about:
      'Aplicación web SSR desarrollada en React NextJS con un enfoque UI de neumorfismo. Incluye funcionalidades como una calculadora y un calendario, integradas dentro de un diseño interactivo que utiliza SwiperJS para carruseles de datos dinámicos. El contenido se gestiona a través de archivos JSON para facilitar la actualización. Diseñado con TailwindCSS y FontAwesome para una estética moderna.',
    tags: ['ReactJS', 'NextJS', 'JavaScript', 'TailwindCSS', 'SwiperJS'],
    demo: 'https://verdesapiens.netlify.app',
    github: 'https://github.com/vnasp/verdesapiens-frontend-user',
    image: './projects/verdesapiens.webp',
  },
  {
    title: 'Clima',
    about:
      'Aplicación web SPA desarrollada en React con Material UI, que utiliza la API de WeatherAPI para obtener información meteorológica. Muestra la temperatura y el estado del clima. Incluye un menú desplegable para seleccionar la ubicación y el fondo de la aplicación cambia automáticamente según sea de día o de noche en la ubicación seleccionada.',
    tags: ['ReactJS', 'MaterialUI', 'REST API'],
    demo: 'https://vnasp.github.io/weather-frontend-user/',
    github: 'https://github.com/vnasp/weather-frontend-user',
    image: './projects/clima.webp',
  },
  {
    title: 'Bitácora de Animales',
    about:
      'Aplicación web SPA para el registro de animales desarrollada en HTML, Bootstrap y Javascript con un enfoque de skeumorfismo para simular un cuadernillo y bitácora real. Incorpora clases, constructores, getters y setters en Javascript, y estructura modular. Los usuarios pueden hacer anotaciones y escuchar sonidos de los animales, enriqueciendo la experiencia educativa.',
    tags: ['HTML5', 'JavaScript', 'Bootstrap'],
    demo: 'https://vnasp.github.io/animals-frontend-user/',
    github: 'https://github.com/vnasp/animals-frontend-user',
    image: './projects/bitacora.webp',
  },
  {
    title: 'Art Gallery',
    about:
      'Aplicación web SPA para una galería de arte digital, desarrollada utilizando React, Material-UI, y Firebase. El diseño emplea un estilo de glassmorfismo para una interfaz moderna y atractiva. La aplicación integra autenticación de usuarios, carga y eliminación de imágenes en tiempo real, y funcionalidades de interacción social como "me gusta".',
    tags: ['ReactJS', 'MaterialUI', 'Firebase'],
    demo: 'https://artgallery-c1d06.web.app/',
    github: 'https://github.com/vnasp/likeme-fullstack-firebase',
    image: './projects/artgallery.webp',
  },
  {
    title: 'Dashboard',
    about:
      'Aplicación web SPA para visualización de datos, desarrollada con React, TailwindCSS y Plotly. Incluye selectores dinámicos, manejo del estado global con ContextAPI y navegación optimizada con React Router Dom. Carga de datos en formato JSON para mayor rendimiento.',
    tags: ['ReactJS', 'TailwindCSS', 'PlotlyJS', 'Axios'],
    demo: 'https://vnasp.github.io/dashboard-frontend-user/',
    github: 'https://github.com/vnasp/dashboard-frontend-user',
    image: './projects/dashboard.webp',
  },
  {
    title: 'Chat Web',
    about:
      'Aplicación web SPA de chat, desarrollada usando Vue2 y TailwindCSS. Simula un chat web (no responsive), donde los usuarios son gestionados dinámicamente con Randomuser API y Axios. Incorpora eventos para envío de mensajes y class binding para una respuesta visual dinámica.',
    tags: ['VueJS', 'TailwindCSS', 'Axios', 'REST API'],
    demo: 'https://vnasp.github.io/chat-vue2-frontend-user/',
    github: 'https://github.com/vnasp/chat-vue2-frontend-user',
    image: './projects/chatweb.webp',
  },
  {
    title: "Who's that Pokémon?",
    about:
      'Aplicación web SPA para juego interactivo de adivinanzas, desarrollada con Vue2 y TailwindCSS. Los Pokémon son gestionados con la PokeAPI y Axios. Incluye eventos para la verificación de respuestas y utiliza class binding para actualizaciones visuales dinámicas basadas en la interacción del usuario.',
    tags: ['VueJS', 'TailwindCSS', 'Axios', 'REST API'],
    demo: 'https://vnasp.github.io/pokemon-vue2-frontend-user/',
    github: 'https://github.com/vnasp/pokemon-vue2-frontend-user',
    image: './projects/pokemongame.webp',
  },
  {
    title: 'Sistema de Reservas',
    about:
      'Aplicación web SPA para sistema de reservas desarrollado con Vue3, VueRouter, VueStore, y Bootstrap. Los datos de usuarios, reservas y servicios son gestionados desde JSON. Incluye vistas para usuario y para administrador con rutas protegidas. Utiliza Jest para testing del frontend.',
    tags: ['VueJS', 'Bootstrap', 'JSON'],
    demo: 'https://vnasp.github.io/reservas-vue-frontend-user/',
    github: 'https://github.com/vnasp/reservas-vue-frontend-user',
    image: './projects/reservas.webp',
  },
  {
    title: 'E-Commerce',
    about:
      'Aplicación web SPA de carrito de compras, desarrollado con Vue3 y TailwindCSS. Los productos son gestionados desde JSON. Incluye eventos para la verificación de respuestas y utiliza class binding para actualizaciones visuales dinámicas basadas en la interacción del usuario.',
    tags: ['VueJS', 'Bootstrap', 'JSON'],
    demo: 'https://vnasp.github.io/ecommerce-vue3-frontend-user/',
    github: 'https://github.com/vnasp/ecommerce-vue3-frontend-user',
    image: './projects/vuecommerce.webp',
  },
  {
    title: 'Gestor de Tareas',
    about:
      'Gestor de tareas desarrollado con Django, HTMX y TailwindCSS. Permite a los usuarios crear, editar, completar y eliminar tareas. Utiliza PostgreSQL para la gestión de datos y class binding para actualizaciones visuales dinámicas. Incorpora gráficos interactivos con Bokeh para visualizar el progreso de las tareas.',
    tags: ['Django', 'HTMX', 'TailwindCSS', 'PostgreSQL', 'Bokeh'],
    demo: 'https://todo-django-htmx.onrender.com/',
    github: 'https://github.com/vnasp/todo-django-htmx',
    image: './projects/gestordetareas.webp',
  },
]
