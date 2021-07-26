import React from 'react';

function ConfirmPasswordInput(props){
    
    return (
        <div>
            Confirm Password: <input type="password" value={props.value} placeholder="Enter Password" onChange={(e) => {props.onChange(e.target.value) }} /><p style={{color:"red"}}></p><br/><br />
        </div>
    );
    
}

export default ConfirmPasswordInput;