import React from "react";
import './App';
class RegisterForm extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

  };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  

  }

  submituserRegistrationForm(e) {
    console.log(this.validateForm());
    
    e.preventDefault();
    if (this.validateForm()) {
        console.log(this.state);
         let fields = {};
         fields["username"] = "";
         fields["emailid"] = "";
        
         fields["password"] = "";
        this.setState({fields:fields});
        console.log(this.state);
        alert("Form submitted");
    }

  }

  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "Please Fill the Column! ";
    }

    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["username"] = "Enter a Valid Username";
      }
    }

    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "Please Enter your Email!";
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "Please Fill the password!";
    }

    if (typeof fields["password"] !== "undefined") {
      if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        formIsValid = false;
        errors["password"] = "Password is Very Strong!";
      }
      
      if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[@#$%&]).*$/)) {
        formIsValid = false;
        errors["password"] = "Password is Strong!";
      }
    
      if (!fields["password"].match(/^.*(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        formIsValid = false;
        errors["password"] = "Password is Good!";
      }
      if (!fields["password"].match(/(?=.*[a-z])(?=.*[A-Z])/)) {
        formIsValid = false;
        errors["password"] = "Password is Weak!";
      }
    }

    this.setState({
      errors: errors
    });
    return formIsValid;


  }



render() {
  return (
  <div className="container">
   <div id="register">
      <h3>Registration page</h3>
      <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
      <label>Name: &nbsp;&nbsp;&nbsp;</label>
      <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} />
      <br></br>
      <br></br>
      <div className="errorMsg">{this.state.errors.username}</div>
      <label>Email: &nbsp;&nbsp;&nbsp;</label>
      <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange}  />
      <br></br>
      <br></br>
      <div className="errorMsg">{this.state.errors.emailid}</div>
      <label>Password: &nbsp;&nbsp;&nbsp;</label>
      <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
      <br></br>
      <br></br>
      <div className="errorMsg">{this.state.errors.password}</div>
      

      <input type="submit" className="button"  value="Register"/>
      </form>
  </div>
</div>

    );
}


}

export default RegisterForm;