import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  // Redirect if logged in

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <section className="container1 form-box-login">
        <form onSubmit={(e) => onSubmit(e)} className="form">
          <h2 className="heading-secondary-form ma-bt-lg">
            Log into Your Account
          </h2>
          <div className="form-group">
            <label className="form__label" htmlFor="email">
              Email address
            </label>
            <input
              name="email"
              type="email"
              value={email}
              placeholder="you@example.com"
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group">
            <label className="form__label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
              minLength="6"
            />
          </div>
          <input type="submit" className="btn-1 btn--white" value="Login" />
        </form>
      </section>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
