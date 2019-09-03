import React from 'react';
import '../stylesheets/components/RecordButton.css';

var cn = require('classnames');

class RecordButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recording: false
    }
  }

  render () {
    let { recording } = this.state

    return (
      <div className="record">
        <button className={cn(recording ? "stop" : "start")} onClick={this.handleClick}>
          <i className="material-icons">{recording ? "stop" : "chat_bubble_outline"}</i>
        </button>
      </div>
    )
  }

  handleClick = () => {
    this.setState({ recording: !this.state.recording })
  }
}

export default RecordButton;
