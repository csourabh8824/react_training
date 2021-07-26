import React from 'react';

function PasswordInput(props){
    
    return (
        <div>
            Password: <input type="password" value={props.value} placeholder="Enter Password" onChange={(e) => { props.onChange(e.target.value) }} /><p style={{color:"red"}}></p><br /><br />
        </div>
    );
    
}

export default PasswordInput;