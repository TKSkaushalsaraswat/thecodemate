import React, { Fragment } from 'react';
import rellax from 'rellax';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from './../layout/Navbar';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <Fragment>
      <Navbar />
      <section className="bg-blue">
        <section className="section section-top">
          <div className="content" data-rellax-speed="5">
            <h1>Create simple and clean portfolio to showcase your spark</h1>
            <a href="#" className="btn-1 btn--white">
              Learn More
            </a>
          </div>
        </section>

        <section className="section section-stream blue-bg">
          <img
            className="play lang"
            src="https://i.ibb.co/Qm84H8W/web-technology-png-2.png"
            alt=""
            data-rellax-speed="-1"
            data-rellax-xs-speed="-5"
          />
          <div className="content rellax" data-rellax-speed="5">
            <div>
              <h2 className="secondary-text">Stream Everything</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                et dicta consectetur incidunt omnis nam quis quidem nisi ipsa
                deserunt.
              </p>
            </div>
            <div>
              <h2 className="secondary-text">Short is the New Long</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                et dicta consectetur incidunt omnis nam quis quidem nisi ipsa
                deserunt.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-grid">
          <div
            className="rellax"
            data-rellax-speed="1"
            data-rellax-xs-speed="3"
          >
            <i className="fas fa-video fa-3x secondary-text"></i>
            <h2>
              Watch<span className="secondary-text dot">.</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore et
              dicta consectetur incidunt omnis nam quis quidem nisi ipsa
              deserunt.
            </p>
          </div>
          <div
            className="rellax"
            data-rellax-speed="4"
            data-rellax-xs-speed="3"
          >
            <i className="fas fa-users fa-3x secondary-text"></i>
            <h2>
              Share<span className="secondary-text dot">.</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore et
              dicta consectetur incidunt omnis nam quis quidem nisi ipsa
              deserunt.
            </p>
          </div>
          <div
            className="rellax"
            data-rellax-speed="7"
            data-rellax-xs-speed="3"
          >
            <i className="fas fa-book fa-3x secondary-text"></i>
            <h2>
              Learn<span className="secondary-text dot">.</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore et
              dicta consectetur incidunt omnis nam quis quidem nisi ipsa
              deserunt.
            </p>
          </div>
        </section>

        <footer class="footer">
          <ul>
            <li>
              <a href="#">Faq</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Privacy Notice</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
          </ul>
        </footer>
      </section>
    </Fragment>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
