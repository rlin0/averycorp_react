import React, { Component } from "react"
import styles from "./styles.module.css"
import { S3Url, getBit, masterPW } from "../../helpers.js"
import LockModal from "../UI/LockModal"
import FeedbackBar from "../UI/FeedbackBar"
import FeedbackBarToggle from "../UI/FeedbackBarToggle"
import txt from "../../text/er.json"
import ZoomModal from "../UI/ZoomModal"
import { Link } from "react-router-dom"

const mc = {
  left: "82.25%",
  top: "63.75%",
  width: "2.58%",
  height: "3.88%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const hallway1 = {
  left: "16.67%",
  top: "91%",
  width: "18.08%",
  height: "8.88%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const map = {
  left: "8%",
  top: "45.13%",
  width: "15.83%",
  height: "11.13%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const cities = {
  left: "28.17%",
  top: "39.63%",
  width: "23.08%",
  height: "23.88%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const paper = {
  left: "26.33%",
  top: "74.13%",
  width: "6.08%",
  height: "5%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const can = {
  left: "4.33%",
  top: "83.13%",
  width: "5.58%",
  height: "10.5%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const plant = {
  left: "15.75%",
  top: "65.5%",
  width: "6.58%",
  height: "16.88%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const statue = {
  left: "88.58%",
  top: "58.5%",
  width: "7.92%",
  height: "38.63%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const pics = [
  "bigben",
  "hagia",
  "wall",
  "colosseum",
  "canald",
  "rio",
  "triangle",
  "world-map-numbered",
]

export default class Merchant extends Component {
  constructor(props) {
    super(props)
    this.state = { mapClick: false, citiesClick: false }
  }

  handleScanningModalSubmit = (code) => {
    if (code === masterPW || code === "86712") {
      this.props.putScanningUnlocked()
      return true
    } else return false
  }

  handleMCClick = () => {
    this.props.putMCMerchant(1)
  }

  render() {
    return (
      <>
        <img src={`${S3Url}/er/Merchant.png`} width="100%" />
        <ZoomModal style={paper}>
          <img
            src={`${S3Url}/er/merchant_list.png`}
            alt="merchant list"
            width="800px"
            height="auto"
          />
        </ZoomModal>
        {!getBit(this.props.mcMerchant, 1) && (
          <img
            src={`${S3Url}/er/mc_merchant.png`}
            style={mc}
            alt="chip"
            onClick={this.handleMCClick}
          />
        )}

        <div style={map} onClick={() => this.setState({ mapClick: true })} />
        {this.state.mapClick && (
          <FeedbackBar
            text={txt.map}
            closed={() => this.setState({ mapClick: false })}
          />
        )}
        <div
          style={cities}
          onClick={() => this.setState({ citiesClick: true })}
        />
        {pics.map((it) => {
          return (
            <ZoomModal className={styles[it]}>
              <img
                src={`${S3Url}/er/${it}.jpg`}
                alt={it}
                width="800px"
                height="auto"
              />
            </ZoomModal>
          )
        })}

        {this.state.citiesClick && (
          <FeedbackBar
            text={txt.cities}
            closed={() => this.setState({ citiesClick: false })}
          />
        )}
        <FeedbackBarToggle style={can} text={txt.can} />
        <FeedbackBarToggle style={plant} text={txt.plant} />
        <FeedbackBarToggle style={statue} text={txt.statueRed} />

        {this.props.scanningUnlocked ? (
          <ZoomModal className={styles.scanningDevice}>
            <img
              src={`${S3Url}/er/statue_yellow.png`}
              alt="yellow statue"
              height="500px"
              width="auto"
            />
          </ZoomModal>
        ) : (
          <LockModal
            className={styles.scanningDevice}
            handleSubmit={this.handleScanningModalSubmit}
            display={
              <img
                src={`${S3Url}/er/statue_yellow.png`}
                alt="yellow statue"
                height="500px"
                width="auto"
              />
            }
          />
        )}

        <Link to="/er/Hallway1" style={hallway1} />
      </>
    )
  }
}
