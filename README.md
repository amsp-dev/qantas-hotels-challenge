# Qantas Hotels Test

This package is based on a default Vite / Typescript app, with MSW simulating an API and Cypress for E2E and Component testing

This package was created and developed using Node v18.18.2 (NPM 9.8.1)

## To run

```
npm install
```

Then;

```
npm run dev
```

You should now be able to view the project at http://localhost:3000/

## Cypress

To open Cypress:

```
npx cypress open
```

Please note, I have noticed some issues when changing between Component and E2E testing, and some issues when using electron.

If you run into issues, especially when switching between E2E and Component testing, first close the Cypress app, then check thata the dev server is running on http://localhost:3000/, then reopen Cypress using the command above. Use the Chrome option for E2E and Component testing,

### E2E Testing

If the test fails on first run with a blank screen on the right, wait until you can see the application loaded in the right hand panel, then re-run the test

#### Final note on testing

Sometimes Cypress can get stuck in E2E mode with a blank panel on the right, to solve this you may need to quit the Cypress app, stop, then start the dev server again, then restart Cypress

Thanks!

### Approach

I used a mock API service in this approach to simulate the realities of pushing data around, other than that I tried to keep the package dependencies to a minimum. I opted for slightly more complex approach on the Ratings module than I would've liked; Mathematical computations like the ones in the Ratings component are probably not desireable in large lists, had I better skills in Figma, the use of an SVG clipping mask to cover a solid percentage bar might be more performant in production.

The project structure follows the defaults for a Vite app, and Cypress testing, the Cypress app generates the component test files next to the components they represent.

All of the configuration options have been left as close to default as possible to ensure ease of setup.
