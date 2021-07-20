import { useState } from "react";
import Input from "./Input";

function InputText(props) {
    const [value, setValue] = useState(props.value);
    
    function handleChange(e) {
        setValue(e.target.value);
        console.log(e.target.value);
    }
    return (
        <div>
            <label>Email:</label>
            <input type="text" placeholder={props.placeholder} value={value} onChange={handleChange}></input>
            <Input value={props.value}/>
        </div>
    );
}
export default InputText;
