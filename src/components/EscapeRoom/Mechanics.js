import React, { Component } from 'react';
import { CssBaseline, Button, Typography, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import axios from 'axios';


export default class Mechanics extends Component {
    constructor(props) {
        super(props)
        this.state = {
            unlocked: false,
            open: false,
            answer: null,
            submitMsg: null,
        }
    }

    componentDidMount() {
        this.getUnlocked();
    }

    getUnlocked = () => {
        axios
            .get(`/api/er/me_get_unlocked`, {
                params: {
                    teamId: this.props.teamId,
                }
            })
            .then((res) => {
                this.setState({
                    unlocked: res.data.unlocked
                });
                console.log(res)
            })
            .catch((err) => {
                console.error(err);
            });
    };


    lockedCloset = () => {
        return (<div>
            <Button variant="outlined" onClick={this.handleClickOpen}>
                picture of lock
            </Button>
            <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Riddle</DialogTitle>
                <form onSubmit={this.handleSubmit} >
                    <DialogContent>
                        <DialogContentText>
                            Given eight eights (8, 8, 8, 8, 8, 8, 8, 8), you can arrange them to create any numbers you want and use +, -, *, or /. How can you get 1000?
                    </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            onChange={({ target }) => this.setState({ answer: target.value })}
                        />

                        {
                            this.state.submitMsg !== null &&
                            <DialogContentText>
                                {this.state.submitMsg}
                            </DialogContentText>
                        }
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose}>
                            Close
                    </Button>
                        <Button type="submit">
                            Submit
                    </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>)
    }

    unlockedCloset = () => {

    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        axios
            .post(`/api/er/me_unlock_closet`, {
                teamId: this.props.teamId,
                answer: this.state.answer
            })
            .then((res) => {
                if (res.data.success) {
                    if (res.data.msg === "correct") this.setState({
                        unlocked: true,
                        open: false,
                        submitMsg: null
                    })
                    else {
                        this.setState({ submitMsg: res.data.msg })
                    }
                }
            })
            .catch((err) => {
                console.log(err.response);
            });
    }

    render() {
        return (
            <>
                <CssBaseline />
                { this.state.unlocked ? this.unlockedCloset() : this.lockedCloset()}
            </>
        );
    }
}
