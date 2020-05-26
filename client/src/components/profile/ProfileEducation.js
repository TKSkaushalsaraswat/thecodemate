import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileEducation = ({
  experience: { school, degree, fieldofstudy, current, to, from, description },
}) => {
  return (
    <div className="description-details">
      <h3>{school}</h3>
      <p className="date">
        <Moment format="YYYY/MM/DD">{from}</Moment> -{' '}
        {!to ? 'Now' : <Moment format="YYYY/MM/DD">{to}</Moment>}
      </p>
      <p>
        <strong>Degree: </strong> {degree}
      </p>
      <p>
        <strong>Field of Study: </strong> {fieldofstudy}
      </p>
      <p className="paragraph">
        <strong>Description: </strong> {description}
      </p>
    </div>
  );
};

ProfileEducation.propTypes = {
  experience: PropTypes.array.isRequired,
};

export default ProfileEducation;
