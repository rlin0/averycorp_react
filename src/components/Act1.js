import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Button, Typography, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';

const styles = {
    root: {
        margin: 1,
        width: '25ch',
    },
};

class Act1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: [null, null, null],
            prompts: undefined,
        };
    };

    componentDidMount() {
        this.getPrompts();
    }

    valid = element => {
        return /^([a-zA-Z0-9]{1,})$/.test(element);
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const lst = this.state.fields.reduce((accumulator, cur) => {
            return [...accumulator, cur];
        }, []);
        if (lst.every(this.valid)) {
            alert('valid text: ' + lst.join())
            axios
                .post('/api/madlib/post', { userId: this.props.userId, fields: lst.join() })
                .then((res) => {
                    if (res.data.success) {
                        console.log('success');
                    } else {
                        alert('error posting');
                    }
                    console.log(res.data);
                })
                .catch((err) => {
                    console.error(err);
                });
        }
        else alert('invalid text: ' + lst.join());

    };

    handleInput = evt => {
        const name = evt.target.id;
        const newValue = evt.target.value;
        let fields = [...this.state.fields];
        fields[parseInt(name)] = newValue;
        this.setState({ fields });
    };

    getPrompts = () => {
        axios
            .get('/api/madlib/get_prompt', {
                params: {
                    userId: this.props.userId
                }
            })
            .then((res) => {
                if (res.data.success) {
                    console.log('success prompt');
                    this.setState({
                        prompts: res.data.prompts.split(",")
                    });
                } else {
                    console.log('error getting prompt');
                }
                console.log(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    };


    render() {
        if (this.state.prompts === undefined) return (
            <>
                <CssBaseline />
                <p>Loading</p>
            </>
        )
        return (
            <>
                <CssBaseline />
                <Typography variant="h1"> Madlibs! </Typography>
                <form onSubmit={this.handleSubmit} className={this.props.classes.root} noValidate autoComplete="off">
                    {this.state.prompts.map((currentValue, index) => {
                        return <TextField
                            id={index.toString()}
                            key={index.toString()}
                            label={currentValue}
                            onChange={this.handleInput}
                        />
                    })}
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        Submit
                    </Button>
                </form>
            </>
        );
    }
}
export default withStyles(styles)(Act1);
