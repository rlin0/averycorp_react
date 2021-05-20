import React from "react"
import Snackbar from "@material-ui/core/Snackbar"
import IconButton from "@material-ui/core/IconButton"
import CloseIcon from "@material-ui/icons/Close"

// small popup at bottom of screen that goes away on its own
// usage: <FeedbackBar text="Something has happened"/>
export default function FeedbackBarToggle(props) {
  const { text, style, className } = props
  const [open, setOpen] = React.useState(false)

  const handleClose = (event, reason) => {
    setOpen(false)
  }

  return (
    <div>
      {style ? (
        <div style={style} onClick={() => setOpen(true)} />
      ) : (
        <div className={className} onClick={() => setOpen(true)} />
      )}
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message={text}
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  )
}
