import React, {Component } from 'react'
import {withRouter} from 'react-router-dom';
import UserService from '../services/UserService';
const RedbusContext = React.createContext()


class RedbusProvider extends Component {

   state = {
      adminLogin : false,
      login : false ,
      isLogin : false,
      isSignup : false,
      isOtp : false,
      fromCity : "",
      toCity : "",
      date : "",
      searchResult : [],
      selectedBus : [],
   }

   handleLogin = () => {
      this.setState( {login : !this.state.login})
   }

   handleAdminLogin = () =>{
      this.setState({adminLogin : false})
      localStorage.removeItem('adminData')
      this.props.history.push('/admin/login')
   }
   handleAdminLoginTrue = () => {
      this.setState({adminLogin : true})
   }

   handleChange =(e) => {
      const {name,value} = e.target
      this.setState({[name] : value})
   }


   componentDidMount() {
      const tokenData = JSON.parse(localStorage.getItem('tokenData'))
      if(tokenData){
         UserService.userHeaderCheck(tokenData.id,tokenData.token).then(res => {
            if(res.data._id){
               this.setState({login : true})
            } else {
               this.setState({login : false})
               if(this.props.history.location.pathname.includes('user') && !this.props.history.location.pathname.includes('admin')){
                  this.props.history.push('/') 
               }               
         }})
      } else {
         this.setState({login : false})
            if(this.props.history.location.pathname.includes('user') && !this.props.history.location.pathname.includes('admin')){
               this.props.history.push('/') 
            }
      }
   }

   handleLogout = () =>{
      localStorage.removeItem('tokenData')
      this.setState({login : false})
      this.props.history.push('/') 
   }

   handleSearch = (e) => {
      e.preventDefault()
      this.setState({
         fromCity : "",
         toCity : "",
         date : "",
      })
      
      this.props.history.push(`/user/bus-results/${this.state.fromCity}/${this.state.toCity}/${this.state.date}`)
   } 
   

   loginModelOpen = () => this.setState( {isLogin : true});
   loginModelClose = () => this.setState( {isLogin : false});
   signUpModelOpen = () => this.setState( {isSignup : true});
   signUpModelClose = () => this.setState( {isSignup : false});
   otpModelOpen = () => this.setState( {isOtp : true});
   otpModelClose = () => this.setState( {isOtp : false});

   render() {
      return (
         <RedbusContext.Provider
            value={{
               ...this.state,
               loginModelOpen : this.loginModelOpen,
               loginModelClose : this.loginModelClose,
               signUpModelOpen : this.signUpModelOpen,
               signUpModelClose : this.signUpModelClose,
               otpModelOpen : this.otpModelOpen,
               otpModelClose : this.otpModelClose,
               handleChange :this.handleChange,
               handleSearch : this.handleSearch,
               handleLogin : this.handleLogin,
               handleLogout : this.handleLogout,
               handleAdminLogin : this.handleAdminLogin,
               handleAdminLoginTrue : this.handleAdminLoginTrue,
            }}
         >
            {this.props.children}
         </RedbusContext.Provider>
      )
   }
}

const RedbusConsumer = RedbusContext.Consumer
export default withRouter(RedbusProvider)

export { RedbusConsumer ,RedbusContext }