# Pagina Ducati


Aplicación web inspirada en la marca **Ducati**, construida con Angular y Angular Material. Incluye sistema de autenticación, navegación lateral, páginas de contenido promocional y un diseño totalmente responsivo.

---

## 🏍️ Descripción general

> Proyecto académico/demo que replica una landing page con distintas secciones (Home, Instrucciones, Bases de Promoción, Nuevo Look, Políticas de Privacidad y Términos). El objetivo es practicar la integración de Angular 16 con Angular Material, formularios reactivos, rutas protegidas y maquetación adaptable.

### Funcionalidades principales

| Módulo              | Descripción                                                                 |
|---------------------|------------------------------------------------------------------------------|
| **Autenticación**   | Registro y login con validaciones y máscaras de entrada (`ngx-mask`).       |
| **Layout**          | Header fijo, sidebar colapsable y footer reutilizable.                      |
| **Navegación**       | Ruteo lazy loading entre pantallas: Home, Bases de Promoción, etc.         |
| **Contenido multimedia** | GIF promocional centrado en la portada.                               |
| **Responsive**      | Flex layout + SCSS, optimizado para móvil y desktop.                         |

---

## 🛠️ Tecnologías y dependencias

- **Angular 16** + **Angular CLI**
- **Angular Material** (Sidenav, Form Field, Input, Button, Icon…)
- **TypeScript 5** / **RxJS 7**
- **SCSS** y Flexbox / CSS Grid
- **Node.js 18**
- **ngx-mask** para máscaras de formularios

---

## ⚙️ Requisitos previos

| Herramienta | Versión mínima |
|-------------|----------------|
| Node.js     | 18.x           |
| npm         | 9.x            |
| Angular CLI | 17.x           |

> Comprueba tu versión con `node -v` y `ng v`.

---

## 🚀 Instalación y ejecución local

```bash
# 1. Clona el repositorio
git clone https://github.com/TU_USUARIO_GITHUB/pag-ducati.git
cd pag-ducati

# 2. Instala dependencias
npm install

# 3. Levanta el servidor de desarrollo
npm start          # alias de: ng serve -o

