import React from 'react';

function DateInput(props){
    
    return (
        <div>
            Dob: <input style={{ marginRight: "95px" }} type="date" placeholder="Enter date" onChange={e=>props.onChange(e.target.value)} max="2021-07-26" /><p style={{color:"red"}}></p><br/><br />
        </div>
    );
    
}

export default DateInput;