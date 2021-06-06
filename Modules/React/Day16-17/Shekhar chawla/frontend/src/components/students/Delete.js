import React, { useState } from 'react'
import { Container, Typography, Button, Toolbar } from '@material-ui/core'
import StudentService from '../../services/StudentService'
import { Link } from 'react-router-dom'

export default function List(props) {
  const apiname = props.match.params.apiname
  const id = props.match.params.id
  const [deleted, setDeleted] = useState(false)

  const handleDelete = () => {
    StudentService.deleteOne(apiname, id ).then(res => {
      setDeleted(true)
    })
  }

  return (
    <main>
      <Toolbar />
      <Container maxWidth="md" >
        <Typography gutterBottom variant="h1" component="h2">
          Are you sure?
        </Typography>
        <Typography gutterBottom variant="h5" component="h2">
          you want to delete this student
        </Typography>

        <div>
          <Button color="secondary" style={{ margin: "0 10px", textTransform: 'none' }} onClick={() => handleDelete()}>
            <Typography variant="h6" noWrap>
              Confirm
            </Typography>
          </Button>
          <Button color="primary" style={{ margin: "0 10px", textTransform: 'none' }}>
            <Link to="/students" style={{ textDecoration: 'none' }}>
              <Typography variant="h6" noWrap>
                Back to Students
            </Typography>
            </Link>
          </Button>
        </div>

        {deleted && <Typography gutterBottom variant="h5" component="h2" color="primary">
          Student deleted successfully
        </Typography>
        }

      </Container>
    </main>
  )
}