import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import Container from "@material-ui/core/Container"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import NextIcon from "@material-ui/icons/NavigateNext"
import SkipNext from "@material-ui/icons/SkipNext"
import { S3Url } from "../../helpers.js"

const useStyles = makeStyles((theme) => ({
  bgImage: {
    display: "block",
    position: "relative",
    width: "80%",
    left: "10%",
    overflow: "auto",
  },
  animatedText: {
    ...theme.typography.body1,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    flexGrow: 1,
  },
  textContainer: {
    position: "fixed",
    bottom: "2%",
    left: "9.5%",
    width: "80%",
    zIndex: 10,
  },
  textBox: {
    border: "1px solid white",
    opacity: 0.9,
    borderImage:
      "url(" +
      S3Url +
      "/yellow_message_frame.png) 75 70 40 40 / 75 70 40 40 / 40 4 4 4",
  },
  skipButton: {},
}))

// textbox at bottom of screen for advanceable dialogue
// usage: <DialogueBox data={text.sampleDialogue} />
// see sampleText.json for examples of format
export default function DialogueBox(props) {
  const classes = useStyles()
  const { data, style, repeat, clickToggle = false, onEnd = () => {} } = props
  const [textIdx, setTextIdx] = React.useState(-1) // index for advancing dialogue
  const [letterIdx, setLetterIdx] = React.useState(1) // index for animating text
  const [cnt, setCnt] = React.useState(0) // number of times played

  React.useEffect(() => {
    if (!clickToggle) {
      play()
    } else return
  }, [])

  // animate text with typewriter effect
  React.useEffect(() => {
    if (
      textIdx === -1 ||
      textIdx >= data.text.length ||
      letterIdx >= data.text[textIdx].length + 1
    ) {
      return
    }

    const timeout = setTimeout(() => {
      setLetterIdx((prev) => prev + 1)
    }, 10)

    return () => clearTimeout(timeout)
  }, [textIdx, letterIdx, data.text])

  const advanceDialogue = (e) => {
    if (
      e.type === "click" ||
      (e.type === "keydown" &&
        (e.key === "Space" || e.key === "Enter" || e.key === "KeyF"))
    ) {
      setTextIdx((prev) => prev + 1)
      setLetterIdx(1)
    }
  }

  const getImage = (imageName) => (
    <div>
      <img
        // src={require(`../../images/${imageName}`).default} // for local img
        src={S3Url + "/" + imageName}
        alt="background"
        className={classes.bgImage}
      />
    </div>
  )

  const display = () => {
    if (textIdx === data.text.length) onEnd()
    return textIdx !== -1 && textIdx < data.text.length
  }

  const play = () => {
    if (!repeat && cnt > 0) return
    setTextIdx(0)
    setLetterIdx(1)
    setCnt((prev) => prev + 1)
  }

  const skip = () => {
    setTextIdx(data.text.length)
  }

  return (
    <>
      {clickToggle && <div style={style} onClick={play} />}

      {display() && (
        <>
          <div>
            {data.BGImage && getImage(data.BGImage[textIdx])}

            <Container maxWidth="xl" className={classes.textContainer}>
              <Button
                onClick={skip}
                className={classes.skipButton}
                endIcon={<SkipNext />}
              >
                Skip
              </Button>
              <Card
                square
                onKeyDown={advanceDialogue} // TODO: onKeyDown doesn't work
                raised
                className={classes.textBox}
                tabIndex={-1}
              >
                <CardContent style={{ display: "flex" }}>
                  <div className={classes.animatedText}>
                    {data.text[textIdx].substring(0, letterIdx)}
                  </div>
                  <IconButton
                    onClick={advanceDialogue}
                    edge="end"
                    color="inherit"
                    size="small"
                  >
                    <NextIcon />
                  </IconButton>
                </CardContent>
              </Card>
            </Container>
          </div>
        </>
      )}
    </>
  )
}
