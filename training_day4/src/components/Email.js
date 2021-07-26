import React from 'react';

function EmailInput(props) {
    return (
        <div>
            Email:<input type="email" 
          value={props.value} placeholder="Email" 
          onChange={e => props.onChange(e.target.value)}/><br></br><br></br>
        </div>
    );
}

export default EmailInput;