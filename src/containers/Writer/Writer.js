import React, { Component } from "react";
import annyang from "annyang";
import Instructions from "../../components/Instructions/Instructions";
import classes from "./Writer.module.css";

class Writer extends Component {
  constructor(props) {
    super(props);

    this.textArea = React.createRef();

    this.state = {
      text: "",
      isRecording: false,
      show: false
    };
  }

  componentDidMount() {
    if (annyang) {
      annyang.addCallback("result", userSaid => {
        this.handleVoiceInput(this.textParser(userSaid[0]));
      });
    }
  }
  startRecording = () => {
    annyang.start();
    this.setState({ isRecording: true });
  };

  stopRecording = () => {
    annyang.pause();
    this.setState({ isRecording: false });
  };

  handleTextInput = event => {
    console.log(event.target);
  };

  handleVoiceInput = text => {
    const newText = this.state.text.slice(0) + " " + text;
    this.setState({ text: newText });
    this.textArea.current.scrollTop = this.textArea.current.scrollHeight;
  };

  textParser = text => {
    if (text.includes("/.")) {
      text = text.replace("/.", "period");
    }

    if (text.includes("/,")) {
      text = text.replace("/,", "comma");
    }

    if (text.includes("/!")) {
      text = text.replace("/!", "exclamation point");
    }

    return text;
  };

  render() {
    console.log(this.state.text);
    return (
      <>
        <div className={classes.Writer}>
          <div className={classes.ButtonDiv}>
            <button
              className={classes.StartButton}
              onClick={this.startRecording}
              disabled={this.state.isRecording}
            >
              Start Writing
            </button>
            <button
              className={classes.StopButton}
              onClick={this.stopRecording}
              disabled={!this.state.isRecording}
            >
              Stop Writing
            </button>
          </div>
          <div className={classes.TextBoxDiv}>
            <textarea
              ref={this.textArea}
              className={classes.TextArea}
              value={this.state.text}
              onChange={event => this.setState({ text: event.target.value })}
            />
          </div>
          <div className={classes.InstructionButtonDiv}>
            <button onClick={() => this.setState({ show: true })}>
              Instructions
            </button>
          </div>
        </div>
        <Instructions
          show={this.state.show}
          closed={() => this.setState({ show: false })}
        />
      </>
    );
  }
}

export default Writer;
