import React, { useState } from 'react'
import FlightSearch from '../services/FlightSearch'

function Register() {

  const [userDetails , setUserDetails] = useState({
    Title : '' , 
    Gender  :'',
    FirstName : '' ,
    LastName : '' ,
    NameOnCard :'' ,
    DateOfBirth : '' ,
    MothersMaidenName : '' ,
    Nationality : '' ,
    Country : '' , 
    PassportNumber : '' ,
    PassportExDate : '' ,
    IdProof : '' ,
    BlockNo : '',
    Building: '' ,
    Street : '' ,
    Area : '' ,
    Country : '' ,
    State  :'' ,
    City : '' ,
    PostalCode : '' ,
    LandMark : '' ,
    CountryCode : '' ,
    MobileNo : '' ,
    EmailId :'',
    FRUpdateVaiMail : false ,
    FRPromotionViaMail : false ,
    NotificationViaMail : false,
    NotificationViaSMS : false ,
    PromotionViaSMS : false ,
    RedemptionVaiSMS : false ,
    Password : '' ,

  })

  const handleChange = (e) =>{
    setUserDetails({
      ...userDetails ,
      [e.target.name]:e.target.value
    })
    // console.log(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const loginDetails = {
      username : userDetails.EmailId ,
      password : userDetails.Password
    }
    console.log(loginDetails);
    FlightSearch.addCommanUser(loginDetails)
    FlightSearch.addUser(userDetails)
    e.target.reset()
    // console.log('submited');
  }

  // console.log(userDetails);
  // const {title} = userDetails
    return (
        <>
        <div className="container my-3 bg-light">
            <h3 className="my-4">Flying Returns Account Registration</h3><hr />
            <form onSubmit={handleSubmit}>
                <div className="row ">
                  <div className="col">
                  <div class="form-group row">
                    <label for="title" className="col-sm-2 col-form-label">Title: *</label>
                    <div class="col-sm-10">
                    <select id="title" className="col-sm-10 form-control-sm" name="Title" onChange={handleChange} >
                        <option selected>Please Select</option>
                        <option value="master">MASTER</option>
                        <option value="miss">MISS</option>
                        <option value="mr">MR</option>
                        <option value="mrs">MRS</option>
                        <option value="ms">MS</option>
                    </select>
                    </div>
                 </div>
                  </div>
                  <div className="col"></div>  
                </div>
                
                <div className="row ">
                  <div className="col">
                  <div class="form-group row">
                    <label for="Gender" className="col-sm-2 col-form-label">Gender:*</label>
                    <div class="col-sm-10">
                    <select id="gender" className="col-sm-10 form-control-sm" name="Gender" onChange={handleChange}>
                        <option selected>Please Select</option>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                        <option value="Other">Others</option>
                    </select>
                    </div>
                 </div>
                  </div>
                  <div className="col"></div>  
                </div>

                <div className="row ">
                  <div className="col">
                  <div class="form-group row">
                    <label for="title" className="col-auto col-form-label ">First Name : - </label>
                    <div class="col-sm-8">
                    <input type="text" className="form-control" name="FirstName" onChange={handleChange} />
                    </div>
                 </div>
                  </div>
                  <div className="col">
                  <div class="form-group row">
                    <label for="title" className="col-auto col-form-label ">Last Name : - </label>
                    <div class="col-sm-8">
                    <input type="text" className="form-control" name="LastName" onChange={handleChange} />
                    </div>
                 </div>  
                    </div>  
                </div>

                <div className="row ">
                  <div className="col">
                  <div class="form-group row">
                    <label for="" className="col-auto col-form-label ">Name on Card: - </label>
                    <div class="col-sm-8">
                    <input type="text" className="form-control" name="NameOnCard" onChange={handleChange} />
                    </div>
                 </div>
                  </div>
                  <div className="col">
                  <div class="form-group row">
                    <label for="title" className="col-auto col-form-label ">Date of Birth : - </label>
                    <div class="col-sm-8">
                    <input type="date" className="form-control" name="DateOfBirth" onChange={handleChange} />
                    </div>
                 </div>  
                    </div>  
                </div>


                <div className="row ">
                  <div className="col">
                  <div class="form-group row">
                    <label for="" className="col-auto col-form-label "> Mother's Maiden Name: - </label>
                    <div class="col-sm-8">
                    <input type="text" className="form-control" name="MothersMaidenName" onChange={handleChange} />
                    </div>
                 </div>
                  </div>
                  <div className="col">
                  
                    </div>  
                </div><br /> <hr />


                <div className="row ">
                  <div className="col">
                  <div class="form-group row">
                    <label for="gender" className="col-sm-2 col-form-label">Nationality:*</label>
                    <div class="col-sm-10">
                    <input className="col-sm-10 form-control-sm" name="Nationality" onChange={handleChange}></input>
                    </div>
                 </div>
                  </div>
                  <div className="col">
                  <div class="form-group row">
                    <label for="gender" className="col-sm-2 col-form-label">Country:*</label>
                    <div class="col-sm-10">
                    <input className="col-sm-10 form-control-sm" name="Country" onChange={handleChange}></input>
                    </div>
                    </div>  
                    </div>  
                </div>

                <div className="row ">
                  <div className="col">
                  <div class="form-group row">
                    <label for="title" className="col-auto col-form-label ">Passport Number : - </label>
                    <div class="col-sm-8">
                    <input type="number" className="form-control" name="PassportNumber" onChange={handleChange}  />
                    </div>
                 </div>
                  </div>
                  <div className="col">
                  <div class="form-group row">
                    <label for="title" className="col-auto col-form-label ">Passport Expiry Date: - </label>
                    <div class="col-sm-8">
                    <input type="date" className="form-control" name="PassportExDate" onChange={handleChange} />
                    </div>
                 </div>  
                    </div>  
                </div>


                <div className="row ">
                  <div className="col">
                  <div class="form-group row">
                    <label for="gender" className="col-sm-2 col-form-label">Photo Id Proof :*</label>
                    <div class="col-sm-10">
                    <input type="file" />
                    </div>
                 </div>
                  </div>
                  <div className="col"></div>  
                </div><hr />


                <div className="row ">
                  <div className="col">
                  <div class="form-group row">
                    <label for="title" className="col-auto col-form-label ">Apartment/Block NO : - </label>
                    <div class="col-sm-6">
                    <input type="text" className="form-control" name="BlockNo" onChange={handleChange} />
                    </div>
                 </div>
                  </div>
                  <div className="col">
                  <div class="form-group row">
                    <label for="title" className="col-auto col-form-label ">Building/Village : - </label>
                    <div class="col-sm-8">
                    <input type="text" className="form-control" name="Building" onChange={handleChange} />
                    </div>
                 </div>  
                    </div>  
                </div>


                <div className="row ">
                  <div className="col">
                  <div class="form-group row">
                    <label for="title" className="col-auto col-form-label ">Road/Street : - </label>
                    <div class="col-sm-8">
                    <input type="text" className="form-control" name="Street" onChange={handleChange}  />
                    </div>
                 </div>
                  </div>
                  <div className="col">
                  <div class="form-group row">
                    <label for="title" className="col-auto col-form-label ">Area/Locality : - </label>
                    <div class="col-sm-8">
                    <input type="text" className="form-control" name="Area" onChange={handleChange} />
                    </div>
                 </div>  
                    </div>  
                </div>

                <div className="row ">
                  <div className="col">
                  <div class="form-group row">
                    <label for="title" className="col-auto col-form-label ">Country : - </label>
                    <div class="col-sm-8">
                    <input type="text" className="form-control" name="Country" onChange={handleChange} />
                    </div>
                 </div>
                  </div>
                  <div className="col">
                  <div class="form-group row">
                    <label for="title" className="col-auto col-form-label ">State : - </label>
                    <div class="col-sm-8">
                    <input type="text" className="form-control" name="State" onChange={handleChange} />
                    </div>
                 </div>  
                    </div>  
                </div>

                <div className="row ">
                  <div className="col">
                  <div class="form-group row">
                    <label for="title" className="col-auto col-form-label ">Town/City/District : - </label>
                    <div class="col-sm-8">
                    <input type="text" className="form-control" name="City" onChange={handleChange} />
                    </div>
                 </div>
                  </div>
                  <div className="col">
                  <div class="form-group row">
                    <label for="title" className="col-auto col-form-label ">Postal Code : - </label>
                    <div class="col-sm-8">
                    <input type="text" className="form-control" name="PostalCode" onChange={handleChange} />
                    </div>
                 </div>  
                    </div>  
                </div>

                <div className="row ">
                  <div className="col">
                  <div class="form-group row">
                    <label for="title" className="col-auto col-form-label ">Land Mark(If any) : - </label>
                    <div class="col-sm-8">
                    <input type="text" className="form-control" name="LandMark" onChange={handleChange} />
                    </div>
                 </div>
                  </div>
                  <div className="col">
                  
                    </div>  
                </div><br/><hr />

                <div className="row ">
                  <div className="col">
                  <div class="form-group row">
                    <label for="title" className="col-auto col-form-label ">Mobile Number: - </label>
                    <div class="col-sm-8">
                    <select className="form-control-sm" name="CountryCode" onChange={handleChange}>
                        <option selected>Please Select</option>
                        <option value="+91">+91</option>
                        <option value="+001">+01</option>
                        <option value="+052">+052</option>
                    </select>
                    </div>
                 </div>
                  </div>
                  <div className="col">
                  <div class="form-group row">
                    {/* <label for="title" className="col-auto col-form-label ">Last Name : - </label> */}
                    <div class="col-sm-8">
                    <input type="number" className="form-control" name="MobileNo" onChange={handleChange}  />
                    </div>
                 </div>  
                    </div>  
                </div>


                <div className="row ">
                  <div className="col">
                  <div class="form-group row">
                    <label for="title" className="col-auto col-form-label ">Email Address : - </label>
                    <div class="col-sm-8">
                    <input type="email" className="form-control" name="EmailId" onChange={handleChange} />
                    </div>
                 </div>
                  </div>
                  <div className="col">
                  <div class="form-group row">
                    <label for="title" className="col-auto col-form-label ">Re-Enter Email : - </label>
                    <div class="col-sm-8">
                    <input type="email" className="form-control"  />
                    </div>
                 </div>  
                    </div>  
                </div><br /> <hr />

                <div className="row ">
                  <div className="col">
                  <div class="form-group row">
                    <label for="title" className="col-auto col-form-label ">Receive Flying Returns Program Updates via Email: - </label>
                    <div class="col-sm-8">
                    <select id="title" className="col-sm-10 form-control-sm" name="FRUpdateVaiMail" onChange={handleChange}>
                        <option selected>Please Select</option>
                        <option value="true">YES</option>
                        <option value="false">NO</option>
                    </select>
                    </div>
                 </div>
                  </div>
                  <div className="col">
                  <div class="form-group row">
                    <label for="title" className="col-auto col-form-label ">Receive Instant (Non Transaction) Notifications via SMS : - </label>
                    <div class="col-sm-8">
                    <select id="title" className="col-sm-10 form-control-sm" name="NotificationViaSMS" onChange={handleChange}>
                        <option selected>Please Select</option>
                        <option value="true">YES</option>
                        <option value="false">NO</option>
                    </select>
                    </div>
                 </div>  
                    </div>  
                </div>

                <div className="row ">
                  <div className="col">
                  <div class="form-group row">
                    <label for="title" className="col-auto col-form-label ">Receive Promotions from Flying Returns via Email: - </label>
                    <div class="col-sm-8">
                    <select id="title" className="col-sm-10 form-control-sm" name="FRPromotionViaMail" onChange={handleChange}>
                        <option selected>Please Select</option>
                        <option value="true">YES</option>
                        <option value="false">NO</option>
                    </select>
                    </div>
                 </div>
                  </div>
                  <div className="col">
                  <div class="form-group row">
                    <label for="title" className="col-auto col-form-label ">Receive Promotions from Partners via Email : - </label>
                    <div class="col-sm-8">
                    <select id="title" className="col-sm-10 form-control-sm" name="PromotionViaSMS" onChange={handleChange}>
                        <option selected>Please Select</option>
                        <option value="true">YES</option>
                        <option value="false">NO</option>
                    </select>
                    </div>
                 </div>  
                    </div>  
                </div>

                <div className="row ">
                  <div className="col">
                  <div class="form-group row">
                    <label for="title" className="col-auto col-form-label ">Receive notification of account changes via SMS/Email: - </label>
                    <div class="col-sm-8">
                    <select id="title" className="col-sm-10 form-control-sm" name="NotificationViaMail" onChange={handleChange}>
                        <option selected>Please Select</option>
                        <option value="true">YES</option>
                        <option value="false">NO</option>
                    </select>
                    </div>
                 </div>
                  </div>
                  <div className="col">
                  <div class="form-group row">
                    <label for="title" className="col-auto col-form-label ">Receive notification of any Accrual and Redemptions Transactions via SMS : - </label>
                    <div class="col-sm-8">
                    <select id="title" className="col-sm-10 form-control-sm" name="RedemptionVaiSMS" onChange={handleChange}>
                        <option selected>Please Select</option>
                        <option value="true">YES</option>
                        <option value="false">NO</option>
                    </select>
                    </div>
                 </div>  
                    </div>  
                </div><br/><hr />
                
                <div className="row ">
                  <div className="col">
                  <div class="form-group row">
                    <label for="title" className="col-auto col-form-label ">Password : - </label>
                    <div class="col-sm-8">
                    <input type="text" className="form-control" name="Password" onChange={handleChange}  />
                    </div>
                 </div>
                  </div>
                  <div className="col">
                  <div class="form-group row">
                    <label for="title" className="col-auto col-form-label ">Re-enter Password: - </label>
                    <div class="col-sm-8">
                    <input type="text" className="form-control"  />
                    </div>
                 </div>  
                    </div>  
                </div><br /> <hr />

                <div className="row">
                    <div className="col">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2"  />
                        <label class="form-check-label" for="inlineCheckbox2">Agree T & Condition</label>
                        </div>
                    </div>
                    <div className="col my-4">
                        <button type="submit" className="btn btn-danger btn-block">Enroll</button>
                    </div>
                </div>

            </form>
            </div>
        </>
    )
}

export default Register
