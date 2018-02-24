import React from 'react';

export class Form extends React.Component {
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
              name="userName"
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
              type="password"
              name="password"
              className="input-field"
              placeholder="Password"
            />
          </div>
        </div>

        <div className="form-group">
          <div className="input-group terms-and-conditions">
            <label>
              <input
                type="checkbox"
                name="terms"
                className="agree-terms"
              />
              I agree that my data can be processed and used in accordance with the <a href="/info/show/privacy" target="_blank">privacy policy</a>.
            </label>
          </div>
        </div>
        
        <button
          type="submit"
          className="cta-button"
          onClick={this.onSubmit} // if you declare method handlers as arrow functions taking event arg, then you can omit those things here
        >Jetzt registrieren</button>
      </form>
    );
  }
}
