import {FaUserFriends , FaBus ,FaUserCircle} from 'react-icons/fa'

const HomeData =  [
   {  
      id : 1,
      background : "bg-success",
      head : 'Users',
      name : 'users',
      icon : <FaUserCircle />,
      link : '/admin/users',
      btnClass : 'btn-success'
   },
   {  
      id : 2,
      background : "bg-dark",
      head : 'Users',
      name : 'operators',
      icon : <FaUserFriends />,
      link : '/admin/operators',
      btnClass : 'btn-dark'
   },
   {  
      id : 3,
      background : "bg-theme",
      head : 'Users',
      name : 'buses',
      icon : <FaBus />,
      link : '/admin/buses',
      btnClass : 'btn-theme'
   },
]

export default HomeData