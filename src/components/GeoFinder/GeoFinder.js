import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetch as fetchGeocode} from 'redux/modules/verifygeocode';

@connect(
    state => ({fetchGeocode})
    )
export default class Departures extends Component {
  handleRequestGeocode = (cityName) => {
    return this.props.dispatch(fetchGeocode(cityName));
  }

  render() {
    return (
      <div>
        <input />
        <button />
      </div>
    );
  }
}
