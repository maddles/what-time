import React, {Component, PropTypes} from 'react';

// @connect(() => ({}),
//   dispatch => bindActionCreators(pickerActions, dispatch)
// )
export default
class GeoFinder extends Component {
  static propTypes = {
    selectedTime: PropTypes.object.isRequired
  }

  state = {
    time: this.props.selectedTime
  }

  handleTimeSelect = (dateString, { dateMoment }) => {
    console.log(dateString, dateMoment);
    this.setState({time: dateMoment});
  }

  render() {
    const {selectedTime} = this.props;
    console.log(selectedTime);
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
      </div>
    );
  }
}
