import React from 'react';
import { Link } from 'react-router'
import styles from './Landing.css';

export default class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Landing Page</h1>
        <Link to="/">Go to Home</Link>
      </div>
    );
  }
}
