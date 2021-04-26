import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import NextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles((theme) => ({
  bgImage: {
    display: 'block',
    position: 'relative',
    width: '80%',
    height: 'auto',
    margin: 'auto',
  },
  animatedText: {
    ...theme.typography.body1,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    flexGrow: 1,
  },
  textBox: {
    border: '2px solid white',
  },
}));

// textbox at bottom of screen for advanceable dialogue
// usage: <DialogueBox data={text.sampleDialogue} />
// see sampleText.json for examples of format
export default function DialogueBox(props) {
  const classes = useStyles();
  const { data } = props;
  const [textIdx, setTextIdx] = React.useState(0); // index for advancing dialogue
  const [letterIdx, setLetterIdx] = React.useState(1); // index for animating text

  // animate text with typewriter effect
  React.useEffect(() => {
    if (
      textIdx === data.text.length ||
      letterIdx === data.text[textIdx].length + 1
    )
      return;

    const timeout = setTimeout(() => {
      setLetterIdx((prev) => prev + 1);
    }, 30);

    return () => clearTimeout(timeout);
  }, [textIdx, letterIdx, data.text]);

  const advanceDialogue = (e) => {
    if (
      e.type === 'click' ||
      (e.type === 'keydown' &&
        (e.key === 'Space' || e.key === 'Enter' || e.key === 'KeyF'))
    ) {
      setTextIdx((prev) => prev + 1);
      setLetterIdx(1);
    }
  };

  const getImage = (imageName) => {
    return (
      <div>
        <img
          src={require(`../../images/${imageName}`).default}
          alt="background"
          class="center"
          className={classes.bgImage}
        />
      </div>
    );
  };

  return (
    textIdx < data.text.length && (
      <>
        {data.BGImage && getImage(data.BGImage[textIdx])}
        <Container
          maxWidth="xl"
          style={{
            position: 'fixed',
            bottom: '2%',
            left: '5%',
            width: '90%',
          }}
        >
          <div>
            <Card
              square={true}
              onKeyDown={advanceDialogue} // TODO: onKeyDown doesn't work
              raised={true}
              className={classes.textBox}
            >
              <CardContent style={{ display: 'flex' }}>
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
    )
  );
}
