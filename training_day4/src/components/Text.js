import React from 'react';

function TextInput(props) {
    return (
        <div>
            Name:<input type="text" 
          value={props.value} placeholder="Name" 
          onChange={e => props.onChange(e.target.value)}/><br></br><br></br>
        </div>
    );
}

export default TextInput;