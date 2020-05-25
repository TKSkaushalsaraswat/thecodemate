import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ProfileExperience from './ProfileExperience';
import ProfileEducation from './ProfileEducation';

const ProfileTop = ({
  profile: {
    experience,
    education,
    status,
    location,
    company,
    website,
    social,
    bio,
    skills,
    user: { name, avatar },
  },
}) => {
  return (
    <div className="container2 profile-content">
      <nav className="sidebar">
        <div className="sidebar-user">
          <img src={avatar} alt="" />
          <h1>{name}</h1>
          <h3>
            {' '}
            {status}
            {company && <span> at {company}</span>}
          </h3>
          <p>{location && <span>{location}</span>}</p>
        </div>
        <ul className="side-nav">
          {website && (
            <li className="side-nav__item ">
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="side-nav__link"
              >
                <i className="fas fa-chalkboard-teacher fa-2x"></i>
                <span className="hide-sm">Visit my Website</span>
              </a>
            </li>
          )}
          {social && social.twitter && (
            <li className="side-nav__item">
              <a
                href={social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="side-nav__link"
              >
                <i className="fab fa-twitter fa-2x"></i>
                <span className="hide-sm">Follow Me on twitter</span>
              </a>
            </li>
          )}{' '}
          {social && social.facebook && (
            <li className="side-nav__item">
              <a
                href={social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="side-nav__link"
              >
                <i className="fab fa-facebook fa-2x"></i>
                <span className="hide-sm">follow Me on Facebook</span>
              </a>
            </li>
          )}
          {social && social.linkdin && (
            <li className="side-nav__item">
              <a
                href={social.linkdin}
                target="_blank"
                rel="noopener noreferrer"
                className="side-nav__link"
              >
                <i className="fab fa-linkedin fa-2x"></i>
                <span className="hide-sm">follow Me on Linkedin</span>
              </a>
            </li>
          )}
          {social && social.instagram && (
            <li className="side-nav__item">
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="side-nav__link"
              >
                <i className="fab fa-instagram fa-2x"></i>
                <span className="hide-sm">follow Me on instagram</span>
              </a>
            </li>
          )}
          {social && social.youtube && (
            <li className="side-nav__item">
              <a
                href={social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="side-nav__link"
              >
                <i className="fab fa-youtube fa-2x"></i>
                <span className="hide-sm">follow Me on youtube</span>
              </a>
            </li>
          )}
        </ul>

        <div className="legal">&copy; theCodemate</div>
      </nav>

      <main className="hotel-view">
        <div className="overview">
          <h1 className="overview__heading">
            Know More About <span className="overview-name">{name}</span>{' '}
          </h1>

          <div className="overview__rating">
            <i className="fas fa-user-circle"></i>
          </div>
        </div>

        <div className="user__info">
          {bio && (
            <Fragment>
              <h1>{name.trim().split(' ')[0]}'s Bio</h1>
              <p className="paragraph">{bio}</p>
            </Fragment>
          )}

          <div className="line"></div>

          <h1>Skill Set</h1>
          <div className="skills">
            {skills.map((skill, index) => (
              <div key={index} className="p-1">
                <i className="fas fa-check" aria-hidden="true"></i>
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div className="detail">
          <div className="description">
            <h2 className="text-primary">Experiences</h2>
            {experience.length > 0 ? (
              <Fragment>
                {experience.map((experience) => (
                  <ProfileExperience
                    key={experience._id}
                    experience={experience}
                  />
                ))}{' '}
              </Fragment>
            ) : (
              <h4>No experience credentials</h4>
            )}
          </div>
          <div className="description">
            <h2 className="text-primary">Education</h2>
            {education.length > 0 ? (
              <Fragment>
                {education.map((education) => (
                  <ProfileEducation
                    key={education._id}
                    experience={education}
                  />
                ))}{' '}
              </Fragment>
            ) : (
              <h4>No Education credentials</h4>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;
