import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import Container from "@material-ui/core/Container"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import NextIcon from "@material-ui/icons/DoubleArrow"
import SkipNext from "@material-ui/icons/SkipNext"
import { S3Url } from "../../helpers.js"

const useStyles = makeStyles((theme) => ({
  bgImage: {
    display: "block",
    position: "fixed",
    width: "80%",
    left: "10%",
    overflow: "auto",
    zIndex: "1",
  },
  charImage: {
    position: "fixed",
    zIndex: "10",
    height: "80%",
    left: "55%",
    bottom: "10%",
  },
  animatedText: {
    ...theme.typography.body1,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    flexGrow: 1,
  },
  textContainer: {
    position: "fixed",
    display: "inline-block",
    bottom: "2%",
    left: "9.5%",
    width: "80%",
    zIndex: 10,
  },
  textBox: {
    border: "1px solid white",
    opacity: 0.95,
    borderImage:
      "url(" +
      S3Url +
      "/yellow_message_frame_left.png) 70 70 40 40 / 70 70 40 40 / 35 4 4 4", // slice width outset
  },
  skipButton: {
    display: "inline-block",
    textAlign: "right",
    width: "100%",
  },
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
  const [audio, setAudio] = React.useState(false)

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
    }, 9)

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
    if (!audio) {
      const audioEl = document.getElementsByClassName("audio")[0]
      if (audioEl) audioEl.play()
    }
  }

  const getImage = (imageName, className) => (
    <div>
      <img
        // src={require(`../../images/${imageName}`).default} // for local img
        src={S3Url + "/" + imageName}
        alt="background"
        className={className}
      />
    </div>
  )

  const display = () => {
    if (textIdx === data.text.length) {
      onEnd()
      setTextIdx((prev) => prev + 1)
    }
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
            {data.audio && (
              <audio autoPlay className="audio">
                <source src={S3Url + "/" + data.audio} type="audio/wav" />
              </audio>
            )}

            {data.BGImage && getImage(data.BGImage[textIdx], classes.bgImage)}

            {data.speaker &&
              data.speaker[textIdx] &&
              getImage(data.speaker[textIdx], classes.charImage)}

            <Container maxWidth="xl" className={classes.textContainer}>
              <div className={classes.skipButton}>
                <Button onClick={skip} endIcon={<SkipNext />}>
                  Skip
                </Button>
              </div>
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
                    size="medium"
                    variant="contained"
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
