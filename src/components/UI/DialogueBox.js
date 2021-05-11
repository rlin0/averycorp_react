import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import Container from "@material-ui/core/Container"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import NextIcon from "@material-ui/icons/NavigateNext"

const useStyles = makeStyles((theme) => ({
  bgImage: {
    display: "block",
    position: "absolute",
    width: "80%",
    height: "auto",
    margin: "auto",
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
    left: "5%",
    width: "90%",
    zIndex: 10,
  },
  textBox: {
    border: "2px solid white",
  },
}))

// textbox at bottom of screen for advanceable dialogue
// usage: <DialogueBox data={text.sampleDialogue} />
// see sampleText.json for examples of format
export default function DialogueBox(props) {
  const classes = useStyles()
  const { data, style, repeat } = props
  const [textIdx, setTextIdx] = React.useState(-1) // index for advancing dialogue
  const [letterIdx, setLetterIdx] = React.useState(1) // index for animating text
  const [cnt, setCnt] = React.useState(0) // number of times played

  // animate text with typewriter effect
  React.useEffect(() => {
    if (
      textIdx === -1 ||
      textIdx === data.text.length ||
      letterIdx === data.text[textIdx].length + 1
    )
      return

    const timeout = setTimeout(() => {
      setLetterIdx((prev) => prev + 1)
    }, 30)

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
        src={require(`../../images/${imageName}`).default}
        alt="background"
        className="center"
        className={classes.bgImage}
      />
    </div>
  )

  const play = () => {
    if (!repeat && cnt > 0) return
    setTextIdx(0)
    setLetterIdx(1)
    setCnt((prev) => prev + 1)
  }

  return (
    <>
      <div style={style} onClick={play} />

      {textIdx !== -1 && textIdx < data.text.length && (
        <>
          {data.BGImage && getImage(data.BGImage[textIdx])}
          <Container maxWidth="xl" className={classes.textContainer}>
            <div>
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
            </div>
          </Container>
        </>
      )}
    </>
  )
}
