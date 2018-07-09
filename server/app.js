// server/app.js
import path from 'path'
import express from 'express'
import morgan from 'morgan'
import cookiesMiddleware from 'universal-cookie-express'
import ssrMiddleware from './middlewares/ssr'

const app = express()
const port = process.env.PORT || 8080

app.use(morgan('tiny'))

if (process.env.NODE_ENV === 'production') {
  app.use('/static', express.static(path.resolve(__dirname, './static')))
} else {
  app.use('/static', express.static(path.resolve(__dirname, '../.tmp')))
}

app
  .use(cookiesMiddleware())
  .use(ssrMiddleware)

app.use((req, res, next) => {
  res
    .status(404)
    .send('404...')
})
 
app.listen(port, function() {
  console.info(`Server running at http://localhost:${port}...`)
})
