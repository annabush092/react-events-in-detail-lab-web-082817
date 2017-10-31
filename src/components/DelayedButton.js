// Code DelayedButton Component Here
import React from 'react';

export default class DelayedButton extends React.Component {
  handleOnClick(ev) {
    ev.persist();
    setTimeout(x => (this.props.onDelayedClick(ev)), this.props.delay)
  }

  render() {
    return <button onClick={this.handleOnClick.bind(this)}></button>
  }
}
