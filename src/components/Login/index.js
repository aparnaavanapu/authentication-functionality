import { Component } from 'react';
import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';

class Login extends Component {

    loginToSite=(jwt_token)=>{
        Cookies.set('jwt_token', jwt_token, { expires: 1 });
        this.props.navigate('/')
        
    }

    onClickLogin = async () => {
        const userDetails = {username: 'rahul', password: 'rahul@2021'}
        const url = 'https://apis.ccbp.in/login'
        const options = {
          method: 'POST',
          body: JSON.stringify(userDetails),
        }
        const response = await fetch(url, options)
        const data = await response.json()
        console.log(data)
        if (response.ok === true) {
          this.loginToSite(data.jwt_token) 
        } 
        
    }

    render() {
        const jwt_token = Cookies.get('jwt_token');
        
        // If the JWT token is set, redirect the user to the home page
        if (jwt_token) {
            return <Navigate to="/" replace />;
        }

        return (
            <div>
                <h1>Please Login</h1>
                <button onClick={this.onClickLogin}>Login with sample cred</button>
            </div>
        );
    }
}

export default Login;
