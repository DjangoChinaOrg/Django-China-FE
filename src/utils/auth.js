export default {
  user: {
    authenticated: false
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
    var jwt = localStorage.getItem('id_jwt') || 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InN1cGVyX2FkbWluQGV4YW1wbGUuY29tIiwidXNlcl9pZCI6MTIsImV4cCI6MTUyNTI3MjA3NCwidXNlcm5hbWUiOiJzdXBlcl9hZG1pbiJ9.dVkYPef9GJ1wcW6-FSgCk2wInlJMYvFzBFRSGuJs1uQ'
    if (jwt) {
      this.user.authenticated = true
    } else {
      jwt = this.getJwtFromCookie()
      if (jwt) {
        localStorage.setItem('id_jwt', jwt)
        this.user.authenticated = true
      } else {
        this.user.authenticated = false
      }
    }
  },

  getAuthHeader () {
    return {
      'Authorization': 'Bearer ' + (localStorage.getItem('id_jwt') || 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InN1cGVyX2FkbWluQGV4YW1wbGUuY29tIiwidXNlcl9pZCI6MTIsImV4cCI6MTUyNTI3MjA3NCwidXNlcm5hbWUiOiJzdXBlcl9hZG1pbiJ9.dVkYPef9GJ1wcW6-FSgCk2wInlJMYvFzBFRSGuJs1uQeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InN1cGVyX2FkbWluQGV4YW1wbGUuY29tIiwidXNlcl9pZCI6MTIsImV4cCI6MTUyNTI3MjA3NCwidXNlcm5hbWUiOiJzdXBlcl9hZG1pbiJ9.dVkYPef9GJ1wcW6-FSgCk2wInlJMYvFzBFRSGuJs1uQ')
    }
  }
}
