# global66-challenge

Esta es mi propuesta para la prueba técnica de Global66.
Link de la web en Vercel: https://global66-challenge.vercel.app

Librerías utilizadas:

- TailwindCSS
- Pinia
- TanstackQuery
- VueFinalModal
- VueToastNotification

Me pareció mejor mostrar los pokemons favoritos en una ruta distinta, además estos se guardan en localStorage. También decidí añadir una notificación para darle feedback al usuario de cuando agrega o elimina un pokemon de favoritos.
Debido a la gran cantidad de pokemones añadí un paginado pero no encontré en la documentación de la PokeAPI algún parámetro para poder filtrar los pokemones en el endpoint, de modo que el listado general solo filtra los pokemones de la página donde está el usuario.
La fuente Lato en Google no tiene el peso 500 asi que usé 700.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
