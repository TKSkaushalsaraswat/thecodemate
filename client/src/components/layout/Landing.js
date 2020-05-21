import React, { Fragment } from 'react';
import rellax from 'rellax';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <Fragment>
      <section className="bg-blue">
        <section class="section section-top">
          <div class="content" data-rellax-speed="5">
            <h1>Create simple and clean portfolio to showcase your spark</h1>
            <a href="#" class="btn-1 btn--white">
              Learn More
            </a>
          </div>
        </section>

        <section class="section section-stream blue-bg">
          <img
            class="play lang"
            src="https://i.ibb.co/Qm84H8W/web-technology-png-2.png"
            alt=""
            data-rellax-speed="-1"
            data-rellax-xs-speed="-5"
          />
          <div class="content rellax" data-rellax-speed="5">
            <div>
              <h2 class="secondary-text">Stream Everything</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                et dicta consectetur incidunt omnis nam quis quidem nisi ipsa
                deserunt.
              </p>
            </div>
            <div>
              <h2 class="secondary-text">Short is the New Long</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                et dicta consectetur incidunt omnis nam quis quidem nisi ipsa
                deserunt.
              </p>
            </div>
          </div>
        </section>

        <section class="section section-grid">
          <div class="rellax" data-rellax-speed="1" data-rellax-xs-speed="3">
            <i class="fas fa-video fa-3x secondary-text"></i>
            <h2>
              Watch<span class="secondary-text dot">.</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore et
              dicta consectetur incidunt omnis nam quis quidem nisi ipsa
              deserunt.
            </p>
          </div>
          <div class="rellax" data-rellax-speed="4" data-rellax-xs-speed="3">
            <i class="fas fa-users fa-3x secondary-text"></i>
            <h2>
              Share<span class="secondary-text dot">.</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore et
              dicta consectetur incidunt omnis nam quis quidem nisi ipsa
              deserunt.
            </p>
          </div>
          <div class="rellax" data-rellax-speed="7" data-rellax-xs-speed="3">
            <i class="fas fa-book fa-3x secondary-text"></i>
            <h2>
              Learn<span class="secondary-text dot">.</span>
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
