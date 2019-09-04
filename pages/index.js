import React from 'react';
import Link from 'next/link';
import Modal from '../components/modal';
import Layout from '../components/layout';

import {withAuthSync} from '../utils/auth';

class Home extends React.Component {
  state = {isShowingModal: false, isCompleted: false};
  handleButtonClick = () =>
    this.setState({
      isCompleted: false,
      isShowingModal: !this.state.isShowingModal,
    });
  openVerifyFlow = () => {
    window.open('https://gelato.corp.stripe.com/start/?token=LYDxssvZX217');
    window.setTimeout(() => this.setState({isCompleted: true}), 1000);
  };
  render() {
    const {isShowingModal, isCompleted} = this.state;
    return (
      <Layout width="full" isAuthenticated={this.props.isAuthenticated}>
        <div className="home">
          <div className="splash-image">
            <div className="popover">
              <h1>Book unique places to stay and things to do.</h1>

              <img src="/static/booking_form.png" className="booking-form" />

              <Link href="/listing">
                <a className="btn btn-primary">Show listings</a>
              </Link>
            </div>
          </div>
        </div>
        <style jsx>{`
          .home {
            width: 100%;
            position: absolute;
            top: 110px;
            left: 0;
            right: 0;
            bottom: 0;
          }
          .splash-image {
            width: 100%;
            height: 100%;
            position: relative;
            object-fit: cover;
            vertical-align: bottom;

            background: url(https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3153&q=80)
              no-repeat;
            background-size: cover;
            background-position: center center;
          }

          .popover {
            position: absolute;
            top: 100px;
            left: 100px;
            padding: 40px;

            width: 500px;
            max-width: 500px;
          }

          .booking-form {
            width: 100%;
            margin: 20px 0;
          }
        `}</style>
      </Layout>
    );
  }
}

export default withAuthSync(Home);