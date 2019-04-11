# Boldking Login

[Deployed application](https://krisztian-kugler.github.io/boldking-login/)

## Used technologies

- Angular 7
- RxJS
- Sass (for its nesting capability)

## Notes

- Even though design was not a requirement, I still applied some styling to the app to make it look at least a bit better.
- The actual coding part took me about 60 minutes to complete.
- Both "Username" and "Password" are validated dynamically, on the fly.
- "Username" uses the provided validate() function, "Password" uses Angular form validation.
- Since the validate() function mimics an API call, I decided to add a simple debouncing feature that adds a little delay after an input change to actually make the call. This would lower the amount of requests to be sent if we start typing quickly in the "Username" input field.
- Animated load spinner added to give a visual feedback about async operations.
- Submit (Login) button becomes clickable only if both "Username" and "Password" are valid.

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
