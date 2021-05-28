import React from 'react';

const Person = ({img , name , job , children}) => {
    const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`
    return (
        <div className="person">
            <img src={url}></img>
            <h4>{name}</h4>
            <h4 style={{color:'black'}}>{job}</h4>
            {children}
        </div>
    )
}


const PersonList = () => {
    return(
    <div className="person-list">
       <Person img="34" name="john" job="developer"></Person>
       <Person img="45" name="smith" job="designer">
           <p>this is basic info aboute person!</p>
       </Person>
       <Person img="89" name="Roy" job="artist"></Person>
    </div>
    )
}

export default PersonList;