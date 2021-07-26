import React from 'react';

class EducationInput extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            educationLevel: ""
        }
    }
    render() {
        return (
            <div>
                <label for="cars">Choose an education level:</label>
                <select name="education" id="education" >
                    <option value="10th">10th</option>
                    <option value="12th">12th</option>
                    <option value="B.E">B.E</option>
                </select><br /><br />
            </div>
        );
    }
}

export default EducationInput;