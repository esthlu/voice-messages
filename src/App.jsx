import React from 'react';
import { ReactMic } from '@cleandersonlobo/react-mic';

import './css/App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRecording: false,
      recording: null,
    };
  }

  render() {
    let {
      isRecording,
      recording,
    } = this.state;

    console.log("recording", recording)

    return (
      <div id="App">
        <button className={`record ${isRecording ? "stop" : "start"}`} onClick={this.handleClickRecord}>
          {isRecording ? (
            <i className="material-icons">stop</i>
          ) : (
            <i className="material-icons">mic</i>
          )}
        </button>

        <ReactMic
          record={isRecording}
          className={isRecording ? "" : "hidden"}
          onStop={this.handleStop}
          // onData={function}
          strokeColor={'#197278'}
          backgroundColor={'#FFFFFF'}
          mimeType="audio/mp3"
        />

        {recording && (
          <audio src={recording.blobURL} type="audio/mpeg" />
        )}

      </div>
    );
  }

  handleClickRecord = () => {
    this.setState({ isRecording: !this.state.isRecording });
  }

  handleStop = (recordedBlob) => {
    console.log('recordedBlob is: ', recordedBlob);
    this.setState({ recording: recordedBlob })
  }
}
