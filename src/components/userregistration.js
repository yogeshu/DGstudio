import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
export default class Registration extends React.Component {
  constructor(props){
    super(props);
    this.state ={value: '',
                  username:'',
                  phoneno:'',
                  email:''};
     this.valueChange = this.valueChange.bind(this);
     this.phonevalue = this.phonevalue.bind(this);
     this.emailvalue = this.emailvalue.bind(this);
     this.phonevalidation = this.phonevalidation.bind(this);
     this.emailvalidation = this.emailvalidation.bind(this);

    this.tryRedirect = this.tryRedirect.bind(this);
  }
   valueChange(event) {
    //  this.setState({phoneno: event.target.value});
     this.setState({username: event.target.value});
   }
   phonevalue(event){
    this.setState({phoneno: event.target.value});
   }
   emailvalue(event){
    this.setState({email: event.target.value});
   }
   emailvalidation(event){
    var success=0;
    var email_input=this.state.email;
    var format=/^.*@.*/; //regex for ten digits
    if(format.test(email_input)){
      success=1;
    }
    if(success==0){
      alert('Please enter proper email'+email_input);
      this.setState({email:''});
    }
  }
   phonevalidation(event){
     var success=0;
     var phoneno_input=this.state.phoneno;
     var format=/^\d{10}$/; //regex for ten digits
     if(format.test(phoneno_input)){
       success=1;
     }
     if(success==0){
       alert('Please enter proper phone number'+phoneno_input);
       this.setState({phoneno:''});
     }
   }
  tryRedirect(event){
    var success=0;
    // success=validate_no();
    // var format= /^\d{10}$/;
    // var phoneno_input=this.state.phoneno;
    // if(phoneno_input.match(format)){
    //    success=1;
    // }
    // else{
    //   success=9;
    // }
    alert('Form submitted with username:'+success);
  }
    render(){
      return (
                <div>
                <form onSubmit={this.tryRedirect}>
                    <div className="Create-A-New-Account">
                      <center>Create A New Account</center> <br></br><br></br>
                    </div>
                    <center>
                    <div className="Rectangle">
                      <div className="form-group">
                      <div className="label-style"><label><br></br><br></br><b>Email</b></label></div>
                      <input type="text" required="required" className="form-control" style={{width:'90%'}} placeholder="Enter Email" onChange={this.emailvalue} ></input>
                      </div>
                     
                      <div className="form-group">

                      <div className="label-style"><label><b>Username</b></label></div>
                      <input type="text" required="required" className="form-control"  style={{width:'90%'}} placeholder="Enter Username" value={this.state.username} onChange={this.valueChange} onClick={this.emailvalidation}></input>
                      </div>
                      <div className="form-group">

                      <div className="label-style"><label><b>Password</b></label></div>
                      <input type="password" required="required" className="form-control" style={{width:'90%'}} placeholder="Enter Password"></input>
                      </div>
                      {/* <div className="form-group">
                            <div class="g-recaptcha" data-sitekey="6LfKURIUAAAAAO50vlwWZkyK_G2ywqE52NU7YO0S" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
                            <input class="form-control d-none" data-recaptcha="true" required data-error="Please complete the Captcha"></input>
                            <div class="help-block with-errors"></div>
                        </div> */}

                      <div className="form-group">

                      <input type="submit" value="Sign Up" className="Rectangle-Copy-3"></input>
                      </div>
                      {/* <button>Submit</button> */}
                    </div>
                    </center>
                </form>
                </div>
           );
    }
    
  }
  