import Base from "./Base";

class LoginPage extends Base {

    constructor() {
        super();
        this.usernameInput = '#Email';
        this.passwordInput = '#Password';
        this.loginButton = '.login-button';
    }

    Login(username, password) {
        this.type(username, this.usernameInput);
        this.type(password, this.passwordInput);
        this.click(this.loginButton);
    }

    
}
export default LoginPage;