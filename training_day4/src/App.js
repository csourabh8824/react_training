import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      dob: "",
      gender: "",
      profilePic: "",
      educationLevel: "",
      password: "",
      confirmPassword: "",
      nameError: "",
      emailError: "",
      dobError: "",
      passwordError: "",
      confirmPasswordError: "",
      genderError:""
    }
  }

  valid() {
    
    if (this.state.name.length < 1 ) {
      this.setState({ nameError: "Name should not be blank" })
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
    if (!this.state.email.includes("@")) {
      this.setState({ emailError: "Invalid Email" })
      return false;
    }    
    return true;
  }

  submit() {
    this.setState({ nameError: "", emailError: "",passwordError: "",confirmPasswordError:"",fileError:"" });
    if (this.valid()) {
      alert("Form Submitted");
      console.log(this.state)
      
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Form Validation</h1>
        Name: <input type="text" placeholder="Enter Name" onChange={(e) => { this.setState({ name: e.target.value }) }} /><p style={{color:"red"}}>{ this.state.nameError }</p><br/>
        Email: <input type="email" placeholder="Enter Email" onChange={(e) => { this.setState({ email: e.target.value }) }} /><p style={{color:"red"}}>{ this.state.emailError }</p><br/><br />
        Dob: <input style={{ marginRight: "95px" }} type="date" placeholder="Enter date" onChange={(e) => { this.setState({ dob: e.target.value }) }} /><br/><br />
        <label for="cars">Choose an education level:</label>
        <select name="education" id="education">
          <option value="10th">10th</option>
          <option value="12th">12th</option>
          <option value="B.E">B.E</option>
      
        </select><br /><br />
        Password: <input type="password" placeholder="Enter Password" onChange={(e) => { this.setState({ password: e.target.value }) }} /><p style={{color:"red"}}>{ this.state.passwordError }</p><br /><br />
        Confirm Password: <input type="password" placeholder="Enter Password" onChange={(e) => { this.setState({ confirmPassword: e.target.value }) }} /><p style={{color:"red"}}>{ this.state.confirmPasswordError }</p><br/><br />
        <p style={{ marginRight: "70px" }} >Gender:
          <input  type="radio" id="html" name="gender" value="Male" onChange={(e) => { this.setState({ gender: e.target.value }) }} />
          <label for="male">Male</label>
          <input type="radio" id="css" name="gender" value="Female" onChange={(e) => { this.setState({ gender: e.target.value }) }} />
          <label for="female">Female</label><br></br> 
        </p>
        <p style={{ marginRight: "-55px" }} >Profile Pic: 
          <input  type="file" onChange={(e) => { this.setState({ profilePic: e.target.value }) }}/>
        </p><br />
        <button onClick={()=>{this.submit()}} className="btn btn-primary">Submit</button>

      </div>
    );
  }
}
export default App;
