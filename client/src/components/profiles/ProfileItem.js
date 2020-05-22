import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills,
  },
}) => {
  return (
    <div className="profile blue-bg">
      <img src={avatar} alt="" className="round-img" />
      <div>
        <h2 className="my-1">{name}</h2>
        <p className="my-1 profile-p">
          {status} {company && <span> at {company}</span>}
        </p>
        <p className="my-1 profile-p1 ">
          {location && <span>{location}</span>}
        </p>
        <Link to={`/profile/${_id}`} className="btn-1 btn--white">
          View Profile
        </Link>
      </div>
      <ul>
        {skills.slice(0, 4).map((skill, index) => (
          <li key={index} className="text-primary list-text">
            <i className="fas fa-graduation-cap"></i> {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
