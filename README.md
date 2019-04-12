# Boldking Login

[Deployed application](https://krisztian-kugler.github.io/boldking-login/)

## Used technologies

- Angular 7
- TypeScript
- RxJS
- Sass (for its nesting capability)

## Notes

- Even though design was not a requirement, I still applied some styling to the app to make it look at least a bit better. No UX-focused decisions or pixel-perfect alignment, just a little CSS.
- The actual coding part took me about 60 minutes to complete.
- Both "Username" and "Password" are validated dynamically, on the fly.
- "Username" uses the provided validate() function, "Password" uses Angular form validation.
- Since the validate() function mimics an API call, I decided to add a simple debouncing feature that adds a little delay after an input change to actually make the call. This would lower the amount of requests to be sent if we start typing quickly in the "Username" input field.
- Animated load spinner added to give a visual feedback about async operations.
- Submit (Login) button becomes clickable only if both "Username" and "Password" are valid.
- I structured the project the same way I would have done it with a much bigger Angular application, despite the fact that for such a tiny app there was no real benefit of using many of the things I used here: Sass, splitting the app into components, using a data service, creating interfaces for data types etc.

## Usage

- Fill in both the "Username" and "Password" fields to activate the Login button.
- "Username" should be at least 9 characters long and has to start with a vowel (at least it's implemented this way in the API).
- "Password" should be at least 9 characters long and has to contain at least one number.
- You'll get instant visual feedback about the validity of each input field.
- When both inputs are valid, click the Login button to "start the app".
- After a small delay, you should see whether the login was succesful or not. From there you can go back to the login form.

## How to run the app in developer mode

1. Clone the repository.
2. Open up the terminal and run `npm install` in the project's root directory.
3. Run `ng serve -o` to fire up a dev server and open the app in the browser.

## How to build the app

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
