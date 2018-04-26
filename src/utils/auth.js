export default {
  user: {
    authenticated: false,
    jwt: null
  },

  getJwtFromCookie () {
    var value = '; ' + document.cookie
    var parts = value.split('; JWT=')
    if (parts.length === 2) {
      return parts.pop().split(';').shift()
    } else {
      return false
    }
  },

  checkAuth () {
    var jwt = this.getJwtFromCookie()
    if (jwt) {
      this.user.authenticated = true
      this.user.jwt = jwt
    } else {
      this.user.authenticated = false
    }
  },

  getAuthHeader () {
    if (this.user.jwt) {
      return {
        'Authorization': 'Bearer ' + this.user.jwt
      }
    } else {
      return {}
    }
  }
}
