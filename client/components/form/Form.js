import React from 'react';

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordType: 'password',
      fillables: ['firstName', 'lastName', 'email', 'username', 'password', 'terms'], // this is done through manual listing in array so that you have control which fields should be validated for before submit
      firstName: {
        val: '',
        isValid: true,
        error: 'Please enter your first name'
      },
      lastName: {
        val: '',
        isValid: true,
        error: 'Please enter your last name'
      },
      username: {
        val: '',
        isValid: true,
        error: 'Please enter username'
      },
      email: {
        val: '',
        isValid: true,
        error: 'Please enter valid email address'
      },
      password: {
        val: '',
        isValid: true,
        error: 'Please enter password'
      },
      terms: {
        val: false,
        isValid: true,
        error: 'Please agree terms and conditions'
      }
    };
  }

  showHide = () => {
    this.setState({
      passwordType: this.state.passwordType === 'password' ? 'text' : 'password'
    })
  }

  validateForStringChars(str) {
    const re = /\b[^\d\W]+\b/g;
    const preparedStr = str.replace(/ /g, '');
    return re.test(preparedStr);
  }

  validateForEmail(str) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(str);
  }

  validateFormField(field) {
    let inputValidationResult = false;
    switch (field.name) {
      case 'firstName':
        inputValidationResult = this.validateForStringChars(field.value) && field.value.length > 0;
        break;
      case 'lastName':
        inputValidationResult = this.validateForStringChars(field.value) && field.value.length > 0;
        break;
      case 'username':
        inputValidationResult = field.value.length > 0;
        break;
      case 'email':
        inputValidationResult = this.validateForEmail(field.value) && field.value.length > 0;
        break;
      case 'password':
        inputValidationResult = field.value.length > 0;
        break;
      case 'terms':
        inputValidationResult = field.checked;
        break;
      default:
        inputValidationResult = false;
    }
    return inputValidationResult;
  }

  onChange = (event) => {
    const input = event.target;
    const inputValue = input.type === "checkbox" ? input.checked : input.value;
    this.setState({
      [input.name]: {
        ...this.state[input.name],
        val: inputValue,
        isValid: this.validateFormField(input)
      }
    });
  }

  validateForm() {
    return this.state.fillables.every((field) => this.state[field].isValid && this.state[field].val);
  }

  onSubmit = event => {
    event.preventDefault();
    console.log('submitted');
    console.log(this.state);
    const isFormValid = this.validateForm();
    console.log(isFormValid);
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <label>First Name</label>
          <div className="input-group">
            <span className="input-addon">
              <i className="icon-user"></i>
            </span>
            <input
              type="text"
              name="firstName"
              value={this.state.firstName.val}
              onChange={this.onChange}
              className="input-field"
              placeholder="First name"
            />
          </div>
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <div className="input-group">
            <span className="input-addon">
              <i className="icon-user"></i>
            </span>
            <input
              type="text"
              name="lastName"
              value={this.state.lastName.val}
              onChange={this.onChange}
              className="input-field"
              placeholder="Last name"
            />
          </div>
        </div>

        <div className="form-group">
          <label>Username</label>
          <div className="input-group">
            <span className="input-addon">
              <i className="icon-user"></i>
            </span>
            <input
              type="text"
              name="username"
              value={this.state.username.val}
              onChange={this.onChange}
              className="input-field"
              placeholder="Username"
            />
          </div>
        </div>

        <div className="form-group">
          <label>E-mail</label>
          <div className="input-group">
            <span className="input-addon">
              <i className="icon-mail"></i>
            </span>
            <input
              type="email"
              name="email"
              value={this.state.email.val}
              onChange={this.onChange}
              className="input-field"
              placeholder="E-mail"
            />
          </div>
        </div>

        <div className="form-group">
          <label>Password</label>
          <div className="input-group">
            <span className="input-addon">
              <i className="icon-lock"></i>
            </span>
            <input
              type={this.state.passwordType}
              name="password"
              value={this.state.password.val}
              onChange={this.onChange}
              className="input-field"
              placeholder="Password"
            />
            <span className="input-addon">
              <label className="addon-label">
                <input className="addon-checkbox" type="checkbox" onClick={this.showHide} />Show
              </label>
            </span>
          </div>
        </div>

        <div className="form-group">
          <div className="input-group terms-and-conditions">
            <label>
              <input
                type="checkbox"
                name="terms"
                onChange={this.onChange}
                className="agree-terms"
              />
              I agree that my data can be processed and used in accordance with the <a href="/info/show/privacy" target="_blank">privacy policy</a>.
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="cta-button"
          onClick={this.onSubmit}
        >Jetzt registrieren</button>
      </form>
    );
  }
}
