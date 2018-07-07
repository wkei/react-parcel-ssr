# React Parcel SSR

> React Server Side Rendering with Parcel and Babel.

## Structure

```
├── build // build folder for production
├── package.json
├── server
│   ├── app.js
│   └── middlewares
│       ├── ssr.js
│       └── tmpl.js
└── src
    ├── client.js // client js entry file
    ├── components
    ├── containers
    ├── index.html
    └── styles  // global style folder
```

## Develop in pure front end mode
```
yarn dev
```

## Develop in SSR moe
```
yarn ssr
```

## Build & Serve
```
yarn build
yarn serve
```

Inspired by [https://www.npmjs.com/package/react-cookie](https://www.npmjs.com/package/react-cookie)
