import React from 'react';

function ProfileInput(props){
    
    return (
        <div>
            <p style={{ marginRight: "-55px" }} >Profile Pic: 
                <input value={props.value} type="file" onChange={(e) => { props.onChange(e.target.value) }} required/>
            </p><br />
        </div>
    );
    
}

export default ProfileInput;