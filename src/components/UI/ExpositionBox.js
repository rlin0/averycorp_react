import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import MuiDialogTitle from "@material-ui/core/DialogTitle"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import CloseIcon from "@material-ui/icons/Close"

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
})

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  )
})

// large scrolling text box for longer text such as story
// usage: <ExpositionBox title="Title" text={longText} />
export default function ExpositionBox(props) {
  const { title, text } = props
  const [open, setOpen] = React.useState(true)

  const handleClose = () => {
    setOpen(false)
  }

  const descriptionElementRef = React.useRef(null)
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef
      if (descriptionElement !== null) {
        descriptionElement.focus()
      }
    }
  }, [open])

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll="paper"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        {title && (
          <DialogTitle id="scroll-dialog-title" onClose={handleClose}>
            {title}
          </DialogTitle>
        )}
        <DialogContent dividers>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {text}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  )
}
