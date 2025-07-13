# 🔄 Lifecycle Angular App 🚀

¡Bienvenido a la aplicación **Lifecycle Angular App**! Este es un pequeño proyecto diseñado específicamente para demostrar y explorar los diferentes **Hooks del Ciclo de Vida de los Componentes en Angular**.

A través de este proyecto, podrás observar el orden de ejecución y la funcionalidad de cada hook, con registros claros en la consola del navegador que indican cuándo y por qué se llama a cada método del ciclo de vida. Es una herramienta ideal para desarrolladores que buscan una comprensión profunda de cómo Angular gestiona los componentes desde su creación hasta su destrucción.

## ✨ Características Principales

Este proyecto ilustra el comportamiento de los siguientes hooks del ciclo de vida de Angular, con mensajes explícitos en la consola para cada evento:

* **`Constructor`**: Se llama cuando Angular crea una instancia del componente.
* **`ngOnChanges`**: Se ejecuta cuando Angular detecta cambios en las propiedades de entrada (`@Input`) de un componente.
* **`ngOnInit`**: Se ejecuta una vez que Angular ha inicializado todas las propiedades de entrada del componente. Es un buen lugar para la inicialización de datos.
* **`ngDoCheck`**: Se ejecuta en cada ciclo de detección de cambios de Angular. Permite implementar lógica de detección de cambios personalizada.
* **`ngAfterContentInit`**: Se ejecuta una vez que el contenido del componente (proyectado dentro de la vista del componente) ha sido inicializado.
* **`ngAfterContentChecked`**: Se ejecuta cada vez que Angular ha comprobado el contenido proyectado del componente.
* **`ngAfterViewInit`**: Se ejecuta después de que la vista del componente (y sus vistas hijas) ha sido completamente inicializada.
* **`ngAfterViewChecked`**: Se ejecuta cada vez que Angular ha comprobado la vista del componente (y sus vistas hijas).
* **`AfterRender` / `afterNextRenderEffect`**: Muestra cómo se ejecuta la lógica después de que todos los componentes han sido renderizados al DOM, incluyendo efectos secundarios. (Nota: `AfterRender` y `afterNextRenderEffect` son parte de las nuevas funciones de renderizado diferido y efectos introducidas en Angular 17+).

## 🛠️ Tecnologías Utilizadas

### Frontend:

* [**Angular**](https://angular.io/) - Framework para la construcción de la interfaz de usuario.
* **HTML & CSS** - Para la estructura y estilos básicos de la aplicación.

---

## 🚀 Cómo Ejecutar el Proyecto

Para poner en marcha la aplicación **Lifecycle Angular App** en tu entorno local, sigue estos pasos:

### Requisitos Previos

* Node.js (versión 18 o superior)
* npm o Yarn

### Pasos

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/Jose-designer-23/lifecycle-angular](https://github.com/Jose-designer-23/lifecycle-angular)
    cd lifecycle-angular
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    # o si usas Yarn
    # yarn install
    ```

3.  **Iniciar la aplicación:**
    ```bash
    ng serve
    ```

4.  **Acceder a la Aplicación:**
    Abre tu navegador y ve a `http://localhost:4200/`. Abre la consola de desarrollo (F12) para observar los mensajes de los ciclos de vida. La aplicación se recargará automáticamente cada vez que modifiques los archivos fuente.

---

## 💻 Comandos de Desarrollo (Angular CLI)

Esta sección proporciona una referencia rápida a los comandos más comunes de Angular CLI.

* **Arrancar el Servidor de Desarrollo:**
    ```bash
    ng serve
    ```
* **Generar Componentes, Servicios, etc.:**
    ```bash
    ng generate component nombre-del-componente
    ng generate service services/mi-servicio
    # Para ver una lista completa de esquemas: ng generate --help
    ```
* **Construir el Proyecto para Producción:**
    ```bash
    ng build
    ```
* **Ejecutar Pruebas Unitarias:**
    ```bash
    ng test
    ```
