import React from 'react';

import { Social } from './../social/Social';
import { Form } from './../form/Form';

export class Register extends React.Component {
  render() {
    return (
      <section className="register">
        <Social />
        <Form />
      </section>
    );
  }
}
