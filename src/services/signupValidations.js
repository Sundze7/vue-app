import Validations from "./validations";

export default class SignupValidations {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  checkValidations() {
    let errors = [];

    //email validation
    if (!Validations.checkEmail(this.email)) {
      errors["email"] = "Invalid Email";
    }

    //pasword Validation
    if (!Validations.minLength(this.password, 6)) {
      errors["password"] = "password should be atleast 6 characters";
    }
    return errors;
  }
}
