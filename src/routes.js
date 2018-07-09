import Home from '~/containers/Home'
import About from '~/containers/About'
import User from '~/containers/User'

const routes = [
  { path: '/', exact: true, component: Home },
  { path: '/about', component: About },
  { path: '/user', component: User }
]

export default routes
