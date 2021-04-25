import React, { Component } from 'react';
import img from '../images/map.png';
import CssBaseline from '@material-ui/core/CssBaseline';
import axios from 'axios';

export default class Map extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: null,
            desc: null,
            solved_puzzles: 0,
            solved: 0
        }
    }

    componentDidMount() {
        this.getSolvedPuzzles();
    }

    handleMouseEnter = (e) => {
        const id = parseInt(e.target.getAttribute("alt"))
        this.setState({
            name: e.target.getAttribute("title"),
            desc: e.target.getAttribute("alt"),
            solved: this.state.solved_puzzles & (1 << (id - 1))
        })
    }

    handleMouseLeave = (e) => {
        this.setState({
            name: null,
            desc: null,
            solved: 0
        })
    }

    getSolvedPuzzles = () => {
        axios
            .get(`/api/team/${this.props.teamId}/`)
            .then((res) => {
                this.setState({
                    solved_puzzles: parseInt(res.data.puzzles_done),
                });
            })
            .catch((err) => {
                console.error(err);
            });
    }

    render() {
        return (
            <>
                <CssBaseline />
                {/* Image Map Generated by https://12oss.github.io/linkresponsively/ */}
                <div style={{ float: "left", position: "relative", width: "70%" }}>
                    <img src={img} width="100%" />
                    <a href="/" style={{ width: "20.2%", height: "17.3%", left: "45.0%", top: "31.8%", position: "absolute", cursor: "pointer", display: "block", zIndex: "5", overflow: "hidden" }}
                        onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}></a>
                    <a href="/puzzle" style={{ width: "19.3%", height: "16.5%", left: "4.8%", top: "63.6%", position: "absolute", cursor: "pointer", display: "block", zIndex: "5", overflow: "hidden" }}
                        onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}></a>
                </div>
                <div style={{ float: "right", marginRight: "100px" }}>
                    <h3>{this.state.name}</h3>
                    <p>{this.state.desc}</p>
                    {this.state.solved === 1 ? (
                        <p>Solved!</p>
                    ) : (
                        <p> Not solved</p>
                    )}
                </div>

            </>
        )
    }
}
