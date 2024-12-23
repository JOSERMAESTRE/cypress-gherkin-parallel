import Base from "./Base";

class RegisterPage extends Base {
    constructor() {
        super();
        this.gengerInput = '#gender-male';
        this.firstNameInput = '#FirstName';
        this.lastNameInput = '#LastName';
        this.emailInput = '#Email';
        this.passwordInput = '#Password';
        this.confirmPasswordInput = '#ConfirmPassword';
        this.registerButton = '#register-button';
    }


    Register(dataTable) {
        dataTable.hashes().forEach(row => {
            this.click(this.gengerInput);
            this.type(row.firstName,this.firstNameInput);
            this.type(row.lastName,this.lastNameInput);
            this.type(row.email,this.emailInput);
            this.type(row.password,this.passwordInput);
            this.type(row.confirmPassword,this.confirmPasswordInput);

        });
        this.click(this.registerButton);

    }

}
export default RegisterPage;