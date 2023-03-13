export default function ({ route, store, redirect }) {
  // let {redirect, req, res, route, params, query, store } = context;
  //   route.name = "/join", route.fullPath = "/join/a"
  // console.log(Object.keys(context))
  let path = String(route.path).toLowerCase()
  if (
    [
      '/login',
      '/register',
      '/forgotpassword',
      '/forgot',
      '/signup',
      '/signin',
      '/verify',
    ].includes(path)
  ) {
    let mode = ['/login', '/signin'].includes(path) ? 'login' : undefined
    mode = ['/register', '/signup'].includes(path) ? 'register' : mode
    mode = ['/forgot', '/forgotpassword'].includes(path) ? 'forgot' : mode
    mode = ['/verify'].includes(path) ? 'verify' : mode
    redirect('/join?mode=' + mode)
  }
}
