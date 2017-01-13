import React, {Component, PropTypes} from 'react';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import { DateField } from 'react-date-picker';
import { GeoFinder } from 'containers';
import 'react-date-picker/index.css';

// @connect(() => ({}),
//   dispatch => bindActionCreators(pickerActions, dispatch)
// )
export default
class Picker extends Component {
  static propTypes = {
    selectedTime: PropTypes.object.isRequired
  }

  state = {
    time: this.props.selectedTime
  }

  handleTimeSelect = (dateString, { dateMoment }) => {
    this.setState({time: dateMoment});
  }

  render() {
    const {selectedTime} = this.props;

    return (
      <div>
      <span>If it's this time where I am:</span>
        <DateField
          forceValidDate
          defaultValue={selectedTime}
          dateFormat="YYYY-MM-DD hh:mm a"
          onChange={this.handleTimeSelect}
        />
        <span>I want to know what time it will be in:</span>
        <GeoFinder />
      </div>
    );
  }
}
