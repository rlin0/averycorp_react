import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import img from '../../images/MainRoom.png';
import { styles } from "../../styles";
import { Button, Typography, TextField } from '@material-ui/core';

export default class Main extends Component {
    render() {
        return (
            <>
                <CssBaseline />
                {/* Image Map Generated by http://www.image-map.net/ */}
                <div style={{ float: "left", position: "relative", width: "100%" }}>
                    <img src={img} width="100%" />
                    <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
                        <input type="text" style={{ backgroundColor: "red", width: "5.6%", height: "1.7%", left: "43.9%", top: "32.2%", position: "absolute", display: "block", zIndex: "5", overflow: "hidden" }}
                        />
                        <input type="text" style={{ backgroundColor: "green", width: "5.7%", height: "1.5%", left: "43.9%", top: "36.0%", position: "absolute", display: "block", zIndex: "5", overflow: "hidden" }}
                        />
                        <input type="text" style={{ backgroundColor: "blue", width: "5.7%", height: "1.5%", left: "43.9%", top: "38.9%", position: "absolute", display: "block", zIndex: "5", overflow: "hidden" }}
                        />
                    </form>
                </div>
            </>
        );
    }
}
