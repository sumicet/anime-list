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

-   [SWR](https://swr.vercel.app/) because it's faster to setup & the bundle
    size is smaller compared to alternatives like React Query. Don't need any complex configurations for the data fetching so this package is good for small projects. 

-   `Eslint` & `Prettier` + `Husky`

# Additions

-   Dark theme

# Notes

-   I have some unanswered questions about the designs. Normally, I'd ask before
    implementing it, but in this case I thought it was better to go with my
    assumptions. Some colors are very similar to each other so I picked 1 and
    used it in both cases eg `rgba(235, 235, 235, 1)` and `rgba(238, 238, 238, 1)`.
    Similarly, the spacing system appears to be using a lot of different values
    so I tried to make it consistent as much as possible.