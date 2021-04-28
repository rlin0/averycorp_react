import React from "react"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"

// small popup alert
// usage: <AlertBox text="This is an alert." />
// <AlertBox title="Optional" text="WARNING" buttonText="Optional"/>
export default function AlertBox(props) {
  const { title, text, buttonText } = props
  const [open, setOpen] = React.useState(true)

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {title && <DialogTitle id="alert-dialog-title">{title}</DialogTitle>}
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {text}
          </DialogContentText>
        </DialogContent>
        <DialogActions
          style={{
            justifyContent: "center",
          }}
        >
          <Button onClick={handleClose} color="primary" autoFocus>
            {buttonText || "OK"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
