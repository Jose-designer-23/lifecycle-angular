# 🔄 Lifecycle Angular App 🚀

Welcome to the **Lifecycle Angular App**! This is a small project specifically designed to demonstrate and explore the different **Component Lifecycle Hooks in Angular**.

Through this project, you'll be able to observe the execution order and functionality of each hook, with clear console logs indicating when and why each lifecycle method is called. It's an ideal tool for developers looking for a deep understanding of how Angular manages components from their creation to their destruction.

## ✨ Key Features

This project illustrates the behavior of the following Angular lifecycle hooks, with explicit console messages for each event:

* **`Constructor`**: Called when Angular creates an instance of the component.
* **`ngOnChanges`**: Executes when Angular detects changes to data-bound input properties (`@Input`) of a component.
* **`ngOnInit`**: Executes once Angular has initialized all of the component's input properties. It's a good place for data initialization.
* **`ngDoCheck`**: Executes during every Angular change detection cycle. It allows implementing custom change detection logic.
* **`ngAfterContentInit`**: Executes once the component's content (projected into the component's view) has been initialized.
* **`ngAfterContentChecked`**: Executes every time Angular has checked the projected content of the component.
* **`ngAfterViewInit`**: Executes after the component's view (and its child views) has been fully initialized.
* **`ngAfterViewChecked`**: Executes every time Angular has checked the component's view (and its child views).
* **`AfterRender` / `afterNextRenderEffect`**: Shows how logic is executed after all components have been rendered to the DOM, including side effects. (Note: `AfterRender` and `afterNextRenderEffect` are part of the new deferred rendering and effects features introduced in Angular 17+).

## 🛠️ Technologies Used

### Frontend:

* **[Angular](https://angular.io/) (v19.2.14, with Signals):** The core framework for building the user interface, leveraging its powerful built-in and custom pipes, along with reactive state management through Signals.
* **[TypeScript](https://www.typescriptlang.org/) (~5.7.2):** The base programming language that adds static typing.
* **[RxJS](https://rxjs.dev/) (~7.8.0):** For managing asynchronous data streams and reactive programming within Angular.
* **HTML & CSS** - For basic application structure and styling.

---

## 🚀 How to Run the Project

To get the **Lifecycle Angular App** up and running on your local environment, follow these steps:

### Prerequisites

* Node.js (version 18 or higher)
* npm or Yarn

### Steps

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Jose-designer-23/lifecycle-angular.git](https://github.com/Jose-designer-23/lifecycle-angular.git)
    cd lifecycle-angular
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or if you use Yarn
    # yarn install
    ```

3.  **Start the application:**
    ```bash
    ng serve
    ```

4.  **Access the Application:**
    Open your browser and navigate to `http://localhost:4200/`. Open the browser's developer console (F12) to observe the lifecycle messages. The application will automatically reload whenever you modify any of the source files.

---

## 💻 Development Commands (Angular CLI)

This section provides a quick reference to the most common Angular CLI commands.

* **Start the Development Server:**
    ```bash
    ng serve
    ```
* **Generate Components, Services, etc.:**
    ```bash
    ng generate component component-name
    ng generate service services/my-service
    # For a complete list of available schematics: ng generate --help
    ```
* **Build the Project for Production:**
    ```bash
    ng build
    ```
* **Run Unit Tests:**
    ```bash
    ng test
    ```
