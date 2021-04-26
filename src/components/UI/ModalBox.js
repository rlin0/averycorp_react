import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import NextIcon from '@material-ui/icons/NavigateNext';
import './DialogueBox.css';

//medium modal box for displaying important info such as puzzle desc
export default class ModalBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idx: 0, // index for advancing dialogue
      currImage: null,
    };
    this.advanceDialogue = this.advanceDialogue.bind(this);
  }

  advanceDialogue(e) {
    if (
      e.type === 'click' ||
      (e.type === 'keydown' &&
        (e.key === 'Space' || e.key === 'Enter' || e.key === 'KeyF'))
    ) {
      this.setState((state) => ({
        idx: state.idx + 1,
      }));
    }
  }

  getImage = (imageName) => {
    return (
      <div>
        <img
          src={require(`../../images/${imageName}`).default}
          alt="background"
          class="center"
          style={{
            display: 'block',
            position: 'relative',
            width: '80%',
            height: 'auto',
            margin: 'auto',
          }}
        />
      </div>
    );
  };

  render() {
    return (
      this.state.idx < this.props.data.text.length && (
        <>
          {this.getImage(this.props.data.backgroundImage[this.state.idx])}
          <Container
            maxWidth="xl"
            style={{
              position: 'fixed',
              bottom: '2%',
            }}
          >
            <Card
              square={true}
              onKeyDown={this.advanceDialogue} // TODO: onKeyDown doesn't work
              raised={true}
              style={{
                border: '2px solid white',
              }}
            >
              <CardContent style={{ display: 'flex' }}>
                <Typography
                  style={{
                    display: 'inline-block',
                    animation: 'typing 5s steps(60, end)', // TODO: doesn't work
                  }}
                >
                  {this.props.data.text[this.state.idx]}
                </Typography>
                <IconButton
                  onClick={this.advanceDialogue}
                  edge="end"
                  color="inherit"
                  size="small"
                >
                  <NextIcon />
                </IconButton>
              </CardContent>
            </Card>
          </Container>
        </>
      )
    );
  }
}
