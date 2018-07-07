# React Parcel SSR

> React Server Side Rendering with Parcel and Babel.

- [x] CSS Modules (`postcss-modules` & `babel-plugin-css-modules-transform`)
- [x] Universal cookie (`react-cookie` & `universal-cookie-express`)
- [x] `react-router`
- [ ] `react-redux`

## Structure

```
├── .tmp/
├── .cache/
├── build/
├── server/
│   ├── middlewares/
│   │   ├── ssr.js
│   │   └── tmpl.js
│   └── app.js
├── src/
│   ├── components/
│   ├── containers/
│   ├── styles/
│   ├── App.js
│   ├── client.js
│   ├── index.html
│   └── routes.js
├── README.md
├── package.json
└── yarn.lock
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
