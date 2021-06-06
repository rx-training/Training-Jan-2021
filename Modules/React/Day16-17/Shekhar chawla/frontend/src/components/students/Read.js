import React, { useState, useEffect } from 'react'
import StudentService from '../../services/StudentService'

import { CssBaseline, Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Toolbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import EditRoundedIcon from '@material-ui/icons/EditRounded'
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded'
import HomeIcon from '@material-ui/icons/Home';
import FaceIcon from '@material-ui/icons/Face';
import ContactsIcon from '@material-ui/icons/Contacts';


// Functionality
export default function Read(props) {
  var apiname = props.match.params.apiname
  var id = props.match.params.id
  const [student, setStudent] = useState()
  const classes = useStyles()
  const [selectedNav, setSelectedNav] = useState('Student')
  const actions = [
    {
      name: 'Edit',
      Icon: function () {
        return <EditRoundedIcon color="primary" />
      },
      onClick: function (route) {
        route.push(`/${apiname}/edit/${id}`)
      }
    },
    {
      name: 'Delete',
      Icon: function () {
        return <DeleteRoundedIcon color="secondary" />
      },
      onClick: function () {
        props.history.push(`/${apiname}/delete/${id}`)
      }
    }
  ]

  useEffect(() => {
    StudentService.getOne(apiname, id).then(res => {
      setStudent(res.data)
    })
  }, [])


  const handleNavSelect = (event, name) => {
    setSelectedNav(name)
  }
  const getContent = (nav) => {
    if (nav === 'References') {
      return <ReferenceDetails student={student} />
    } else if (nav === 'Family') {
      return <FamilyDetails student={student} />
    } else {
      return <StudentDetails student={student} />
    }
  }

  return (
    <div className={classes.root}>
      <CssBaseline />

      {/* Drawer */}
      <Drawer className={classes.drawer} variant="permanent" classes={{ paper: classes.drawerPaper }} >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {navIcons.map((action, index) => (
              <ListItem button key={index}
                selected={selectedNav === action.name}
                onClick={(event) => handleNavSelect(event, action.name)}
              >
                <ListItemIcon>{<action.Icon />}</ListItemIcon>
                <ListItemText primary={action.name} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {actions.map((action, index) => {
              return (
                <ListItem button key={index} onClick={() => action.onClick(props.history)}>
                  <ListItemIcon> <action.Icon /> </ListItemIcon>
                  <ListItemText primary={action.name + ' Student'} />
                </ListItem>
              )
            })}
          </List>
        </div>
      </Drawer >


      <main className={classes.content}>
        <Toolbar />
        {student && getContent(selectedNav)}

      </main>

    </div >
  )
}



function arrayBufferToBase64(buffer) {
  var binary = '';
  var bytes = [].slice.call(new Uint8Array(buffer));
  bytes.forEach((b) => binary += String.fromCharCode(b));
  return window.btoa(binary);
};




// Child Components
const StudentDetails = ({ student }) => {

  const name = student.firstName + ' ' + student.middleName + ' ' + student.lastName
  const dob = student.dob ? student.dob.substring(5, 7) + '/' + student.dob.substring(8, 10) + '/' + student.dob.substring(0, 4) : ''
  const leftNavDetails = [
    { name: 'Name', value: name },
    { name: 'Date of Birth', value: dob },
    { name: 'Email', value: student.email },
    { name: 'Place of Birth', value: student.placeOfBirth },
    { name: 'First Language', value: student.firstLanguage },
    { name: 'Gender', value: student.gender },
  ]
  const rigthNavDetails = [
    { name: 'Country', value: student.address.country },
    { name: 'State', value: student.address.state },
    { name: 'City', value: student.address.city },
    { name: 'Pin / Zip Code', value: student.address.pin },
  ]

  var base64Flag = `data:${student.photo.contentType};base64,`
  var imageStr = arrayBufferToBase64(student.photo.data.data)
  var img = base64Flag + imageStr
  return (
    <>
      <Box display="flex" p={1} m={1}>
        <Box width="50%">
        <img src={img} alt={name} style={{ width: "400px", height: "400px" , objectFit: "cover" }} ></img>
        </Box>
        <DetailBox details={leftNavDetails} />
        <DetailBox details={rigthNavDetails}>
          <Box p={1}>Adress Details</Box>
        </DetailBox>
      </Box>
    </>
  )
}






const FamilyDetails = ({ student: { father, mother } }) => {
  const fName = father.firstName + ' ' + father.middleName + ' ' + father.lastName
  const mName = mother.firstName + ' ' + mother.middleName + ' ' + mother.lastName

  const FatherDetails = [
    { name: 'Name', value: fName },
    { name: 'Email', value: father.email },
    { name: 'Education', value: father.education },
    { name: 'Profession', value: father.profession },
    { name: 'Designation', value: father.designation },
  ]
  const MotherDetails = [
    { name: 'Name', value: mName },
    { name: 'Email', value: mother.email },
    { name: 'Education', value: mother.education },
    { name: 'Profession', value: mother.profession },
    { name: 'Designation', value: mother.designation },
  ]

  return (
    <Box display="flex" p={1} m={1}>
      <DetailBox details={FatherDetails}>
        <Box p={1}>Father Details</Box>
      </DetailBox>
      <DetailBox details={MotherDetails}>
        <Box p={1}>Mother Details</Box>
      </DetailBox>
    </Box>
  )
}




const ReferenceDetails = ({ student: { reference } }) => {

  return (
    <Box display="flex" flexWrap="wrap" p={1} m={1}>
      {reference.length !== 0 && reference.map((ref, index) => {
        const details = [
          { name: 'Name', value: ref.name },
          { name: 'Contact number', value: ref.telNo },
          { name: 'Country', value: ref.address.country },
          { name: 'State', value: ref.address.state },
          { name: 'City', value: ref.address.city },
          { name: 'Pin / Zip Code', value: ref.address.pin },
        ]
        return (
          <DetailBox details={details}>
            <Box p={1}>{index + 1}</Box>
          </DetailBox>
        )
      })}
    </Box>
  )
}



const DetailBox = (props) => {
  const details = props.details
  return (
    <Box width="50%">
      <div style={{ width: "100%" }} >

        {props.children &&
          <Box display="flex" justifyContent="center" p={1} m={1} style={{ backgroundColor: 'gray' }} >
            {props.children}
          </Box>
        }
        {details.map((item, index) => (
          <Box display="flex" justifyContent="center" p={1} m={1} bgcolor="background.paper" key={index} >
            <Box p={1} width="50%">{item.name}</Box><Box p={1} width="50%">{item.value || '-'}</Box>
          </Box>
        ))}

      </div>
    </Box>
  )
}







// Css
const drawerWidth = 250;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));





// Render Details
const navIcons = [
  {
    name: 'Student', Icon: function () {
      return <FaceIcon style={{ color: "cyan" }} />
    }
  },
  {
    name: 'Family', Icon: function () {
      return <HomeIcon style={{ color: "green" }} />
    }
  },
  {
    name: 'References', Icon: function () {
      return <ContactsIcon style={{ color: "grey" }} />
    }
  }
]






// My functions
// const myUppercase = (str) => {
//   str = str[0].toUpperCase() + str.substring(1,)
//   const tempOfCaptial = str.split(/(?=[A-Z])/)
//   return tempOfCaptial.join(' ')
// }