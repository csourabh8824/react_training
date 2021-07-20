import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
function ButtonComponent() {

    const [name, setName] = useState("");
    function getValue() {
        alert(`hello ${name}`)
    }

    return (
        <div className="container">
            <label for="name">Name:  </label>            
            <input className="m-2" type="text" id="name" name="name" value={name} onChange={(e)=>{setName(e.target.value)}}></input>
            <button className="btn btn-primary" onClick={getValue} >Click Me</button>
            <h4>{name}</h4>
        </div>
    );
}

export default ButtonComponent;
