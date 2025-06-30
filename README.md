Pag Ducati



Aplicación web inspirada en la marca Ducati, construida con Angular y Angular Material. Incluye sistema de autenticación, navegación lateral, páginas de contenido promocional y un diseño totalmente responsivo.

🏍️ Descripción general

Proyecto académico/demo que replica una landing page con distintas secciones (Home, Instrucciones, Bases de Promoción, Nuevo Look, Políticas de Privacidad y Términos). El objetivo es practicar la integración de Angular 16 con Angular Material, formularios reactivos, rutas protegidas y maquetación adaptable.

Funcionalidades principales

Módulo

Descripción

Autenticación

Registro y login con validaciones y máscaras de entrada (ngx-mask).

Layout

Header fijo, sidebar colapsable y footer reutilizable.

Navegación

Ruteo lazy loading entre pantallas: Home, Bases de Promoción, Instrucciones, Nuevo Look, etc.

Contenido multimedia

GIF promocional centrado en la portada.

Responsive

Flex layout + SCSS, optimizado para móvil y desktop.

🛠️ Tecnologías y dependencias

Angular 16 + Angular CLI

Angular Material (Sidenav, Form Field, Input, Button, Icon…)

TypeScript 5 / RxJS 7

SCSS y Flexbox / CSS Grid

Node.js 18

ngx-mask para máscaras de formularios

⚙️ Requisitos previos

Herramienta

Versión mínima

Node.js

18.x

npm

9.x

Angular CLI

17.x

Comprueba tu versión con node -v y ng v.

🚀 Instalación y ejecución local

# 1. Clona el repositorio
git clone https://github.com/TU_USUARIO_GITHUB/pag-ducati.git
cd pag-ducati

# 2. Instala dependencias
npm install

# 3. Levanta el servidor de desarrollo
npm start          # alias de: ng serve -o

Abrirá http://localhost:4200/ en tu navegador predeterminado.

Scripts útiles

Comando

Acción

npm start

Compila en modo dev y recarga en caliente.

npm run build

Compila para producción en dist/.

npm run lint

Ejecuta linter ESLint.

📁 Estructura de carpetas

src/
  app/
    partials/          # Header, Footer, Sidebar
    screens/
      home-screen/
      login-screen/
      registro-screen/
      bases-promocion-screen/
      instrucciones-screen/
      nuevo-look-screen/
      politicas-de-privacidad/
      termminos-condiciones-screen/
  assets/
    img/
      videojuego.gif

🌐 Despliegue

Para generar la versión de producción:

npm run build

El resultado queda en dist/pag-ducati/. Sube el contenido a tu hosting preferido (GitHub Pages, Firebase Hosting, Netlify…).

✍️ Autor

Mariano López – Desarrollador & estudiante BUAPTwitter: @tu_usuario

📄 Licencia

Este proyecto se distribuye bajo la licencia MIT. Consulta el archivo LICENSE para más información.
