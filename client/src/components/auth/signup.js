import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <fieldset className="form-group">
    <label>{label}</label>
    <div>
      <input {...input} className="form-control" placeholder={label} type={type}/>
      {touched && error && <span className="error">{error}</span>}
    </div>
  </fieldset>
);

class Signup extends Component {
  render() {

    return (
      <form>
          <Field
            name="email"
            label="Email"
            type="text"
            component={renderField}
             />
          <Field
            name="password"
            label="Password"
            type="password"
            component={renderField}
            />

          <Field
            name="passwordConfirm"
            label="Confirm Password"
            type="password"
            component={renderField}
            />

        <button action="submit" className="btn btn-primary">Sign Up</button>
      </form>
    );
  }
}

function validate(formProps) {
  const errors = {};

  if (formProps.password !== formProps.passwordConfirm) {
    errors.password = "Passwords must match";
  }

  return errors;
}


Signup = reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm'],
  validate
})(Signup);

export default Signup = connect(null, actions)(Signup)
