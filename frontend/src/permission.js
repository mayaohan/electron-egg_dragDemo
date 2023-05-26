import router from './router'

const whiteList = ['/login', '/authredirect']// no redirect whitelist

router.beforeEach((to, from, next) => {
  console.log(to)
  next()
})

router.afterEach(() => {
})
