# ThePhoneReact

Esta es una pequeña aplicación de ejemplo en React que simula una tienda de teléfonos móviles.

Las principales características técnicas del proyecto son:

- Monorepo creado con [Nx](https://nx.dev/).
- El monorepo contiene una biblioteca de componentes (UI-kit o Design System) y la aplicación principal (SPA) ambas implementadas en React.
- Se emplean componentes funcionales de React (con Hooks), implementados con JSX y TypeScript.
- Se accede a un API propia (desarrollada en el proyecto the-phone-api) disponible también en mi cuenta de GitHub. Dicho proyecto está desarrollado con funciones serverless de Vercel y está desplegada en esa plataforma.
- Para la estilización se emplea una arquitectura Sass 7+1 simplificada por la sencillez del proyecto y se emplean [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) para dejar abierta la puerta a un mantenimiento basado en Design Tokens y la posibilidad de implementar varios temas de estilo.
- Para la construcción del proyecto se ha empleado Vite en lugar de Webpack, con lo que se consiguen mejoras en los tiempos de desarrollo en local, construcción y CI.
- Este proyecto se deplegará en la plataforma Vercel para que pueda probarse su funcionamiento sin necesidad de instalarlo en local.
...
## Para ejecutar este proyecto en local
---
- En primer lugar se deben instalar las dependencias: `npm install`.
- Y luego, se debe ejecutar `npm start` y abrir una ventana del navegador en [http://localhost:4200/](http://localhost:4200/).


## Ver las dependencias entre la aplicación y la biblioteca
---
Ejecutar `nx graph` lo cual abrirá una ventana del navegador.

