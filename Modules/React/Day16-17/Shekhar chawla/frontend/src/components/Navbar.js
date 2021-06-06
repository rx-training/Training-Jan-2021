import React from 'react'
import { Link } from 'react-router-dom'
import { CssBaseline, AppBar, Toolbar, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  }
}));

export default function Navbar() {
  const classes = useStyles()
    return (
      <>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
          <Button color="inherit" style={{ margin: "0 10px", textTransform: 'none' }}>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Typography variant="h6" style={{ color: '#ede7f6' }} noWrap>
                  Home
              </Typography>
              </Link>
            </Button>
            <Button color="inherit" style={{ margin: "0 10px", textTransform: 'none' }}>
              <Link to='/students' style={{ textDecoration: 'none' }}>
                <Typography variant="h6" style={{ color: '#ede7f6' }} noWrap>
                  Students
              </Typography>
              </Link>
            </Button>
            <Button color="inherit" style={{ margin: "0 10px", textTransform: 'none' }}>
              <Link to='/students/create' style={{ textDecoration: 'none' }}>
                <Typography variant="h6" style={{ color: '#ede7f6' }} noWrap>
                  Create
              </Typography>
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
      </>
    )
}
