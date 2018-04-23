export default {
  user: {
    authenticated: false
  },

  getJwtFromCookie() {
    var value = "; " + document.cookie;
    var parts = value.split("; JWT=");
    if (parts.length == 2) {
        return parts.pop().split(";").shift();
    } else {
        return false;
    }
  },

  checkAuth() {
    var jwt = localStorage.getItem('id_jwt');
    if (jwt) {
      this.user.authenticated = true;
    } else {
      jwt = this.getJwtFromCookie();
      if(jwt) {
        localStorage.setItem('id_jwt', jwt);
        this.user.authenticated = true;
      } else {
        this.user.authenticated = false;
      }

    }
  },

  getAuthHeader() {
    return {
      'Authorization': 'Bearer ' + localStorage.getItem('id_jwt')
    }
  }
}
