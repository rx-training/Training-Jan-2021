import React, { useState, useEffect } from 'react'
import { Container, Grid, Card, CardMedia, Typography, CardContent, CardActions, Button, Toolbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import StudentService from '../../services/StudentService'

function arrayBufferToBase64(buffer) {
  var binary = '';
  var bytes = [].slice.call(new Uint8Array(buffer));
  bytes.forEach((b) => binary += String.fromCharCode(b));
  return window.btoa(binary);
};

export default function List(props) {
  const apiname = useState(props.match.params.apiname)
  const [list, setList] = useState([])

  useEffect(() => {
    StudentService.getAll(apiname[0]).then(res => {
      setList(res.data)
    })
  }, [])

  const classes = useStyles();

  return (
    <main>
      <Toolbar />
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {list.map((item) => {
            if ( (item['photo'] !== undefined) && (item['photo'].data !== undefined) ) {
              var base64Flag = `data:${item.photo.contentType};base64,`
              var imageStr = arrayBufferToBase64(item.photo.data.data)
              var img = base64Flag + imageStr
            } else {
              img = null
            }

            return (
              <Grid item key={item.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  { img && <CardMedia
                    className={classes.cardMedia}
                    image={img}
                    title="Image title"
                  /> }
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.firstName + ' ' + item.lastName}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" onClick={() => props.history.push(`/${apiname[0]}/view/${item.id}`)}>
                      View
                    </Button>
                    <Button size="small" color="primary" onClick={() => props.history.push(`/${apiname[0]}/edit/${item.id}`)}>
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </main>
  )
}

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '75%'
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));
