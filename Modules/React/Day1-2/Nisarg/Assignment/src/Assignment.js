import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
/*
3. Store above example 	ascript variable and then display dynamically, Display FullName variable in respective Component

4. Call StudentID Card component 3 times and pass different student data using props.

5. Create Students Array of 3 students with field Image,Id,FirstName,LastName,DOB,CollegeName,Address and CollegeLogo and pass it as Object to the StudentIDCardComponent.

6. While calling StudentID Component in the app Component pass one <p>Student Details</p> as children. Access it in the StudentID Card Component with Children props.
*/
const Student=(props)=>{
    console.log(props.student);
    const
    {
      image,
      ID,
      FirstName,
      LastName,
      DOB,
      CollegeName,
      CollegeAddress,
      Logo,
  
    }=props.student;
    return(
        <>
        <p>{props.children}</p>
        <p>
            <Image img={image} />
        </p>
        <p>ID:{ID}</p>
        <p>Name:{FirstName+" "+LastName}</p>
        <p>Date of Birth:{DOB}</p>
  
        <College
            CollegeName={CollegeName}
            CollegeAddress={CollegeAddress}
            Logo={Logo}
            />
        </>
    );
  }
  
  const College=(props)=>
  {
    const PersonObject=[{
      image: "https://randomuser.me/api/portraits/thumb/men/50.jpg",
      ID:1,
      FirstName:"Nisarg",
      LastName:"Soni",
      DOB:"24/10/1998",
      CollegeName:"GLS MCA",
      CollegeAddress:"Parimal garden,Ahmedabad",
      Logo:https://play-lh.googleusercontent.com/C3QbZ675_cJUbHpy6uxf9eX8yNu_Rk9YCZosKgduBiaKPpnI4bM9e23ygmHUClLfEDr3,
    },
    {
      image: "https://randomuser.me/api/portraits/thumb/men/52.jpg",
      ID:2,
      FirstName:"Dev",
      LastName:"Soni",
      DOB:"10/09/1999",
      CollegeName:"SOCET",
      CollegeAddress:"",
      Logo:https://images.static-collegedunia.com/public/college_data/images/logos/15572073921203logo.png,
    },
    {
      
      image: "https://randomuser.me/api/portraits/thumb/men/51.jpg",
      ID:2,
      FirstName:"Shubh",
      LastName:"Soni",
      DOB:"10/09/1997",
      CollegeName:"SOCET",
      CollegeAddress:"S.G.Highway",
      Logo:https://images.static-collegedunia.com/public/college_data/images/logos/15572073921203logo.png,
    }
  ];
  
  return(
    <>
        <Student student={PersonObject[0]}>
        <p>Student Details</p>
        </Student>
  
        <Student student={PersonObject[1]}/>
        <Student student={PersonObject[2]}/>
    </>
  );
  };
  
  export default StudentIDCard; 
  