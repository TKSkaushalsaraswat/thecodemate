import React, { Fragment, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';
import NavbarWhite from './../layout/NavbarWhite';

const initialState = {
  company: '',
  website: '',
  location: '',
  status: '',
  skills: '',
  githubusername: '',
  bio: '',
  twitter: '',
  facebook: '',
  linkdin: '',
  youtube: '',
  instagram: '',
};

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history,
}) => {
  const [formData, setFormData] = useState(initialState);

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  useEffect(() => {
    if (!profile) getCurrentProfile();
    if (!loading) {
      const profileData = { ...initialState };
      for (const key in profile) {
        if (key in profileData) profileData[key] = profile[key];
      }
      for (const key in profile.social) {
        if (key in profileData) profileData[key] = profile.social[key];
      }
      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkdin,
    youtube,
    instagram,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history, true);
  };

  return (
    <Fragment>
      <NavbarWhite />
      <section className="container form-box-1">
        <h1 className="large text-primary-blue">Edit Your Profile</h1>
        <p className="lead-profile">
          <i className="fas fa-user-circle" /> Add some changes to your profile
        </p>
        <form className="form" onSubmit={onSubmit}>
          <div className="form-group">
            <small className="form__label">
              Give us an idea of where you are at in your career
            </small>
            <select name="status" value={status} onChange={onChange}>
              <option className="form__label-option">
                * Select Professional Status
              </option>
              <option className="form__label-option" value="Developer">
                Developer
              </option>
              <option className="form__label-option" value="Junior Developer">
                Junior Developer
              </option>
              <option className="form__label-option" value="Senior Developer">
                Senior Developer
              </option>
              <option className="form__label-option" value="Manager">
                Manager
              </option>
              <option
                className="form__label-option"
                value="Student or Learning"
              >
                Student or Learning
              </option>
              <option className="form__label-option" value="Instructor">
                Instructor or Teacher
              </option>
              <option className="form__label-option" value="Intern">
                Intern
              </option>
              <option className="form__label-option" value="Other">
                Other
              </option>
            </select>
          </div>
          <div className="form-group">
            <small className="form__label">
              Could be your own company or one you work for
            </small>
            <input
              type="text"
              placeholder="Company"
              name="company"
              value={company}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <small className="form__label">
              Could be your own or a company website
            </small>
            <input
              type="text"
              placeholder="Website"
              name="website"
              value={website}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <small className="form__label">
              City & state suggested (eg. Boston, MA)
            </small>
            <input
              type="text"
              placeholder="Location"
              name="location"
              value={location}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <small className="form__label">
              Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
            </small>
            <input
              type="text"
              placeholder="* Skills"
              name="skills"
              value={skills}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <small className="form__label">
              If you want your latest repos and a Github link, include your
              username
            </small>
            <input
              type="text"
              placeholder="Github Username"
              name="githubusername"
              value={githubusername}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <small className="form__label">
              Tell us a little about yourself
            </small>
            <textarea
              placeholder="A short bio of yourself"
              name="bio"
              value={bio}
              onChange={onChange}
            />
          </div>

          <div className="my-2">
            <button
              onClick={() => toggleSocialInputs(!displaySocialInputs)}
              type="button"
              className="btn-dash-1"
            >
              Add Social Network Links
            </button>
            <span>Optional</span>
          </div>

          {displaySocialInputs && (
            <Fragment>
              <div className="form-group social-input">
                <i className="fab fa-twitter fa-2x" />
                <input
                  type="text"
                  placeholder="Twitter URL"
                  name="twitter"
                  value={twitter}
                  onChange={onChange}
                />
              </div>

              <div className="form-group social-input">
                <i className="fab fa-facebook fa-2x" />
                <input
                  type="text"
                  placeholder="Facebook URL"
                  name="facebook"
                  value={facebook}
                  onChange={onChange}
                />
              </div>

              <div className="form-group social-input">
                <i className="fab fa-youtube fa-2x" />
                <input
                  type="text"
                  placeholder="YouTube URL"
                  name="youtube"
                  value={youtube}
                  onChange={onChange}
                />
              </div>

              <div className="form-group social-input">
                <i className="fab fa-linkedin fa-2x" />
                <input
                  type="text"
                  placeholder="Linkedin URL"
                  name="linkdin"
                  value={linkdin}
                  onChange={onChange}
                />
              </div>

              <div className="form-group social-input">
                <i className="fab fa-instagram fa-2x" />
                <input
                  type="text"
                  placeholder="Instagram URL"
                  name="instagram"
                  value={instagram}
                  onChange={onChange}
                />
              </div>
            </Fragment>
          )}

          <input type="submit" className="btn-1 btn--white  m-top-small" />
          <Link className="btn-dash-2 my-1" to="/dashboard">
            Go Back
          </Link>
        </form>
      </section>
    </Fragment>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
);
