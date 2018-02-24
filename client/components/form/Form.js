import React from 'react';

export class Form extends React.Component {
  render() {
    return (
      <form>
        <div className="form-group">
          <label>First Name</label>
          <div className="input-group">
            <span className="input-addon">X</span>
            <input
              type="text"
              name="firstName"
              className="input-field"
              placeholder="First name"
            />
          </div>
        </div>
      </form>
    );
  }
}
