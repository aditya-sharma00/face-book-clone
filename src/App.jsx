import React,{Component} from "react";
import './App.css'
import img from './image/fb2.jpeg'
import axios from 'axios'
class App extends Component{
    constructor(){
        super()
        this.state = {
            email:'',
            password:''
        }
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }
    changePassword(event){
        this.setState({
            password:event.target.value
        })
    }
    onSubmit(event){
        event.preventDefault()
        const registered = {
            email:this.state.email,
            password:this.state.password
        }
        axios.post('http://localhost:4000/app/signup',registered)
        .then(response => console.log(response.data))
        this.setState({
            email:'',
            password:''
        })
    }
    render(){
        return(
            <>
        <form onSubmit={this.onSubmit}>
            <div>
                <label htmlFor='email'></label>
                <input 
                type="text" 
                autoComplete='off' 
                onChange={this.changeEmail}
                value={this.state.email}
                name='email' id = "email" 
                placeholder='Email address or phone number'/>
            </div>
            <div>
                <label htmlFor='password'></label>
                <input type="password" 
                autoComplete='off' 
                onChange={this.changePassword}
                value={this.state.password}
                name='password'
                id = "password" 
                placeholder='Password'/>
            </div>
            <button type='submit'>Log in</button><div>
            <a href='#' className='f-pws'>Forgotten Password?</a>
            </div>
            <div className='line'></div>
            <div>
                <button type='btn'>Create account</button>
            </div>
            <div className='f-container'>
          <img src={img}
          alt = ""></img>
          <p>Connect with friends and the world around you on Facebook</p>
      </div>
      <div className='sub-link'><h3><a href='#'>Create a page</a> for a celibrity,band or bussiness</h3></div>
        </form>
    </>
        )
    }
}
export default App;