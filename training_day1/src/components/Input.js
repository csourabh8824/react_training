import { useState } from "react";

function Input(props) {
    const [value, setValue] = useState('sourabh');
    return (
        <div>
            { value ? <input type="text" value={value}></input> : <input type="text" placeholder="Enter Email"></input> }
        </div>
    );
}
export default Input;
