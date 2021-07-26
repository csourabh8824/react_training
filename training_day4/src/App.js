import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TextInput from './components/Text';
import EmailInput from './components/Email';
import DateInput from './components/Dob';
import PasswordInput from './components/Password';
import ConfirmPasswordInput from './components/ConfirmPassword';
import GenderInput from './components/Gender';
import ProfileInput from './components/Profile';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      dob: "",
      password: "",
      confirmPassword: "",
      gender: "",
      profile: "",
      nameError: "",
      emailError: "",
      passwordError: "",
      confirmPasswordError:"",
      fileError:"",
      requiredError:""      
    }
  }
  
  dateMaxValue() {
    console.log("heres")
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '/' + mm + '/' + dd;
    return today;
  }
  
  valid() {
    
    
    if (this.state.name.length<1 && !this.state.email.includes("@") && this.state.dob===""  && this.state.password.length<5 && this.state.profile.length<1 ) {
      this.setState({nameError:"name must not be blank", emailError: "Invalid Email",dobError: "Please enter date",passwordError: "Password should have more then 5 characters",fileError: "file must not be blank" })
      return false;
    }
    if (!this.state.email.includes("@")) {
      this.setState({ emailError: "Invalid Email" })
      return false;
    }
    if (this.state.dob==="") {
      this.setState({ dobError: "Please enter date" })
      return false;
    }
    if (this.state.password.length<5) {
      this.setState({ passwordError: "Password should have more then 5 characters" })
      return false;
    }
    if (this.state.password !== this.state.confirmPassword) {
      this.setState({ confirmPasswordError: "Password doesn't match" })
      return false;
    }
    if (this.state.profile.length<1) {
      this.setState({ fileError: "file must not be blank" })
      return false;
    }   
    return true
  }

  submit() {
    console.log(this.state)
    if (this.valid()) {
      alert("Form Submitted");
      console.log(this.state)
      this.setState({ nameError:"",emailError:"",confirmPasswordError:"",passwordError:"",dobError:"",fileError:""})
    }
  }
  setNameValue = name => {
    this.setState({
        name
    })
  }

  setEmailValue = email => {
    this.setState({
        email
    })
  }

  setDobValue = dob => {
    this.setState({
      dob
    })
  }

  setPasswordValue = password => {
    this.setState({
      password
    })
  }

  setConfirmPasswordValue = confirmPassword => {
    this.setState({
      confirmPassword
    })
  }

  setGenderValue = gender => {
    this.setState({
      gender
    })
  }

  setProfileValue = profile => {
    this.setState({
      profile
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Form Validation</h1>
        <h3 style={{color:"red"}}>{this.state.requiredError}</h3>
        <form onSubmit={(e)=>e.preventDefault()}>
          <TextInput value={this.state.name} onChange={this.setNameValue} /><span style={{ color: "red" }}>{ this.state.nameError}</span>
          <EmailInput value={this.state.email} onChange={this.setEmailValue} /><span style={{ color: "red" }}>{ this.state.emailError}</span>
          <DateInput value={this.state.dob} onChange={this.setDobValue} /><span style={{ color: "red" }}>{ this.state.dobError}</span>
          <PasswordInput value={this.state.password} onChange={this.setPasswordValue} /><span style={{ color: "red" }}>{ this.state.passwordError}</span>
          <ConfirmPasswordInput value={this.state.confirmPassword} onChange={this.setConfirmPasswordValue} /><span style={{ color: "red" }}>{ this.state.confirmPasswordError}</span>
          <GenderInput value={this.state.gender} onChange={ this.setGenderValue} />
          <ProfileInput value={this.state.profile} onChange={ this.setProfileValue} /><span style={{ color: "red" }}>{ this.state.fileError}</span>
          <button onClick={() => { this.submit() }} className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}
export default App;
