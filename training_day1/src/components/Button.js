import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
function ButtonComponent() {

    const [name, setName] = useState("sourabh");

    return (
        <div className="container">
            <label for="name">Name:  </label>
            
            <input className="m-2" type="text" id="name" name="name" value={name}></input>
            <button className="btn btn-primary" onClick={() => { setName("React") }} >Click Me</button>
            <div>Hello {name}</div>
        </div>
    );
}

export default ButtonComponent;