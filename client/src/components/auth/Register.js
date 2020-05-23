import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import NavbarWhite from './../layout/NavbarWhite';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Password do not match', 'danger');
    } else {
      register({
        name,
        email,
        password,
      });
    }
  };
  if (isAuthenticated) {
    setAlert('Register Successfuly', 'success');
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <NavbarWhite />
      <section className="container1 form-box">
        <form className="form" onSubmit={(e) => onSubmit(e)}>
          <h2 class="heading-secondary-form ma-bt-lg">Create Your Account</h2>
          <div className="form-group">
            <label class="form__label" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group">
            <label class="form__label" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group">
            <label class="form__label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group">
            <label class="form__label" htmlFor="passwordConfirm">
              Password Confirm
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              value={password2}
              onChange={(e) => onChange(e)}
            />
          </div>
          <p class="lead">
            Manage your profile image using
            <a
              class="gravtar-link"
              target="_blank"
              href="https://en.gravatar.com/"
              rel="noopener noreferrer"
            >
              {' '}
              Gravtar.
            </a>
          </p>
          <input type="submit" className="btn-1 btn--white" value="Register" />
        </form>
      </section>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
