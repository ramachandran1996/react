class Auth {
    constructor() {
      this.authenticated = false;
    }
  
    login(cb) {
        console.log('cb',cb);
      this.authenticated = true;
      cb();
      console.log('cb',cb);
    }
  
    logout(cb) {
        console.log('cb',cb);
      this.authenticated = false;
      cb();
      console.log('cb',cb);
    }
  
    isAuthenticated() {
      return this.authenticated;
    }
  }
  
  export default new Auth();