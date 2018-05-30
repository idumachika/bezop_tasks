import React from 'react';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
//import Login from './Login'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-material-responsive-grid';
import RaisedButton from 'material-ui/RaisedButton';
import UploadScreen from '../src/UploadScreen';


class Register extends React.Component {
    // Now, let’s initialise the state in the constructor
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            
            
           
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = (e) => {
        // Because we named the inputs to match their corresponding values in state, it's
        // super easy to update the state
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();
                    document.getElementById("buttonShipper").innerHTML = "signing you up...";
        // get our form data out of state
        var apiBaseUrl = 'https://salty-fortress-75943.herokuapp.com/api/auth/register';

        const { firstName, lastName, email, password  } = this.state;
        const { UploadScreen } = this.props;
        let data = {
            firstName,
            lastName,
            email,
            password
            
           
        }

        console.log(JSON.stringify(data));
        
        
        axios.post(apiBaseUrl, data, {
            data: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Headers': 'Content-Type, Accept, Access-Control-Allow-Origin'
            }
        }).then((result) => {

            //access the results here....
            // alert(result);
            console.log(result);
            if(result.data.status === 200){
                console.log(result);
                alert("Registration Complete");
                document.getElementById("buttonShipper").innerHTML = "success";
                UploadScreen.push("/UploadPage");
            }
            else if(result.data.status === 400){
                alert("Validation Error,Please try again");
                document.getElementById("buttonShipper").innerHTML = "failed try again...";
            }
        }).catch(function (error) {
            alert("failed to complete");
            document.getElementById("buttonShipper").innerHTML = "failed try again...";
            console.log('error got' + error);
        });   
    }

        render(){
        return(
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar
                        title="Register"
                        />
                        <form onSubmit={this.onSubmit} >
                                 <Row>
                                    <Col md={12}>
                                        <div className="form-group">
                                            <TextField
                                            name="firstName"
                                            value={this.state.firstName}
                                            floatingLabelText="Enter your firstName"
                                            onChange={this.onChange}
                                            required="required"

                                            

                                             />
                                         </div>
                                    </Col>
                                 </Row>
                                 <br />
                                 <Row>
                                     <Col md={12}>
                                         <div className="form-group">
                                             <TextField
                                                name="lastName"
                                                 value={this.state.lastName}
                                                 floatingLabelText="Enter your lastName"
                                                 onChange={this.onChange}
                                                 required="required"
                                             />
                                         </div>
                                     </Col>
                                </Row>
                                 <br />
                                 <Row>
                                     <Col md={12}>
                                         <div className="form-group">
                                             <TextField
                                             name="email"
                                                 value={this.state.email}
                                                 floatingLabelText="Enter your email"
                                                 onChange={this.onChange}
                                                 required="required"
                                             />
                                         </div>
                                     </Col>
                                </Row>
                                <br/>

                                <Row>
                                     <Col md={12}>
                                         <div className="form-group">
                                             <TextField
                                                type="password"
                                                name="password"
                                                 value={this.state.password}
                                                 floatingLabelText="Enter your password"
                                                 onChange={this.onChange}
                                                 required="required"
                                             />
                                         </div>
                                     </Col>
                                </Row>
                                <br/>
                                 <div className="button-submit" >
                                    <RaisedButton  type="submit" className="btn btn-primary"  id="buttonShipper">submit</RaisedButton >
                                 </div>
                             </form>

                        </div>
                        
    
                    </MuiThemeProvider>
                </div>
        );
    }
}
const style = {
    margin:15,
    
}
 export default Register;


   



