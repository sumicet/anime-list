# Important

The api used is [rate limited](https://jikan.docs.apiary.io/#introduction/information/rate-limiting). Because of this, the first request to `home/page`
will always throw an error. To me it didn't seem right to show the error screen
in this case, so I displayed a toast.

# Tools

-   [`OpenApi TypeScript Code Generator`](https://www.npmjs.com/package/openapi-typescript-codegen)

-   [`Chakra-UI`](https://chakra-ui.com/getting-started) because it provides headless
    components which are like building blocks and make styling fast and easy. It's
    modular. It makes it easy to work with responsive styles. It provides dark/white
    theme support.

-   [`SWR`](https://swr.vercel.app/) because it's faster to setup & the bundle
    size is smaller compared to alternatives like React Query. Don't need any complex configurations for the data fetching so this package is good for small projects. 

-   `Eslint` & `Prettier` + `Husky`

# Additions

-   Dark theme

# Notes

-   I wanted to add placeholders for images but that's a bit overkill for this
    project. :D
