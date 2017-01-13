import React, { Component, PropTypes } from 'react';
// import { asyncConnect } from 'redux-async-connect';


// @asyncConnect([{
//   promise: ({store: {dispatch, getState}}) => {
//     const promises = [];

//     if (!getState()) {
//       // promises.push(dispatch(fetchDepartures()));
//       promises.push('hi');
//     }

//     return Promise.all(promises);
//   }
// }])
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    const styles = require('./App.scss');

    return (
      <div className={styles.App}>
        <div className={styles.appContent}>
           {this.props.children}
        </div>
      </div>
    );
  }
}
