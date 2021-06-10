import React, { useState } from 'react'
import FlightSearch from '../services/FlightSearch'



function Login(props) {

    const [loginDetails , setLoginDetails] = useState({
        username : '' ,
        password : '' ,
    })
    const [error , setError] = useState(null)
    const [isLogin , setLogin] = useState('')

    const handleChange = (e) =>{
        console.log(e.target.value);
        setLoginDetails({
            ...loginDetails ,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        FlightSearch.login(loginDetails).then(res =>{
            console.log(res);
            if(res.data != null && res.status == 200){
                localStorage.setItem('token' , res.data.jwtoken)
                localStorage.setItem('isLogin' , "true");
                props.history.push('./AirIndia')
                window.location.reload();
            }
            
        }).catch(err =>{
            if(err.response.status === 404  || err.response.status === 400){
                console.log(err.response.data);
                setError(err.response.data.message)
            }
            else {
                setError('somthing went wrong')
            }
            console.log(err);
        })

        // console.log('submited');
        e.target.reset()
    }
    console.log(loginDetails);
    return (
        <>
        <div className="container card my-5" style={{width:"32rem"}}>
            <h3 className="my-3">User Login</h3>
            { error && <h6 className="text-danger">{error}</h6>}
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <label className="col-4"> UserName : *</label>
                    <div className="col-sm-6">
                    <input  type="text" className="form-control-sm" name="username" onChange={handleChange} />
                    </div>
                </div>

                <div className="row my-3">
                    <label className="col-4"> Password : *</label>
                    <div className="col-sm-6">
                    <input  type="text" className="form-control-sm" name="password" onChange={handleChange} />
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-4"><a href="/Register">New User</a></div>
                    <div className="col-8">
                        <button className="btn btn-danger">Login</button>
                </div>
                </div>
            </form>
        </div>
        </ >
    )
}

export default Login
