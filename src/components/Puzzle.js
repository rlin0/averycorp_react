import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Button, Typography, TextField } from '@material-ui/core';
import axios from 'axios';

class Puzzle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: null,
            link: null,
            name: null,
            solved: false,
        };
    };

    componentDidMount() {
        this.getLink();
        this.getSolved();
    };

    getLink = () => {
        axios
            .get(`/api/puzzle/${this.props.puzzleId}/`)
            .then((res) => {
                this.setState({
                    name: res.data.name,
                    link: res.data.link
                });
            })
            .catch((err) => {
                console.error(err);
            });
    };

    getSolved = () => {
        axios
            .get(`/api/puzzle/get_solved`, {
                params: {
                    userId: this.props.userId,
                    puzzleId: this.props.puzzleId
                }
            })
            .then((res) => {
                this.setState({
                    solved: res.data.solved
                });
                console.log(res)
            })
            .catch((err) => {
                console.error(err);
            });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        axios
            .post(`/api/puzzle/submit_answer`, {
                userId: this.props.userId,
                puzzleId: this.props.puzzleId,
                answer: this.state.answer
            })
            .then((res) => {
                if (res.data.success) {
                    if (res.data.msg === "correct") this.setState({ solved: true })
                    else if (res.data.msg === "incorrect") alert("incorrect! Try again in 5 minutes");
                    else if (res.data.msg === "later") alert("You are allowed 1 guess per 5 minutes! Try again later");
                }
                console.log(res)
            })
            .catch((err) => {
                console.log(err.response);
            });
    }



    render() {
        if (this.state.name === null) return (
            <>
                <CssBaseline />
                <p>Loading...</p>
            </>
        )
        return (
            <>
                <CssBaseline />
                <Typography variant="h3"> {this.state.name} </Typography>
                <iframe src={this.state.link} width="640" height="480"></iframe>;
                <form onSubmit={this.handleSubmit} noValidate autoComplete="off">

                    <TextField
                        label="Answer"
                        onChange={({ target }) => this.setState({ answer: target.value })}
                    />
                    {!this.state.solved &&
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                        >
                            Submit
                    </Button>}
                </form>
                {this.state.solved && <p>Solved!</p>}
            </>
        )
    };
};
export default Puzzle;
