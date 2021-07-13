import { useState } from "react";

function InputText(props) {
    const [value,setValue] = useState(props.value);
    function handleChange(e) {
        setValue(e.target.value);
    }
    return (
        <div>
            <label>Email:</label>
            <input type="text" placeholder={props.placeholder} value={value} onChange={handleChange}></input>
        </div>
    );
}
export default InputText;
