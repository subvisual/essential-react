import React from 'react';
import { Link } from 'react-router'
import styles from './Home.css';

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <Link to="/landing">Go to Home</Link>
      </div>
    );
  }
}
