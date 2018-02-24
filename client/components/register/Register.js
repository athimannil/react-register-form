import React from 'react';

import { Social } from './../social/Social';
import { Form } from './../form/Form';
import { Currentuser } from './../currentuser/Currentuser';

export class Register extends React.Component {
  render() {
    return (
      <section className="register">
        <Social />
        <Form />
        <Currentuser />
      </section>
    );
  }
}
