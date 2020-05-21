import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';

import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import DashboardAction from '../../components/dashboard/DashboardAction';
import Experience from './Experience';
import Education from './Education';

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <section class="container-dash form-box-3">
        <h1 className="large text-primary-dash">
          {' '}
          <i class="fab fa-buromobelexperte" aria-hidden="true"></i> User
          Dashboard
        </h1>
        <p className="lead-dash">
          <i className="fab fa-ioxhost" aria-hidden="true"></i> Welcome{' '}
          {user && user.name}
        </p>
        {profile !== null ? (
          <Fragment>
            <DashboardAction />
            <Experience experience={profile.experience} />
            <Education education={profile.education} />

            <div className="my-2">
              <button
                className="btn btn-danger"
                onClick={() => deleteAccount()}
              >
                <i class="fas fa-user-minus"></i> Delete My Account
              </button>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <p>You have not yet setup a profile, please add some info</p>
            <Link to="/create-profile" className="btn-dash">
              Create Profile
            </Link>
          </Fragment>
        )}
      </section>
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
