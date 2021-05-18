import React, { Component } from "react"
import Flow from "./Flow"

export class Puzzle0_1 extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let tileData = new Map()

    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        let s = "t" + i.toString() + "-" + j.toString()
        tileData.set(s, null)
      }
    }
    tileData.set("t1-1", "yellow")
    tileData.set("t1-2", "saddlebrown")
    tileData.set("t1-3", "orange")
    tileData.set("t1-5", "pink")
    tileData.set("t1-6", "tomato")
    tileData.set("t3-0", "cyan")
    tileData.set("t3-5", "orange")
    tileData.set("t5-2", "purple")
    tileData.set("t5-3", "saddlebrown")
    tileData.set("t5-5", "green")
    tileData.set("t5-6", "pink")
    tileData.set("t6-2", "cyan")
    tileData.set("t6-7", "tomato")
    tileData.set("t7-4", "purple")
    tileData.set("t8-0", "yellow")
    tileData.set("t8-8", "green")

    const answer = [
      ["cyan", "cyan", "cyan", "cyan", "cyan", "pink", "pink", "pink", "pink"],
      [
        "cyan",
        "yellow",
        "saddlebrown",
        "orange",
        "cyan",
        "pink",
        "tomato",
        "tomato",
        "pink",
      ],
      [
        "cyan",
        "yellow",
        "saddlebrown",
        "orange",
        "cyan",
        "cyan",
        "cyan",
        "tomato",
        "pink",
      ],
      [
        "cyan",
        "yellow",
        "saddlebrown",
        "orange",
        "orange",
        "orange",
        "cyan",
        "tomato",
        "pink",
      ],
      [
        "yellow",
        "yellow",
        "saddlebrown",
        "saddlebrown",
        "cyan",
        "cyan",
        "cyan",
        "tomato",
        "pink",
      ],
      [
        "yellow",
        "purple",
        "purple",
        "saddlebrown",
        "cyan",
        "green",
        "pink",
        "tomato",
        "pink",
      ],
      [
        "yellow",
        "purple",
        "cyan",
        "cyan",
        "cyan",
        "green",
        "pink",
        "tomato",
        "pink",
      ],
      [
        "yellow",
        "purple",
        "purple",
        "purple",
        "purple",
        "green",
        "pink",
        "pink",
        "pink",
      ],
      [
        "yellow",
        "purple",
        "purple",
        "purple",
        "purple",
        "green",
        "green",
        "green",
        "green",
      ],
    ]

    return (
      <div style={{ cursor: "default" }}>
        <Flow
          tileInitial={tileData}
          answer={answer}
          dim={9}
          solved={this.props.solved}
        />
      </div>
    )
  }
}

export class Puzzle0_2 extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let tileData = new Map()

    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        let s = "t" + i.toString() + "-" + j.toString()
        tileData.set(s, null)
      }
    }

    tileData.set("t0-0", "orange")
    tileData.set("t1-7", "blue")
    tileData.set("t3-1", "pink")
    tileData.set("t3-8", "yellow")
    tileData.set("t4-3", "orange")
    tileData.set("t4-6", "pink")
    tileData.set("t5-1", "cyan")
    tileData.set("t5-3", "tomato")
    tileData.set("t6-3", "saddlebrown")
    tileData.set("t6-6", "cyan")
    tileData.set("t7-0", "blue")
    tileData.set("t7-2", "saddlebrown")
    tileData.set("t7-4", "green")
    tileData.set("t8-0", "tomato")
    tileData.set("t8-2", "green")
    tileData.set("t8-5", "yellow")

    const answer = [
      [
        "orange",
        "orange",
        "orange",
        "orange",
        "orange",
        "orange",
        "orange",
        "orange",
        "orange",
      ],
      [
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "orange",
      ],
      [
        "blue",
        "pink",
        "pink",
        "pink",
        "pink",
        "pink",
        "pink",
        "orange",
        "orange",
      ],
      [
        "blue",
        "pink",
        "cyan",
        "cyan",
        "cyan",
        "cyan",
        "pink",
        "orange",
        "yellow",
      ],
      [
        "blue",
        "cyan",
        "cyan",
        "orange",
        "orange",
        "cyan",
        "pink",
        "orange",
        "yellow",
      ],
      [
        "blue",
        "cyan",
        "tomato",
        "tomato",
        "orange",
        "cyan",
        "cyan",
        "orange",
        "yellow",
      ],
      [
        "blue",
        "tomato",
        "tomato",
        "saddlebrown",
        "orange",
        "orange",
        "cyan",
        "orange",
        "yellow",
      ],
      [
        "blue",
        "tomato",
        "saddlebrown",
        "saddlebrown",
        "green",
        "orange",
        "orange",
        "orange",
        "yellow",
      ],
      [
        "tomato",
        "tomato",
        "green",
        "green",
        "green",
        "yellow",
        "yellow",
        "yellow",
        "yellow",
      ],
    ]
    return (
      <div style={{ cursor: "default" }}>
        <Flow
          tileInitial={tileData}
          answer={answer}
          dim={9}
          solved={this.props.solved}
        />
      </div>
    )
  }
}

export class Puzzle0_3 extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let tileData = new Map()

    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        let s = "t" + i.toString() + "-" + j.toString()
        tileData.set(s, null)
      }
    }

    // Board 3
    tileData.set("t0-6", "tomato")
    tileData.set("t0-7", "cyan")
    tileData.set("t0-8", "green")
    tileData.set("t1-1", "blue")
    tileData.set("t2-0", "saddlebrown")
    tileData.set("t2-3", "tomato")
    tileData.set("t3-3", "cyan")
    tileData.set("t4-1", "green")
    tileData.set("t4-7", "orange")
    tileData.set("t5-4", "fuchsia")
    tileData.set("t6-6", "yellow")
    tileData.set("t6-8", "yellow")
    tileData.set("t7-4", "green")
    tileData.set("t7-3", "saddlebrown")
    tileData.set("t7-6", "fuchsia")
    tileData.set("t7-7", "orange")
    tileData.set("t7-8", "purple")
    tileData.set("t8-0", "blue")
    tileData.set("t8-5", "purple")

    const answer = [
      [
        "saddlebrown",
        "saddlebrown",
        "saddlebrown",
        "tomato",
        "tomato",
        "tomato",
        "tomato",
        "cyan",
        "green",
      ],
      [
        "saddlebrown",
        "blue",
        "saddlebrown",
        "tomato",
        "cyan",
        "cyan",
        "cyan",
        "cyan",
        "green",
      ],
      [
        "saddlebrown",
        "blue",
        "saddlebrown",
        "tomato",
        "cyan",
        "green",
        "green",
        "green",
        "green",
      ],
      [
        "blue",
        "blue",
        "saddlebrown",
        "cyan",
        "cyan",
        "green",
        "yellow",
        "yellow",
        "yellow",
      ],
      [
        "blue",
        "green",
        "saddlebrown",
        "green",
        "green",
        "green",
        "yellow",
        "orange",
        "yellow",
      ],
      [
        "blue",
        "green",
        "saddlebrown",
        "green",
        "fuchsia",
        "fuchsia",
        "yellow",
        "orange",
        "yellow",
      ],
      [
        "blue",
        "green",
        "saddlebrown",
        "green",
        "green",
        "fuchsia",
        "yellow",
        "orange",
        "yellow",
      ],
      [
        "blue",
        "green",
        "saddlebrown",
        "saddlebrown",
        "green",
        "fuchsia",
        "fuchsia",
        "orange",
        "purple",
      ],
      [
        "blue",
        "green",
        "green",
        "green",
        "green",
        "purple",
        "purple",
        "purple",
        "purple",
      ],
    ]
    return (
      <div style={{ cursor: "default" }}>
        <Flow
          tileInitial={tileData}
          answer={answer}
          dim={9}
          solved={this.props.solved}
        />
      </div>
    )
  }
}

export class Puzzle0_4 extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let tileData = new Map()

    for (let i = 0; i < 14; i++) {
      for (let j = 0; j < 14; j++) {
        let s = "t" + i.toString() + "-" + j.toString()
        tileData.set(s, null)
      }
    }

    // Board 4
    tileData.set("t0-10", "purple")
    tileData.set("t0-13", "purple")
    tileData.set("t2-2", "yellow")
    tileData.set("t2-3", "green")
    tileData.set("t2-4", "orange")
    tileData.set("t2-5", "tomato")
    tileData.set("t3-10", "cyan")
    tileData.set("t3-11", "dodgerblue")
    tileData.set("t4-6", "orange")
    tileData.set("t4-7", "tomato")
    tileData.set("t4-10", "pink")
    tileData.set("t5-6", "cyan")
    tileData.set("t5-10", "blue")
    tileData.set("t7-2", "pink")
    tileData.set("t7-3", "gray")
    tileData.set("t7-11", "dodgerblue")
    tileData.set("t8-8", "steelblue")
    tileData.set("t8-10", "steelblue")
    tileData.set("t8-11", "saddlebrown")
    tileData.set("t9-1", "green")
    tileData.set("t9-9", "darkred")
    tileData.set("t10-1", "magenta")
    tileData.set("t10-5", "magenta")
    tileData.set("t10-7", "gray")
    tileData.set("t10-10", "darkred")
    tileData.set("t11-9", "blue")
    tileData.set("t11-10", "saddlebrown")
    tileData.set("t12-2", "olive")
    tileData.set("t12-7", "olive")
    tileData.set("t13-0", "yellow")

    const answer = [
      [
        "pink",
        "pink",
        "pink",
        "pink",
        "pink",
        "pink",
        "pink",
        "pink",
        "pink",
        "pink",
        "purple",
        "purple",
        "purple",
        "purple",
      ],
      [
        "pink",
        "gray",
        "gray",
        "gray",
        "gray",
        "gray",
        "gray",
        "gray",
        "gray",
        "pink",
        "pink",
        "pink",
        "pink",
        "pink",
      ],
      [
        "pink",
        "gray",
        "yellow",
        "green",
        "orange",
        "tomato",
        "tomato",
        "tomato",
        "gray",
        "gray",
        "gray",
        "gray",
        "gray",
        "pink",
      ],
      [
        "pink",
        "gray",
        "yellow",
        "green",
        "orange",
        "orange",
        "orange",
        "tomato",
        "cyan",
        "cyan",
        "cyan",
        "dodgerblue",
        "gray",
        "pink",
      ],
      [
        "pink",
        "gray",
        "yellow",
        "green",
        "green",
        "green",
        "orange",
        "tomato",
        "cyan",
        "pink",
        "pink",
        "dodgerblue",
        "gray",
        "pink",
      ],
      [
        "pink",
        "gray",
        "yellow",
        "yellow",
        "yellow",
        "green",
        "cyan",
        "cyan",
        "cyan",
        "pink",
        "blue",
        "dodgerblue",
        "gray",
        "pink",
      ],
      [
        "pink",
        "gray",
        "gray",
        "gray",
        "yellow",
        "green",
        "pink",
        "pink",
        "pink",
        "pink",
        "blue",
        "dodgerblue",
        "gray",
        "pink",
      ],
      [
        "pink",
        "pink",
        "pink",
        "gray",
        "yellow",
        "green",
        "pink",
        "blue",
        "blue",
        "blue",
        "blue",
        "dodgerblue",
        "gray",
        "pink",
      ],
      [
        "yellow",
        "yellow",
        "yellow",
        "yellow",
        "yellow",
        "green",
        "pink",
        "blue",
        "steelblue",
        "steelblue",
        "steelblue",
        "saddlebrown",
        "gray",
        "pink",
      ],
      [
        "yellow",
        "green",
        "green",
        "green",
        "green",
        "green",
        "pink",
        "blue",
        "blue",
        "darkred",
        "darkred",
        "saddlebrown",
        "gray",
        "pink",
      ],
      [
        "yellow",
        "magenta",
        "magenta",
        "magenta",
        "magenta",
        "magenta",
        "pink",
        "gray",
        "blue",
        "blue",
        "darkred",
        "saddlebrown",
        "gray",
        "pink",
      ],
      [
        "yellow",
        "pink",
        "pink",
        "pink",
        "pink",
        "pink",
        "pink",
        "gray",
        "gray",
        "blue",
        "saddlebrown",
        "saddlebrown",
        "gray",
        "pink",
      ],
      [
        "yellow",
        "pink",
        "olive",
        "olive",
        "olive",
        "olive",
        "olive",
        "olive",
        "gray",
        "gray",
        "gray",
        "gray",
        "gray",
        "pink",
      ],
      [
        "yellow",
        "pink",
        "pink",
        "pink",
        "pink",
        "pink",
        "pink",
        "pink",
        "pink",
        "pink",
        "pink",
        "pink",
        "pink",
        "pink",
      ],
    ]

    return (
      <div style={{ cursor: "default" }}>
        <Flow
          tileInitial={tileData}
          answer={answer}
          dim={14}
          solved={this.props.solved}
        />
      </div>
    )
  }
}

export class Puzzle0_5 extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let tileData = new Map()

    for (let i = 0; i < 15; i++) {
      for (let j = 0; j < 15; j++) {
        let s = "t" + i.toString() + "-" + j.toString()
        tileData.set(s, null)
      }
    }

    // Board 5
    tileData.set("t0-0", "magenta")
    tileData.set("t1-0", "orange")
    tileData.set("t1-1", "saddlebrown")
    tileData.set("t1-4", "magenta")
    tileData.set("t1-6", "orange")
    tileData.set("t1-13", "steelblue")
    tileData.set("t2-2", "gray")
    tileData.set("t3-0", "blue")
    tileData.set("t3-3", "tomato")
    tileData.set("t3-10", "saddlebrown")
    tileData.set("t5-8", "yellow")
    tileData.set("t6-0", "blue")
    tileData.set("t6-10", "maroon")
    tileData.set("t6-14", "tomato")
    tileData.set("t7-1", "steelblue")
    tileData.set("t7-13", "darkblue")
    tileData.set("t8-8", "green")
    tileData.set("t8-9", "cyan")
    tileData.set("t9-8", "cyan")
    tileData.set("t9-10", "olive")
    tileData.set("t9-12", "maroon")
    tileData.set("t10-9", "green")
    tileData.set("t10-14", "darkblue")
    tileData.set("t11-3", "yellow")
    tileData.set("t11-11", "pink")
    tileData.set("t12-2", "gray")
    tileData.set("t12-5", "olive")
    tileData.set("t12-11", "darkred")
    tileData.set("t12-13", "darkred")
    tileData.set("t13-9", "pink")
    tileData.set("t13-13", "purple")
    tileData.set("t14-5", "purple")

    const answer = [
      [
        "magenta",
        "magenta",
        "magenta",
        "magenta",
        "magenta",
        "tomato",
        "tomato",
        "tomato",
        "tomato",
        "tomato",
        "tomato",
        "tomato",
        "tomato",
        "tomato",
        "tomato",
      ],
      [
        "orange",
        "saddlebrown",
        "saddlebrown",
        "saddlebrown",
        "magenta",
        "tomato",
        "orange",
        "orange",
        "orange",
        "orange",
        "orange",
        "orange",
        "orange",
        "steelblue",
        "tomato",
      ],
      [
        "orange",
        "orange",
        "gray",
        "saddlebrown",
        "saddlebrown",
        "tomato",
        "tomato",
        "tomato",
        "tomato",
        "tomato",
        "tomato",
        "tomato",
        "orange",
        "steelblue",
        "tomato",
      ],
      [
        "blue",
        "orange",
        "gray",
        "tomato",
        "saddlebrown",
        "saddlebrown",
        "saddlebrown",
        "saddlebrown",
        "saddlebrown",
        "saddlebrown",
        "saddlebrown",
        "tomato",
        "orange",
        "steelblue",
        "tomato",
      ],
      [
        "blue",
        "orange",
        "gray",
        "tomato",
        "tomato",
        "tomato",
        "tomato",
        "tomato",
        "tomato",
        "tomato",
        "tomato",
        "tomato",
        "orange",
        "steelblue",
        "tomato",
      ],
      [
        "blue",
        "orange",
        "gray",
        "gray",
        "yellow",
        "yellow",
        "yellow",
        "yellow",
        "yellow",
        "orange",
        "orange",
        "orange",
        "orange",
        "steelblue",
        "tomato",
      ],
      [
        "blue",
        "orange",
        "orange",
        "gray",
        "yellow",
        "orange",
        "orange",
        "orange",
        "orange",
        "orange",
        "maroon",
        "maroon",
        "steelblue",
        "steelblue",
        "tomato",
      ],
      [
        "steelblue",
        "steelblue",
        "orange",
        "gray",
        "yellow",
        "orange",
        "olive",
        "olive",
        "olive",
        "olive",
        "olive",
        "maroon",
        "steelblue",
        "darkblue",
        "darkblue",
      ],
      [
        "steelblue",
        "orange",
        "orange",
        "gray",
        "yellow",
        "orange",
        "olive",
        "green",
        "green",
        "cyan",
        "olive",
        "maroon",
        "steelblue",
        "steelblue",
        "darkblue",
      ],
      [
        "steelblue",
        "orange",
        "gray",
        "gray",
        "yellow",
        "orange",
        "olive",
        "green",
        "cyan",
        "cyan",
        "olive",
        "maroon",
        "maroon",
        "steelblue",
        "darkblue",
      ],
      [
        "steelblue",
        "orange",
        "gray",
        "yellow",
        "yellow",
        "orange",
        "olive",
        "green",
        "green",
        "green",
        "steelblue",
        "steelblue",
        "steelblue",
        "steelblue",
        "darkblue",
      ],
      [
        "steelblue",
        "orange",
        "gray",
        "yellow",
        "orange",
        "orange",
        "olive",
        "steelblue",
        "steelblue",
        "steelblue",
        "steelblue",
        "pink",
        "pink",
        "pink",
        "pink",
      ],
      [
        "steelblue",
        "orange",
        "gray",
        "orange",
        "orange",
        "olive",
        "olive",
        "steelblue",
        "purple",
        "purple",
        "purple",
        "darkred",
        "darkred",
        "darkred",
        "pink",
      ],
      [
        "steelblue",
        "orange",
        "orange",
        "orange",
        "steelblue",
        "steelblue",
        "steelblue",
        "steelblue",
        "purple",
        "pink",
        "purple",
        "purple",
        "purple",
        "purple",
        "pink",
      ],
      [
        "steelblue",
        "steelblue",
        "steelblue",
        "steelblue",
        "steelblue",
        "purple",
        "purple",
        "purple",
        "purple",
        "pink",
        "pink",
        "pink",
        "pink",
        "pink",
        "pink",
      ],
    ]

    return (
      <div style={{ cursor: "default" }}>
        <Flow
          tileInitial={tileData}
          answer={answer}
          dim={15}
          solved={this.props.solved}
        />
      </div>
    )
  }
}
