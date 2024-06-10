# Qantas Hotels Test

This package is based on a default Vite / Typescript app, with MSW simulating an API and Cypress for E2E and Component testing

This package was created and developed using Node v18.18.2 (NPM 9.8.1)

## To run

```
npm install
```

Then

```
npm run dev
```

To open Cypress:

```
npx cypress open
```

Thanks!

### Approach

I used a mock API service in this approach to simulate the realities of pushing data around, other than that I tried to keep the package dependencies to a minimum. I opted for slightly more complex approach on the Ratings module than I would've like; Mathematical computations like the ones in the Ratings component are probably not desireable in large lists, had I better skills in Figma, the use of an SVG clipping mask to cover a solid percentage bar might be more performant in production.
