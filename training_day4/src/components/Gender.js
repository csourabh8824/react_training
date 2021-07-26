import React from 'react';

function GenderInput(props){
    
    return (
        <div>
            <p style={{ marginRight: "70px" }} >Gender:
                <input  type="radio" id="html" name="gender" value="male" onChange={(e) =>  props.onChange(e.target.value)} />
                <label for="male">Male</label>
                <input type="radio" id="css" name="gender" value="female" onChange={(e) => props.onChange(e.target.value)} />
                <label for="female">Female</label><br></br> 
            </p>
        </div>
    );
    
}

export default GenderInput;