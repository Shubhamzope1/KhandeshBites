import React from 'react';
import axios from 'axios';
import '../Style/admin.css'


class Admin extends React.Component {
    constructor() {
        super();
        this.state = {
            Username: '',
            Password: '',
            admin: {}
        }
    }
     componentDidMount() {
         axios({
             url: `http://localhost:2001/admin`,
             method: 'GET',
             headers: { 'Content-Type': 'application/json' }
         })
             .then(response => {
                 this.setState({  admin: response.data.admin[0] })
                
             })
             .catch()


     }
     handleInputChange = (event,state)=>{
        this.setState({[state] : event.target.value});
    }
    handleLogedin = () => {
        const { Username, Password, admin } = this.state;
        console.log('Entered Username:', Username);
        console.log('Entered Password:', Password);
        console.log('Fetched Username:', admin.username);
        console.log('Fetched Password:', admin.password);
        // Validate inputs against fetched admin data
        if (Username === admin.Username && Password === admin.Password) {
            alert('Login Successful');
            localStorage.setItem('isAuthenticated', 'true');
            window.location.href = '/dashboard';

        } else {
            alert('Invalid Username or Password');
        }
    }


    render() {
        const { } = this.state;


        return (
            <div className='rect-admin'>
                <div className='cart-center container'>
                    <div className="loginModal"> Admin Login</div>
                    <div className=''>
                        <label className="NameH">Username</label>
                        <input type="text" placeholder="enter your name" className="form-control" required onChange={(event) => this.handleInputChange(event, 'Username')} />
                        <label className="NameH">Password</label>
                        <input type="password" placeholder="enter your password" className="form-control" required onChange={(event) => this.handleInputChange(event, 'Password')} />
                        <button className="btn btn-danger PROCEED mt-2" onClick={this.handleLogedin}>Login </button>
                    </div>
                </div>
            </div>


        )
    }
}
export default Admin;