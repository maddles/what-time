import React, { Component } from 'react';
import { Picker } from 'containers';
import config from '../../config';

export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');
    const now = new Date();

    return (
      <div className={styles.home}>
            <h1>{config.app.title}</h1>
            <h2>{config.app.description}</h2>
            <Picker selectedTime={now}/>
      </div>
    );
  }
}
