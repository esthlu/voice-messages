import React from 'react';
import { ReactMic } from '@cleandersonlobo/react-mic';

import './css/App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRecording: false,
      recordedAudio: null,
    };
  }

  render() {
    let {
      isRecording,
      recordedAudio,
    } = this.state;

    console.log("recordedAudio", recordedAudio)

    return (
      <div id="App">
        {!recordedAudio && (
          <button className={`record ${isRecording ? "stop" : "start"}`} onClick={this.handleClickRecord}>
            {isRecording ? (
              <i className="material-icons">stop</i>
            ) : (
              <i className="material-icons">mic</i>
            )}
          </button>
        )}

        {!recordedAudio && (
          <ReactMic
            record={isRecording}
            className={isRecording ? "" : "hidden"}
            onStop={this.handleStop}
            // onData={function}
            strokeColor={'#197278'}
            backgroundColor={'#FFFFFF'}
            mimeType="audio/mp3"
          />
        )}

        {recordedAudio && (
          <audio controls>
            <source src={recordedAudio.blobURL} type="audio/mpeg" />
          </audio>
        )}

        {recordedAudio && (
          <div className="audio-options">
            <button className="cancel" onClick={this.handleCancel}>
              <i className="material-icons">cancel</i>
            </button>
            <button className="send">
              <i className="material-icons">send</i>
            </button>
          </div>
        )}

      </div>
    );
  }

  handleClickRecord = () => {
    this.setState({ isRecording: !this.state.isRecording });
  }

  handleStop = (blob) => {
    console.log('blob is: ', blob);
    this.setState({ recordedAudio: blob })
  }

  handleSendToSlack = () => {

  }

  handleCancel = () => {
    this.setState({ recordedAudio: null })
  }
}
