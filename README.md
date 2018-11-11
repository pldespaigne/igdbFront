# igdbFront 🎮

This project is a simple Single Page App to browse the [IternetGameDataBase](https://www.igdb.com).

I made it to learn the Angular Framework.

You can try it with this [live demo](https://igdbfront.surge.sh/) !

## 🔧 Functionalities

 * ⚠️ this project is client-side only, so you will need to login with an igdb API key ⚠️
 * 🏡 the [home page](https://igdbfront.surge.sh/) dispaly a random game and let you explore the game database
 * 🔍 you can [search](https://igdbfront.surge.sh/search/rayman) for specific games
 * 🎮 you can click on a [game](https://igdbfront.surge.sh/game/121) to see more information about it
 * 📜 I have used [Akita](https://github.com/datorama/akita) to handle the application state
 * 💾 the state persist in the browser local storage, so you can quit the app and comme back later without re login
 * 🗂 I implemented a cache mechanism in order to save api queries (the app will not query the api if the game have been visited previously)
 * 🅰️ I used [Angular Material](https://material.angular.io/) and [Angular flex Layout](https://github.com/angular/flex-layout) for the design and responsiveness
 * ⛔️ I used the [CORS Anywhere](https://github.com/Rob--W/cors-anywhere/) proxy in order to bypass CORS headers setup by igdb to restrict free api keys 😉
 
##  👨‍💻 Author
* Pierre-Louis Despaigne ([@pldespaigne](https://twitter.com/pldespaigne))

## ⚖️ License
* [GNU v3](/LICENSE)

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
