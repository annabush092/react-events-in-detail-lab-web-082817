// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component {
  handleClickEvent(ev) {
    let arr = [ev.clientX, ev.clientY]
    return this.props.onReceiveCoordinates(arr)
  }
  render() {
    return (
      <button onClick={this.handleClickEvent.bind(this)}></button>
    )
  }
}
