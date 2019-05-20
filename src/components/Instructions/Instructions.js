import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./Instructions.module.css";

const instructions = props => {
  return (
    <>
      <Backdrop show={props.show} clicked={props.closed} />
      <div
        className={classes.Instructions}
        style={{
          transform: props.show ? "translateY(-15vh)" : "translateY(-100vh",
          opacity: props.show ? "1" : "0"
        }}
      >
        <h2>Instructions</h2>
        <ul>
          <li>
            "Click the 'Start Writing' button to start the dictation. Speak into
            you microphone to turn you voice to text and display it in the text
            box."
          </li>
          <li>"Click the 'Stop Writing' button to stop the dictation."</li>
          <li>
            "Currently, for punctuation, the symbols for commas, periods, and
            exclamation points take precedence over the words. (e.g. saying
            comma results in <span>','</span> over comma)"
          </li>
          <li>
            "If you need the word for comma, period, or exclamation point then
            you need to say 'slash' before you say the word. (e.g. saying slash
            comma results in comma over <span>','</span> )"
          </li>
        </ul>
      </div>
    </>
  );
};

export default instructions;
