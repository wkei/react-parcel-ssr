import Home from '~/containers/Home'
import About from '~/containers/About'

const routes = [
  { path: '/', exact: true, component: Home },
  { path: '/about', component: About }
]

export default routes
