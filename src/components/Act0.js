import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Button, Typography, TextField } from '@material-ui/core';
import DialogueBox from './UI/DialogueBox';
import text from '../text/sampleText';

class Act0 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: [null, null, null],
      prompts: undefined,
    };
  }

  render() {
    return (
      <>
        <CssBaseline />
        <DialogueBox data={text.sampleDialogue} />
      </>
    );
  }
}
export default Act0;
