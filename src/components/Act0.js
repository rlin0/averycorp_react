import React, { Component } from "react"
import DialogueBox from "./UI/DialogueBox"
import FeedbackBar from "./UI/FeedbackBar"
import ModalBox from "./UI/ModalBox"
import ExpositionBox from "./UI/ExpositionBox"
import InputModal from "./UI/InputModal"
import text from "../text/sampleText"

class Act0 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fields: [null, null, null],
      prompts: undefined,
    }
  }

  render() {
    return (
      <>
        <FeedbackBar text="Something has happened" />
        {/* <ModalBox
          title="Puzzle Title"
          text="This gives you some info about your puzzle or the story background. If you click GO it will take you to the next page."
          buttonText="GO"
          buttonTo="/act1"
        /> */}
        {/* <ExpositionBox
          title="Title"
          text={[...new Array(50)]
            .map(() => 'I really just want to test this scrolling function.')
            .join('\n')}
        /> */}
        {/* <InputModal
          title="Input Form"
          text="You must enter a password to proceed."
          formLabel="password"
        /> */}
        <DialogueBox data={text.sampleDialogue} />
      </>
    )
  }
}
export default Act0
